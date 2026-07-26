const tips = [
  "💧 Drink at least 2 liters of water daily.",
  "🥗 Eat a balanced diet rich in vegetables.",
  "🏃 Walk for at least 30 minutes.",
  "😴 Sleep 7–8 hours every night.",
  "❤️ Get regular health checkups.",
];

function HealthTips() {
  return (
    <div className="rounded-2xl bg-white p-7 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Health Tips
      </h2>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="rounded-xl bg-blue-50 p-4"
          >
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthTips;