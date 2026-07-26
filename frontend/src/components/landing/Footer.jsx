function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-8">
        <h2 className="text-3xl font-bold text-blue-400">
          HealthGPT
        </h2>

        <p className="mt-4 text-slate-300">
          AI Powered Healthcare Assistant
        </p>

        <div className="mt-8 flex gap-8">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
          <a href="#">GitHub</a>
        </div>

        <p className="mt-8 text-slate-400">
          © 2026 HealthGPT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;