import api from "./api";

export const sendChatMessage = async (
  message,
  chatSessionId = null
) => {
  const response = await api.post("/chat/", {
    message,
    chat_session_id: chatSessionId,
  });

  return response.data;
};