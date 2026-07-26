from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.dependencies.auth import get_current_user
from app.models.chat_session import ChatSession
from app.models.message import Message
from app.models.user import User
from app.schemas.chat import ChatRequest, ChatResponse
from app.schemas.history import ChatSessionResponse, MessageResponse
from app.services.ai_service import get_ai_response

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.post("/", response_model=ChatResponse)
def chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    try:

        # Continue an existing chat
        if request.chat_session_id:

            chat_session = (
                db.query(ChatSession)
                .filter(
                    ChatSession.id == request.chat_session_id,
                    ChatSession.user_id == current_user.id
                )
                .first()
            )

            if not chat_session:
                raise HTTPException(
                    status_code=404,
                    detail="Chat session not found."
                )

        # Create a new chat
        else:

            chat_session = ChatSession(
                title=request.message[:40],
                user_id=current_user.id
            )

            db.add(chat_session)
            db.commit()
            db.refresh(chat_session)

        # Save user message
        user_message = Message(
            chat_session_id=chat_session.id,
            sender="user",
            content=request.message,
        )

        db.add(user_message)
        db.commit()

        # Generate AI response
        ai_reply = get_ai_response(request.message)

        # Save AI response
        ai_message = Message(
            chat_session_id=chat_session.id,
            sender="assistant",
            content=ai_reply,
        )

        db.add(ai_message)
        db.commit()

        return ChatResponse(
            response=ai_reply,
            chat_session_id=chat_session.id
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@router.get(
    "/history",
    response_model=list[ChatSessionResponse]
)
def get_chat_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    sessions = (
        db.query(ChatSession)
        .filter(ChatSession.user_id == current_user.id)
        .order_by(ChatSession.created_at.desc())
        .all()
    )

    return sessions


@router.get(
    "/{session_id}",
    response_model=list[MessageResponse]
)
def get_chat_messages(
    session_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    chat_session = (
        db.query(ChatSession)
        .filter(
            ChatSession.id == session_id,
            ChatSession.user_id == current_user.id
        )
        .first()
    )

    if not chat_session:
        raise HTTPException(
            status_code=404,
            detail="Chat session not found."
        )

    return chat_session.messages