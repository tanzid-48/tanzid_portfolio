"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const saved = localStorage.theme;
    const dark = saved !== "light";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.theme = newDark ? "dark" : "light";
  };

  const handleMobileNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 dark:bg-dark/80 backdrop-blur-lg border-b border-light-border dark:border-dark-border" : ""
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#home" className="font-space text-xl font-bold text-dark dark:text-white">
          tanzid<span className="text-cyan">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.name}>
                <a href={item.href}
                  className={`font-inter text-sm transition-colors duration-300 relative ${
                    isActive ? "text-cyan" : "text-gray-600 dark:text-white/60 hover:text-cyan dark:hover:text-cyan"
                  }`}>
                  {item.name}
                  {isActive && (
                    <motion.span layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-light-border dark:border-dark-border flex items-center justify-center text-gray-600 dark:text-white/60 hover:border-cyan hover:text-cyan transition-all">
            {isDark ? "☀️" : "🌙"}
          </button>
          <a href="#contact"
            className="hidden md:flex items-center px-5 py-2 bg-cyan text-dark font-space font-semibold text-sm rounded-full hover:bg-cyan-light transition-all duration-300">
            Hire Me
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-1">
            <span className={`block w-6 h-0.5 bg-dark dark:bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-dark dark:bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-dark dark:bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-card border-t border-light-border dark:border-dark-border">
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.name}>
                    <a href={item.href}
                      onClick={(e) => handleMobileNav(e, item.href)}
                      className={`font-inter text-base transition-colors ${
                        isActive ? "text-cyan font-medium" : "text-gray-600 dark:text-white/70 hover:text-cyan"
                      }`}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <li>
                <a href="#contact" onClick={(e) => handleMobileNav(e, "#contact")}
                  className="inline-block px-6 py-2 bg-cyan text-dark font-space font-semibold text-sm rounded-full">
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
