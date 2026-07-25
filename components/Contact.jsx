"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData }).then(r => r.json());
    if (res.success) { setResult("Message sent successfully! 🎉"); e.target.reset(); }
    else setResult(res.message);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-light dark:bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-cyan font-inter text-sm tracking-widest uppercase mb-3">Let&apos;s Talk</p>
          <h2 className="font-space text-4xl lg:text-5xl font-bold text-dark dark:text-white">Get In Touch</h2>
          <p className="font-inter text-gray-500 dark:text-white/40 mt-4 max-w-xl mx-auto">
            Have a project idea or want to hire me? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            {[
              { icon: "📧", label: "Email", value: "mdtanzid.525@gmail.com", href: "mailto:mdtanzid.525@gmail.com" },
              { icon: "📞", label: "WhatsApp", value: "+880 1798-546510", href: "https://wa.me/8801798546510" },
              { icon: "📍", label: "Location", value: "Bogura, Bangladesh", href: null },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan/10 border border-cyan/20 rounded-xl flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="font-inter text-xs text-gray-400 dark:text-white/30">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" className="font-space text-dark dark:text-white hover:text-cyan transition-colors">{item.value}</a>
                  ) : (
                    <p className="font-space text-dark dark:text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-light-border dark:border-dark-border">
              <p className="font-inter text-xs text-gray-400 dark:text-white/30 mb-3">Find me on</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { name: "GitHub", href: "https://github.com/tanzid-48" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/tanzidmondol" },
                  { name: "WhatsApp", href: "https://wa.me/8801798546510" },
                  { name: "Facebook", href: "#" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank"
                    className="px-4 py-2 border border-gray-200 dark:border-dark-border rounded-full text-sm font-inter text-gray-600 dark:text-white/60 hover:border-cyan hover:text-cyan transition-all">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={onSubmit} className="space-y-4">
              <input type="hidden" name="subject" value="Tanzid Portfolio - New Message" />
              <input type="text" name="name" placeholder="Your name" required
                className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl font-inter text-dark dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:border-cyan focus:outline-none transition-colors" />
              <input type="email" name="email" placeholder="Your email" required
                className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl font-inter text-dark dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:border-cyan focus:outline-none transition-colors" />
              <textarea name="message" rows="5" placeholder="Your message" required
                className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl font-inter text-dark dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:border-cyan focus:outline-none transition-colors resize-none" />
              <button type="submit"
                className="w-full py-3 bg-cyan text-dark font-space font-semibold rounded-xl hover:bg-cyan-light transition-all duration-300">
                Send Message
              </button>
              {result && <p className="font-inter text-sm text-center text-gray-500 dark:text-white/50">{result}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
