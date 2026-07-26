function MessageBubble({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div
      className={`mb-4 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-5 py-3 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-200 text-black"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default MessageBubble;