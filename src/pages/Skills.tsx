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
    {
      name: "HTML",
      img: htmlImg,
    },
    {
      name: "CSS",
      img: cssImg,
    },
    {
      name: "JavaScript",
      img: jsImg,
    },
    {
      name: "TypeScript",
      img: tsImg,
    },
    { name: "Bootstrap", img: bstImg },
    {
      name: "Tailwind Css",
      img: tailImg,
    },
    { name: "React", img: reactImg },
  ];

  const backendSkills: Skill[] = [
    { name: "C#", img: csImg },
    {
      name: "Python",
      img: pyImg,
    },
    { name: "Django", img: djImg },
    {
      name: "Node.js",
      img: nodeImg,
    },
    { name: "MySQL", img: mysqlImg },
  ];

  const otherSkills: Skill[] = [
    {
      name: "Java",
      img: javaImg,
    },
    { name: "C++", img: cppImg },
    { name: "C", img: cImg },
    {
      name: "REST APIs",
      img: raImg,
    },
    { name: "Git", img: gitImg },
    { name: "Bash", img: bashImg },
    { name: "Ubuntu", img: ubuntuImg },
    { name: "Windows", img: windowsImg },
    { name: "Unity", img: unityImg },
    { name: "VS Code", img: vscImg },
    {
      name: "Visual Studio",
      img: vsImg,
    },
    { name: "NetBeans", img: nbImg },
    { name: "AWS", img: awsImg },
    { name: "Docker", img: dockerImg },
    { name: "Figma", img: figmaImg },
    { name: "Slack", img: slackImg },
    {
      name: "Github Desktop",
      img: githubImg,
    },
  ];

  const renderSkillCards = (skills: Skill[]) =>
    skills.map((skill) => (
      <div
        key={skill.name}
        className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
      >
        <img
          src={skill.img}
          alt={skill.name}
          className="w-16 h-16 object-contain mb-2"
        />
        <span className="text-white text-sm text-center">{skill.name}</span>
      </div>
    ));

  return (
    <div className="p-8 space-y-12 bg-[var(--color-bg)]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 text-[var(--color-text-secondary)]">
          Skills
        </h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-center text-[var(--color-text-secondary)] mb-4">
            Frontend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            {renderSkillCards(frontendSkills)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center text-[var(--color-text-secondary)] mb-4">
            Backend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            {renderSkillCards(backendSkills)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center text-[var(--color-text-secondary)] mb-4">
            Other Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            {renderSkillCards(otherSkills)}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
