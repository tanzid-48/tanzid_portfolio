"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "shadcn/ui", icon: null },
      { name: "Hero UI", icon: null },
      { name: "Framer Motion", icon: null },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST API", icon: null },
      { name: "BetterAuth", icon: null },
      { name: "JWT", icon: null },
      { name: "Stripe", icon: null },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    ],
  },
  {
    category: "Mobile & Desktop",
    icon: "📱",
    skills: [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaFX", icon: null },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ],
  },
  {
    category: "AI & Research",
    icon: "🤖",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Machine Learning (learning)", icon: null },
      { name: "Thesis (ongoing)", icon: null },
    ],
  },
  {
    category: "Tools & Deploy",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Vercel", icon: null },
      { name: "Render", icon: null },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-light dark:bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan font-inter text-sm tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="font-space text-4xl lg:text-5xl font-bold text-dark dark:text-white">Skills & Tech Stack</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 hover:border-cyan/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan/10 border border-cyan/20 rounded-xl flex items-center justify-center text-xl group-hover:bg-cyan/20 transition-all">
                  {group.icon}
                </div>
                <h3 className="font-space text-dark dark:text-white font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center gap-1.5 font-inter text-xs text-gray-600 dark:text-white/60 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-full"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 object-contain"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
