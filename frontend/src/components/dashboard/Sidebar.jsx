import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiMessageSquare,
  FiUpload,
  FiActivity,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

function Sidebar() {
  const menus = [
    {
      name: "Dashboard",
      icon: <FiHome size={20} />,
      path: "/dashboard",
    },
    {
      name: "AI Chat",
      icon: <FiMessageSquare size={20} />,
      path: "/dashboard/chat",
    },
    {
      name: "Upload Reports",
      icon: <FiUpload size={20} />,
      path: "/dashboard/upload",
    },
    {
      name: "Health Summary",
      icon: <FiActivity size={20} />,
      path: "/dashboard/summary",
    },
    {
      name: "Settings",
      icon: <FiSettings size={20} />,
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside className="flex h-screen w-72 flex-col bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-8">
        <h1 className="text-3xl font-bold text-blue-400">
          HealthGPT
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Healthcare Assistant
        </p>
      </div>

      <div className="flex-1 px-5 py-8">

        {menus.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `mb-3 flex items-center gap-4 rounded-xl px-5 py-4 transition ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

      </div>

      <div className="border-t border-slate-700 p-5">

        <button className="flex w-full items-center gap-4 rounded-xl p-4 hover:bg-red-600">

          <FiLogOut />

          Logout

        </button>

      </div>
    </aside>
  );
}

export default Sidebar;