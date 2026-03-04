import htmlImg from "../../img/programming-skills/HTML5_logo_and_wordmark.svg.png";
import cssImg from "../../img/programming-skills/CSS3_logo_and_wordmark.svg.png";
import jsImg from "../../img/programming-skills/JavaScript-Logo.png";
import tsImg from "../../img/programming-skills/Typescript_logo_2020.svg.png";
import bstImg from "../../img/other-skills-img/Bootstrap_logo.png";
import tailImg from "../../img/programming-skills/Tailwind_CSS_Logo.svg.png";
import reactImg from "../../img/programming-skills/React-icon.svg.png";
import csImg from "../../img/programming-skills/Logo_C_sharp.svg.png";
import pyImg from "../../img/programming-skills/Python-logo-notext.svg.png";
import djImg from "../../img/programming-skills/Django-Logo.png";
import nodeImg from "../../img/programming-skills/node-js-logo-png_seeklogo-273749.png";
import mysqlImg from "../../img/other-skills-img/mysqlworkbench.png";
import javaImg from "../../img/programming-skills/java_original_logo_icon_146458.png";
import cppImg from "../../img/programming-skills/ISO_C++_Logo.svg.png";
import cImg from "../../img/programming-skills/C_Logo.png";
import raImg from "../../img/programming-skills/rest-api-icon.png";
import gitImg from "../../img/other-skills-img/git.png";
import bashImg from "../../img/other-skills-img/bash.png";
import ubuntuImg from "../../img/other-skills-img/Ubuntu.png";
import windowsImg from "../../img/other-skills-img/windows.png";
import unityImg from "../../img/other-skills-img/unity.png";
import vscImg from "../../img/other-skills-img/vscode.png";
import vsImg from "../../img/other-skills-img/Visual-Studio-logo.png";
import nbImg from "../../img/other-skills-img/netbeans.png";
import awsImg from "../../img/other-skills-img/aws.png";
import dockerImg from "../../img/programming-skills/docker.png";
import figmaImg from "../../img/other-skills-img/Figma.png";
import slackImg from "../../img/other-skills-img/Slack.png";
import githubImg from "../../img/other-skills-img/github_desktop.png";

function Skills() {
  interface Skill {
    name: string;
    img: string;
  }

  const frontendSkills: Skill[] = [
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "JavaScript", img: jsImg },
    { name: "TypeScript", img: tsImg },
    { name: "Bootstrap", img: bstImg },
    { name: "Tailwind CSS", img: tailImg },
    { name: "React", img: reactImg },
  ];

  const backendSkills: Skill[] = [
    { name: "C#", img: csImg },
    { name: "Python", img: pyImg },
    { name: "Django", img: djImg },
    { name: "Node.js", img: nodeImg },
    { name: "MySQL", img: mysqlImg },
  ];

  const otherSkills: Skill[] = [
    { name: "Java", img: javaImg },
    { name: "C++", img: cppImg },
    { name: "C", img: cImg },
    { name: "REST APIs", img: raImg },
    { name: "Git", img: gitImg },
    { name: "Bash", img: bashImg },
    { name: "Ubuntu", img: ubuntuImg },
    { name: "Windows", img: windowsImg },
    { name: "Unity", img: unityImg },
    { name: "VS Code", img: vscImg },
    { name: "Visual Studio", img: vsImg },
    { name: "NetBeans", img: nbImg },
    { name: "AWS", img: awsImg },
    { name: "Docker", img: dockerImg },
    { name: "Figma", img: figmaImg },
    { name: "Slack", img: slackImg },
    { name: "GitHub Desktop", img: githubImg },
  ];

  const renderSkillCards = (skills: Skill[], accentColor: string) =>
    skills.map((skill) => (
      <div
        key={skill.name}
        className="group relative p-6 rounded-2xl bg-slate-800/40 border border-white/5 
                   hover:border-white/20 transition-all duration-500 overflow-hidden"
      >
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${accentColor} transition-opacity duration-500`}
        />

        <div className="relative z-10">
          <div className="w-12 h-12 mx-auto mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <img
              src={skill.img}
              alt={skill.name}
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            />
          </div>
          <p className="text-center font-bold text-slate-300 group-hover:text-white text-xs tracking-widest uppercase transition-colors">
            {skill.name}
          </p>
        </div>
        <div
          className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${accentColor} transition-all duration-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]`}
        />
      </div>
    ));

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-8 py-32">
        <div className="mb-24 space-y-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
            Expertise &{" "}
            <span className="text-transparent bg-clip-text bg-purple-600 to-blue-600 bg-gradient-to-r">
              Tools
            </span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto font-medium leading-relaxed">
            Technologies I master and enjoy using to build digital products.
          </p>
        </div>

        <div className="space-y-32">
          <section>
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 whitespace-nowrap">
                Frontend
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/30 to-transparent" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {renderSkillCards(frontendSkills, "from-cyan-500 to-blue-500")}
            </div>
          </section>
          <section>
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-purple-400 whitespace-nowrap">
                Backend
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/30 to-transparent" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {renderSkillCards(backendSkills, "from-purple-500 to-pink-500")}
            </div>
          </section>
          <section>
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 whitespace-nowrap">
                Workflow
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-slate-500/30 to-transparent" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {renderSkillCards(otherSkills, "from-slate-400 to-slate-600")}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Skills;
