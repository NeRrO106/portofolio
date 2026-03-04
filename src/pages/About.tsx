import Andrei from "../../pdfs/Andrei.pdf";
import Certification from "../../pdfs/Certificari_Andrei_Cosma.pdf";
import portret from "../../img/imgportret.jpg";

function About() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-purple-200/50 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[5%] w-80 h-80 bg-orange-200/50 blur-[100px] rounded-full" />
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-blue-200/40 blur-[80px] rounded-full" />

      <div className="relative z-10 max-w-5xl w-full bg-white/40 backdrop-blur-2xl border border-white/20 p-8 md:p-16 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center gap-12">
        <div className="relative flex-shrink-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full" />
          <img
            src={portret}
            alt="Andrei"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2rem] border-4 border-white shadow-xl"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Hello, I am Andrei! 👋
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
            Full Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Developer
            </span>
          </h1>
          <p className="text-slate-800 text-lg md:text-xl leading-relaxed mb-8 font-medium">
            Engineering student & Full Stack Developer. Solving complex problems
            through clean code, scalable .NET & React architectures, and
            mathematical rigor.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href={Andrei} target="_blank" rel="noreferrer">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-slate-200">
                Download CV
              </button>
            </a>
            <a href={Certification} target="_blank" rel="noreferrer">
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-sm hover:scale-105">
                Certifications
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
