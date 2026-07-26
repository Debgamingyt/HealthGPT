const chats = [
  "Blood Test Analysis",
  "Diabetes Consultation",
  "Prescription Review",
  "Headache Discussion",
  "Annual Health Check",
];

function ChatHistory() {
  return (
    <div className="h-full rounded-2xl bg-white p-5 shadow">
      <h2 className="mb-5 text-xl font-bold">
        Chat History
      </h2>

      <div className="space-y-3">
        {chats.map((chat) => (
          <button
            key={chat}
            className="w-full rounded-lg bg-slate-100 p-3 text-left transition hover:bg-blue-100"
          >
            {chat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChatHistory;