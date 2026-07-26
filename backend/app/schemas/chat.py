from typing import Optional

from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str
    chat_session_id: Optional[int] = None


class ChatResponse(BaseModel):
    response: str
    chat_session_id: int