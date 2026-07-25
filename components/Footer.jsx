const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-light-border dark:border-dark-border bg-light dark:bg-dark">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-space text-xl font-bold text-dark dark:text-white">
          tanzid<span className="text-cyan">.</span>
        </p>
        <p className="font-inter text-gray-400 dark:text-white/30 text-sm">
          © {new Date().getFullYear()} Md. Tanzid Mondol. All rights reserved.
        </p>
        <div className="flex gap-6">
          {[
            { name: "GitHub", href: "https://github.com/tanzid-48" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/tanzidmondol" },
            { name: "Email", href: "mailto:mdtanzid.525@gmail.com" },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" className="font-inter text-gray-400 dark:text-white/30 text-sm hover:text-cyan transition-colors">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
