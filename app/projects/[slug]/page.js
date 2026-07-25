import { projects, getProjectBySlug } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Tanzid Mondol`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-light dark:bg-dark text-dark dark:text-white">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-inter text-gray-500 dark:text-white/50 hover:text-cyan transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        {/* Hero Image */}
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden mb-8">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute top-4 left-4 font-inter text-xs text-white bg-cyan/80 px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-space text-2xl sm:text-4xl font-bold mb-3">
          {project.title}
        </h1>
        <p className="font-inter text-gray-500 dark:text-white/60 text-base mb-6">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-5 sm:p-6 mb-6">
          <h2 className="font-space text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-cyan">⚡</span> Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="font-inter text-sm text-cyan bg-cyan/10 border border-cyan/20 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-5 sm:p-6 mb-6">
          <h2 className="font-space text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-cyan">📋</span> Project Description
          </h2>
          <p className="font-inter text-gray-600 dark:text-white/70 leading-relaxed">
            {project.details.description}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="flex-1 text-center py-3 bg-cyan text-dark font-space font-semibold rounded-xl hover:bg-cyan-light transition-all"
            >
              🌐 View Live Project
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            className="flex-1 text-center py-3 border border-gray-200 dark:border-dark-border text-dark dark:text-white font-space rounded-xl hover:border-cyan hover:text-cyan transition-all"
          >
            GitHub Repository →
          </a>
        </div>

        {/* Challenges */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-5 sm:p-6 mb-6">
          <h2 className="font-space text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-cyan">⚠️</span> Challenges Faced
          </h2>
          <ul className="space-y-3">
            {project.details.challenges.map((c, i) => (
              <li
                key={i}
                className="flex gap-3 font-inter text-gray-600 dark:text-white/70 text-sm"
              >
                <span className="text-cyan mt-0.5 flex-shrink-0">•</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Future Plans */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-5 sm:p-6 mb-8">
          <h2 className="font-space text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-cyan">🚀</span> Future Improvements & Plans
          </h2>
          <ul className="space-y-3">
            {project.details.improvements.map((imp, i) => (
              <li
                key={i}
                className="flex gap-3 font-inter text-gray-600 dark:text-white/70 text-sm"
              >
                <span className="text-cyan mt-0.5 flex-shrink-0">✓</span>
                {imp}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="font-space text-xl font-semibold mb-4">
            Other Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 2)
              .map((p, i) => (
                <Link
                  key={i}
                  href={`/projects/${p.slug}`}
                  className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-4 hover:border-cyan/40 transition-all flex gap-4 items-center group"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-space text-sm font-semibold text-dark dark:text-white group-hover:text-cyan transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-inter text-xs text-gray-500 dark:text-white/40 mt-1">
                      {p.type}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
