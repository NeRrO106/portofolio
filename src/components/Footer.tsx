function Footer() {
  return (
    <footer className="relative mt-20 bg-[#0f172a] border-t border-white/5">
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-sm rounded-full animate-pulse opacity-50" />
              <div className="relative w-2 h-2 rounded-full bg-purple-400" />
            </div>
            <span className="text-white font-bold tracking-tighter text-sm uppercase">
              Andrei <span className="text-slate-500">Cosma</span>
            </span>
          </div>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-medium">
            Engineering & Software Development
          </p>
          <div className="flex flex-col items-center md:items-start space-y-1 pt-2">
            <a
              href="mailto:andrei.cosma0507@gmail.com"
              className="text-slate-400 hover:text-white transition-colors text-[10px] font-mono tracking-wider"
            >
              📧 andrei.cosma0507@gmail.com
            </a>
            <a
              href="tel:+40787531949"
              className="text-slate-400 hover:text-white transition-colors text-[10px] font-mono tracking-wider"
            >
              📞 +40 787531949
            </a>
          </div>
        </div>
        <nav className="flex items-center space-x-12">
          <a
            href="https://www.linkedin.com/in/andrei-cosma-28b720273/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-400 transition-all duration-300"
          >
            <span className="mr-2 text-cyan-500/0 group-hover:text-cyan-500 group-hover:animate-bounce transition-all">
              ↗
            </span>
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </a>

          <a
            href="https://github.com/NeRrO106"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-purple-400 transition-all duration-300"
          >
            <span className="mr-2 text-purple-500/0 group-hover:text-purple-500 group-hover:animate-bounce transition-all">
              ↗
            </span>
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          </a>
        </nav>
        <div className="text-right">
          <span className="text-slate-600 text-[10px] font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} — ANDREI COSMA
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-900/10 blur-[100px] pointer-events-none" />
    </footer>
  );
}

export default Footer;
