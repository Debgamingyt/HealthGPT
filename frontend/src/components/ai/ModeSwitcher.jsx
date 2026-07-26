function ModeSwitcher({ activeMode, setActiveMode }) {
  const modes = [
    {
      id: "text",
      label: "💬 Text Chat",
    },
    {
      id: "voice",
      label: "🎤 Voice Dictation",
    },
    {
      id: "live",
      label: "🎧 Live Voice",
    },
    {
      id: "report",
      label: "📄 Analyze Report",
    },
  ];

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => setActiveMode(mode.id)}
          className={`rounded-xl px-5 py-3 font-medium transition ${
            activeMode === mode.id
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-slate-100"
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}

export default ModeSwitcher;