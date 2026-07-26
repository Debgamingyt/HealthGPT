import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ChatHistory from "../components/ai/ChatHistory";
import ChatWindow from "../components/ai/ChatWindow";
import ChatInput from "../components/ai/ChatInput";
import ModeSwitcher from "../components/ai/ModeSwitcher";

import { sendChatMessage } from "../services/chatService";

function Chat() {
  const [activeMode, setActiveMode] = useState("text");

  const [chatSessionId, setChatSessionId] = useState(null);

  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message: "👋 Welcome to HealthGPT!",
    },
    {
      sender: "assistant",
      message:
        "I'm your AI Healthcare Assistant. Ask me anything about your health.",
    },
  ]);

  // This will later restart the microphone
  // after the AI finishes speaking.
  const handleSpeechEnd = () => {
    if (activeMode === "live") {
      console.log("🎤 Ready to listen again...");
    }
  };

  const handleModeChange = (mode) => {
    // Stop speaking whenever mode changes
    window.speechSynthesis.cancel();

    setActiveMode(mode);
  };

  const sendMessage = async (text) => {
    const userMessage = {
      sender: "user",
      message: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const data = await sendChatMessage(
        text,
        chatSessionId
      );

      if (!chatSessionId) {
        setChatSessionId(data.chat_session_id);
      }

      const aiMessage = {
        sender: "assistant",
        message: data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message:
            "❌ Sorry, something went wrong while contacting the AI.",
        },
      ]);
    }
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <ChatHistory />
        </div>

        <div className="col-span-9">
          <ModeSwitcher
            activeMode={activeMode}
            setActiveMode={handleModeChange}
          />

          <ChatWindow
            messages={messages}
            onSpeechEnd={handleSpeechEnd}
          />

          <ChatInput onSend={sendMessage} />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Chat;