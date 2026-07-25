"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-cyan font-inter text-sm tracking-widest uppercase mb-3">My Work</p>
          <h2 className="font-space text-4xl lg:text-5xl font-bold text-dark dark:text-white">Featured Projects</h2>
          <p className="font-inter text-gray-500 dark:text-white/40 mt-4">Real projects built with modern technologies and deployed to production.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl overflow-hidden hover:border-cyan/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col">

              {/* Image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 font-inter text-xs text-white bg-cyan/80 px-3 py-1 rounded-full">
                  {p.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-space text-dark dark:text-white font-semibold mb-2">{p.title}</h3>
                <p className="font-inter text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.slice(0, 3).map((tag, j) => (
                    <span key={j} className="font-inter text-xs text-gray-500 dark:text-white/40 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="font-inter text-xs text-cyan bg-cyan/10 px-2 py-0.5 rounded-full">+{p.tags.length - 3}</span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Link href={`/projects/${p.slug}`}
                    className="flex-1 text-center py-2 bg-cyan text-dark font-space font-semibold text-sm rounded-xl hover:bg-cyan-light transition-all">
                    View Details
                  </Link>
                  {p.live && (
                    <a href={p.live} target="_blank"
                      className="px-3 py-2 border border-gray-200 dark:border-dark-border text-gray-500 dark:text-white/60 text-sm rounded-xl hover:border-cyan hover:text-cyan transition-all">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="https://github.com/tanzid-48" target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 dark:border-dark-border text-dark dark:text-white font-space rounded-full hover:border-cyan hover:text-cyan transition-all">
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
