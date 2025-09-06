function Skills() {
  interface Skill {
    name: string;
    img: string;
  }

  const frontendSkills: Skill[] = [
    {
      name: "HTML",
      img: "../../img/programming-skills/HTML5_logo_and_wordmark.svg.png",
    },
    {
      name: "CSS",
      img: "../../img/programming-skills/CSS3_logo_and_wordmark.svg.png",
    },
    {
      name: "JavaScript",
      img: "../../img/programming-skills/JavaScript-Logo.png",
    },
    {
      name: "TypeScript",
      img: "../../img/programming-skills/Typescript_logo_2020.svg.png",
    },
    { name: "Bootstrap", img: "../../img/other-skills-img/Bootstrap_logo.png" },
    {
      name: "Tailwind Css",
      img: "../../img/programming-skills/Tailwind_CSS_Logo.svg.png",
    },
    { name: "React", img: "../../img/programming-skills/React-icon.svg.png" },
  ];

  const backendSkills: Skill[] = [
    { name: "C#", img: "../../img/programming-skills/Logo_C_sharp.svg.png" },
    {
      name: "Python",
      img: "../../img/programming-skills/Python-logo-notext.svg.png",
    },
    { name: "Django", img: "../../img/programming-skills/Django-Logo.png" },
    {
      name: "Node.js",
      img: "../../img/programming-skills/node-js-logo-png_seeklogo-273749.png",
    },
    { name: "MySQL", img: "../../img/other-skills-img/mysqlworkbench.png" },
  ];

  const otherSkills: Skill[] = [
    {
      name: "Java",
      img: "../../img/programming-skills/java_original_logo_icon_146458.png",
    },
    { name: "C++", img: "../../img/programming-skills/ISO_C++_Logo.svg.png" },
    { name: "C", img: "../../img/programming-skills/C_Logo.png" },
    {
      name: "REST APIs",
      img: "../../img/programming-skills/rest-api-icon.png",
    },
    { name: "Git", img: "../../img/other-skills-img/git.png" },
    { name: "Bash", img: "../../img/other-skills-img/bash.png" },
    { name: "Ubuntu", img: "../../img/other-skills-img/Ubuntu.png" },
    { name: "Windows", img: "../../img/other-skills-img/windows.png" },
    { name: "Unity", img: "../../img/other-skills-img/unity.png" },
    { name: "VS Code", img: "../../img/other-skills-img/vscode.png" },
    {
      name: "Visual Studio",
      img: "../../img/other-skills-img/Visual-Studio-logo.png",
    },
    { name: "NetBeans", img: "../../img/other-skills-img/netbeans.png" },
    { name: "AWS", img: "../../img/other-skills-img/aws.png" },
    { name: "Docker", img: "../../img/programming-skills/docker.png" },
    { name: "Figma", img: "../../img/other-skills-img/Figma.png" },
    { name: "Slack", img: "../../img/other-skills-img/Slack.png" },
    {
      name: "Github Desktop",
      img: "../../img/other-skills-img/github_desktop.png",
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
