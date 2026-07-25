"use client";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Pundra University of Science & Technology (PUB)",
    location: "Gokul, Bogura, Bangladesh",
    year: "July 2023 – Present",
    detail: "Currently in 7th Semester | CGPA: 3.80 (Last Semester)",
    icon: "🎓",
    highlight: true,
    extra: "Final Year Thesis Ongoing — Targeting IEEE/Springer/Scopus publication",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bogura Government College",
    location: "Bogura, Bangladesh",
    year: "2021",
    detail: "GPA: 5.00",
    icon: "📚",
    highlight: false,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Baghopara Shahid Danesh Uddin School and College",
    location: "Bogura, Bangladesh",
    year: "2019",
    detail: "Completed",
    icon: "🏫",
    highlight: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-cyan font-inter text-sm tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="font-space text-4xl lg:text-5xl font-bold text-dark dark:text-white">Education</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-cyan/20 to-transparent" />

          <div className="space-y-8">
            {educationData.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex gap-6 sm:gap-8 items-start">
                <div className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 border ${item.highlight ? "bg-cyan/10 border-cyan/50" : "bg-white dark:bg-dark-card border-light-border dark:border-dark-border"}`}>
                  {item.icon}
                </div>

                <div className={`flex-1 p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:border-cyan/30 ${item.highlight ? "bg-cyan/5 border-cyan/20" : "bg-white dark:bg-dark-card border-light-border dark:border-dark-border"}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <h3 className="font-space text-base sm:text-lg text-dark dark:text-white font-semibold">{item.degree}</h3>
                    <span className="font-inter text-xs text-cyan bg-cyan/10 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {item.year}
                    </span>
                  </div>
                  <p className="font-inter text-gray-600 dark:text-white/60 text-sm font-medium">{item.institution}</p>
                  <p className="font-inter text-gray-400 dark:text-white/30 text-xs mt-1">{item.location}</p>
                  <p className="font-inter text-cyan text-xs mt-2">{item.detail}</p>
                  {item.extra && (
                    <p className="font-inter text-gray-500 dark:text-white/40 text-xs mt-2 italic">📝 {item.extra}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
