"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan font-inter text-sm tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="font-space text-4xl lg:text-5xl font-bold text-dark dark:text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-inter text-gray-600 dark:text-white/70 text-lg leading-relaxed mb-5">
              I am a{" "}
              <span className="text-cyan font-medium">
                Full Stack Developer
              </span>{" "}
              and final-year CSE student at Pundra University of Science &
              Technology, Bogura. My programming journey started in 2021 when I
              first learned C++ — since then I have never stopped building
              things.
            </p>
            <p className="font-inter text-gray-600 dark:text-white/70 leading-relaxed mb-5">
              I enrolled in{" "}
              <span className="text-cyan font-medium">
                Programming Hero Complete Web Development Course (Batch-13)
              </span>{" "}
              to sharpen my skills. By consistently delivering quality
              assignments, I earned a spot in the prestigious{" "}
              <span className="text-cyan font-medium">
                SCIC (Super Career Incubator Program)
              </span>{" "}
              — an exclusive opportunity for top performers.
            </p>
            <p className="font-inter text-gray-600 dark:text-white/70 leading-relaxed mb-5">
              I specialize in building complete web and mobile applications
              using{" "}
              <span className="text-cyan font-medium">
                MERN Stack, Next.js, TypeScript, Python, and Flutter
              </span>{" "}
              — with a strong focus on clean code, scalable architecture, and
              real-world deployment.
            </p>
            <p className="font-inter text-gray-600 dark:text-white/70 leading-relaxed mb-8">
              Outside of coding, I enjoy{" "}
              <span className="text-cyan font-medium">cricket, football,</span>{" "}
              and community volunteer work. I believe technology and community
              go hand in hand.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Md. Tanzid Mondol" },
                { label: "Email", value: "mdtanzid.525@gmail.com" },
                { label: "Location", value: "Thengamara, Bogura" },
                { label: "Status", value: "Open to Work ✅" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="font-inter text-xs text-gray-400 dark:text-white/30">
                    {item.label}
                  </p>
                  <p className="font-space text-sm text-dark dark:text-white font-medium mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: "🌐",
                title: "Web Dev",
                desc: "MERN Stack, Next.js, TypeScript",
              },
              { icon: "📱", title: "Mobile", desc: "Flutter, Dart, Firebase" },
              { icon: "☕", title: "Desktop", desc: "Java, JavaFX, C++" },
              {
                icon: "🔐",
                title: "Auth & API",
                desc: "BetterAuth, JWT, REST",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-5 hover:border-cyan/40 transition-all duration-300"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-space text-dark dark:text-white font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="font-inter text-gray-500 dark:text-white/40 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              role: "General Secretary",
              org: "Thengamara Uttarpara Jubo Sangstha",
              icon: "🤝",
            },
            {
              role: "Treasurer",
              org: "Pundra University Sporting Club",
              icon: "⚽",
            },
            {
              role: "Health Awareness Secretary",
              org: "PUB Blood AID",
              icon: "🩸",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-4"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-space text-sm text-dark dark:text-white font-semibold">
                  {item.role}
                </p>
                <p className="font-inter text-xs text-gray-400 dark:text-white/30">
                  {item.org}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
