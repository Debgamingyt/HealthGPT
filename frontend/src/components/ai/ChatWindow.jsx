import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ messages, onSpeechEnd = () => {} }) {
  const lastSpokenMessage = useRef("");

  useEffect(() => {
    if (!messages.length) return;

    const lastMessage = messages[messages.length - 1];

    // Only speak assistant messages
    if (lastMessage.sender !== "assistant") return;

    // Prevent speaking the same message twice
    if (lastSpokenMessage.current === lastMessage.message) return;

    lastSpokenMessage.current = lastMessage.message;

    // Stop any previous speech
    window.speechSynthesis.cancel();

    const speechText = lastMessage.message
      .replace(/^#{1,6}\s*/gm, "")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/`(.*?)`/g, "$1")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .replace(/\n{2,}/g, ". ")
      .replace(/\n/g, " ")
      .trim();

    const utterance = new SpeechSynthesisUtterance(speechText);

    const voices = window.speechSynthesis.getVoices();

    const preferredVoice =
      voices.find((v) => v.name.toLowerCase().includes("aria")) ||
      voices.find((v) => v.name.toLowerCase().includes("jenny")) ||
      voices.find((v) => v.name.toLowerCase().includes("guy")) ||
      voices.find((v) => v.lang.startsWith("en"));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    // 🔥 Notify parent when AI finishes speaking
    utterance.onend = () => {
      onSpeechEnd();
    };

    window.speechSynthesis.speak(utterance);

  }, [messages, onSpeechEnd]);

  return (
    <div className="h-125 overflow-y-auto rounded-2xl bg-white p-6 shadow">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          sender={msg.sender}
          message={msg.message}
        />
      ))}
    </div>
  );
}

export default ChatWindow;