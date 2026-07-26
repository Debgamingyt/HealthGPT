const activities = [
  "Uploaded Blood Test.pdf",
  "AI generated Health Summary",
  "Started Voice Conversation",
  "Updated Patient Profile",
  "Uploaded Prescription",
];

function RecentActivity() {
  return (
    <div className="rounded-2xl bg-white p-7 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-slate-50 p-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;