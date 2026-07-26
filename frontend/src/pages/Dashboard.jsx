import DashboardLayout from "../layouts/DashboardLayout";
import StatsCard from "../components/dashboard/StatsCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import HealthTips from "../components/dashboard/HealthTips";

function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2 text-gray-600">
        Welcome back! Here's your healthcare overview.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Health Score"
          value="92%"
          color="#16a34a"
        />

        <StatsCard
          title="Reports"
          value="14"
          color="#2563eb"
        />

        <StatsCard
          title="AI Chats"
          value="53"
          color="#9333ea"
        />

        <StatsCard
          title="Subscription"
          value="Free"
          color="#ea580c"
        />

      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <RecentActivity />

        <HealthTips />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;