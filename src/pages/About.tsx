import Andrei from "../../pdfs/Andrei.pdf";
import Certification from "../../pdfs/Certificari_Andrei_Cosma.pdf";
import portret from "../../img/imgportret.jpg";

function About() {
  return (
    <div className="bg-[var(--color-bg)] flex flex-col items-center justify-center gap-8 px-4 min-h-screen">
      <div className="flex-shrink-0">
        <img
          src={portret}
          alt="Portret Andrei Cosma"
          className="w-48 h-48 md:w-96 md:h-96 rounded-3xl object-cover mt-10"
        />
      </div>
      <div className="flex-1 text-[var(--color-text)] text-center mb-5 items-center justify-center">
        <h1 className="text-4xl font-bold mb-2">Andrei Cosma</h1>
        <h3 className="text-2xl italic mb-4">Full Stack Developer</h3>
        <p className="text-base md:text-lg mb-6">
          Student la Inginerie, pasionat de programare și rezolvarea problemelor
          complexe. Dedicat dezvoltării continue și îmbunătățirii abilităților
          mele tehnice în diverse limbaje și tehnologii. Caut oportunități de a
          aplica cunoștințele și a contribui la proiecte inovatoare, fiind
          eficient atât individual, cât și în echipe colaborative.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={Andrei} target="_blank" rel="noreferrer">
            <button className="bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 text-var(--color-text-secondary) font-bold py-3 px-6 rounded-xl shadow-md">
              Curriculum Vitae
            </button>
          </a>
          <a href={Certification} target="_blank" rel="noreferrer">
            <button className="bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 text-var(--color-text-secondary) font-bold py-3 px-6 rounded-xl shadow-md">
              Certification
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
