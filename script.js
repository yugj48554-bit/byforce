const { useState, useEffect } = React;

function LoginModal({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? "visible" : "invisible"
      }`}
    >
      {/* Background Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Sliding Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-[#061f14]
        shadow-2xl transform transition-transform duration-500
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-8 h-full flex flex-col justify-center">

          <h1 className="text-3xl font-extrabold text-emerald-400 mb-2">
            LumenPath
          </h1>
          <p className="text-gray-400 mb-8">
            Sign in to navigate your career with precision
          </p>

          {/* Email */}
          <label className="text-sm text-gray-400 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@domain.com"
            className="mb-4 px-4 py-3 rounded-lg bg-black/40 border border-emerald-900
            text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* Password */}
          <label className="text-sm text-gray-400 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="mb-6 px-4 py-3 rounded-lg bg-black/40 border border-emerald-900
            text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* Options */}
          <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <span className="text-emerald-400 cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-lg bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition">
            Log In
          </button>

          <p className="text-center text-gray-400 mt-6 text-sm">
            Don’t have an account?
            <span className="text-emerald-400 cursor-pointer ml-1">
              Get started
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document
      .getElementById("openLogin")
      .addEventListener("click", () => setOpen(true));
  }, []);

  return <LoginModal open={open} onClose={() => setOpen(false)} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
