import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Beginner", emoji: "📜" },
    { name: "CSS", level: "Intermediate", emoji: "🎨" },
    { name: "JavaScript", level: "Intermediate", emoji: "⚡" },
    { name: "TypeScript", level: "Intermediate", emoji: "🔐" },
    { name: "React", level: "Advanced", emoji: "🚀" },
    { name: "Next.js", level: "Intermediate", emoji: "🛠️" },
    { name: "Tailwind CSS", level: "Intermediate", emoji: "🌈" },
  ];

  return (
    <div id="skills" className="bg-[#0f172a] items-center text-white py-20 px-4 md:px-20 ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-16">
         Skills I Mastered
        </h2><br />
        <br />
        {skills.map((skill) => (
          <div className="flex flex-col items-center" key={skill.name}>
            <span className="text-4xl">{skill.emoji}</span>
            <h3 className="mt-2 font-semibold">{skill.name}</h3>
            <p className="text-textSecondary">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;