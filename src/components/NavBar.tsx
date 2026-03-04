import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/myprojects" },
  ];

  return (
    <nav className="sticky top-6 z-50 px-6">
      <div className="max-w-5xl mx-auto relative">
        <div className="rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-md px-8 h-16 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <NavLink to="/" className="group" onClick={() => setIsOpen(false)}>
            <span className="text-xl font-bold tracking-tighter text-white group-hover:text-purple-400 transition-colors">
              ANDREI COSMA{" "}
              <span className="text-purple-500/50 uppercase text-[10px] tracking-widest ml-1">
                Dev
              </span>
            </span>
          </NavLink>
          <ul className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    text-xs font-bold uppercase tracking-[0.2em] transition-all
                    ${isActive ? "text-purple-400" : "text-slate-400 hover:text-white"}
                  `}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden p-2 text-white transition-all overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-purple-500 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={`
          absolute top-20 left-0 w-full md:hidden transition-all duration-300 transform
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
        >
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 backdrop-blur-xl p-6 shadow-2xl">
            <ul className="flex flex-col gap-6 items-center">
              {menuItems.map((item) => (
                <li key={item.name} className="w-full text-center">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      block py-3 text-sm font-bold uppercase tracking-[0.2em] rounded-xl transition-all
                      ${isActive ? "bg-purple-500/20 text-purple-400" : "text-slate-400 hover:text-white"}
                    `}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
