import { useEffect, useRef, useState } from "react";
import { FiMic, FiPaperclip, FiSend } from "react-icons/fi";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();

    // One speech -> auto stop
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      setMessage(transcript);

      // Send immediately when the browser says
      // this is the final speech result.
      const lastResult = event.results[event.results.length - 1];

      if (lastResult.isFinal) {
        const finalText = transcript.trim();

        if (finalText) {
          onSend(finalText);
          setMessage("");
        }
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [onSend]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setMessage("");
      recognitionRef.current.start();
    }
  };

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message.trim());
    setMessage("");

    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="mt-5 rounded-2xl bg-white p-4 shadow">
      <div className="flex items-center gap-3">

        <button className="rounded-lg bg-slate-100 p-3 hover:bg-slate-200">
          <FiPaperclip size={20} />
        </button>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 rounded-lg border p-3 outline-none"
          placeholder="Ask HealthGPT anything..."
        />

        <button
          onClick={toggleListening}
          className={`rounded-lg p-3 transition ${
            isListening
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          <FiMic size={20} />
        </button>

        <button
          onClick={handleSend}
          className="rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
        >
          <FiSend size={20} />
        </button>

      </div>
    </div>
  );
}

export default ChatInput;