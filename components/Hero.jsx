"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const roles = ["Full Stack Developer", "MERN Stack Developer", "Next.js Developer", "Flutter Developer", "Java Developer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[roleIndex];
      if (!isDeleting) {
        setCurrentRole(current.slice(0, charIndex + 1));
        setCharIndex((p) => p + 1);
        if (charIndex + 1 === current.length) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setCurrentRole(current.slice(0, charIndex - 1));
        setCharIndex((p) => p - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-light dark:bg-dark relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10 pt-20">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5 mb-6">
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
            <span className="font-inter text-sm text-cyan">Available for work</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-space text-5xl lg:text-6xl font-bold text-dark dark:text-white leading-tight mb-4">
            Hi, I&apos;m<br />
            <span className="text-cyan">Tanzid</span> Mondol
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-space text-2xl text-gray-500 dark:text-white/50 mb-6 min-h-[36px] flex items-center gap-1">
            <span>{currentRole}</span>
            <span className="animate-pulse text-cyan">|</span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="font-inter text-gray-600 dark:text-white/60 leading-relaxed mb-8 max-w-lg">
            Passionate Full Stack Developer specializing in MERN Stack, Next.js, TypeScript, JavaScript, Python, and Flutter. Currently in final year at PUB, Bogura — working on thesis research targeting IEEE publication.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="px-8 py-3 bg-cyan text-dark font-space font-semibold rounded-full hover:bg-cyan-light transition-all duration-300">
              View Projects
            </a>
            <a href="//tanzid-resume.pdf" download="Tanzid_Mondol_Resume.pdf"className="px-8 py-3 border border-gray-300 dark:border-dark-border text-dark dark:text-white font-space rounded-full hover:border-cyan hover:text-cyan transition-all duration-300">
              Download CV
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex gap-8">
            {[{ v: "10+", l: "Projects" }, { v: "5+", l: "Technologies" }, { v: "3+", l: "Years Learning" }].map((s, i) => (
              <div key={i}>
                <p className="font-space text-2xl font-bold text-cyan">{s.v}</p>
                <p className="font-inter text-xs text-gray-500 dark:text-white/40 mt-1">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-cyan/20 shadow-[0_0_60px_rgba(6,182,212,0.1)]">
              <Image
                src="https://i.ibb.co.com/mVvzyMZ9/unnamed-5.jpg"
                alt="Tanzid Mondol"
                width={320}
                height={320}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -inset-3 rounded-2xl border border-cyan/10" />

            {/* Floating badges */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl px-3 py-2 shadow-lg">
              <p className="font-inter text-xs text-gray-500 dark:text-white/40">Stack</p>
              <p className="font-space text-sm text-cyan font-bold">MERN + Next.js</p>
            </motion.div>

            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl px-3 py-2 shadow-lg">
              <p className="font-inter text-xs text-gray-500 dark:text-white/40">University</p>
              <p className="font-space text-sm text-dark dark:text-white font-bold">PUB, Bogura</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
