import { FiBell, FiSearch } from "react-icons/fi";

function Topbar() {
  return (
    <header className="flex items-center justify-between rounded-2xl bg-white p-6 shadow">

      <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

        <FiSearch />

        <input
          placeholder="Search..."
          className="outline-none"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="rounded-full bg-slate-100 p-3">
          <FiBell />
        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">

            U

          </div>

          <div>

            <h2 className="font-semibold">
              User
            </h2>

            <p className="text-sm text-gray-500">
              Free Plan
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;