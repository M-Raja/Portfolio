import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 bg-grid-faint">
      <div className="text-center">
        <h1 className="font-display font-extrabold text-slate-900 text-7xl sm:text-8xl mb-4 tracking-tighter">
          4<span className="text-[#0B60B0]">0</span>4
        </h1>
        <p className="text-slate-600 text-lg mb-8">This page drifted off the grid.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1878D6] to-[#0B60B0] text-white font-semibold text-sm px-7 py-4 shadow-[0_10px_30px_-8px_rgba(11,96,176,0.5)] hover:scale-105 transition-transform duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
