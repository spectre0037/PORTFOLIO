import { useState } from 'react';
import { ExternalLink, Github, Maximize2, Sparkles } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Featured Projects"
        title="High-impact projects presented like product launches instead of static thumbnails."
        description="Each card is designed to feel cinematic, tactile, and expansion-ready."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group glass relative overflow-hidden rounded-[2rem] p-4 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70 transition duration-500 group-hover:opacity-100`} />
            <div className="relative rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
              <div className="flex h-52 flex-col justify-between rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_50%,transparent_100%)] p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/55">
                  <span>{project.category}</span>
                  <Sparkles size={14} className="text-[var(--accent-3)]" />
                </div>
                <div>
                  <p className="text-sm text-white/55">Project Image</p>
                  <h3 className="mt-2 text-display text-3xl font-bold">{project.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/68">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((stack) => (
                  <span key={stack} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/70">
                    {stack}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => setActiveProject(project)}>
                  <Maximize2 size={16} />
                  Open
                </Button>
                <Button variant="secondary" asChild>
                  <a href={project.href}>
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href={project.repo}>
                    <Github size={16} />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal open={Boolean(activeProject)} onClose={() => setActiveProject(null)}>
        {activeProject && (
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div className={`rounded-[1.75rem] bg-gradient-to-br ${activeProject.accent} p-6`}>
              <div className="flex h-full min-h-[340px] items-end rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/55">Expanded View</p>
                  <h3 className="mt-2 text-display text-4xl font-bold">{activeProject.title}</h3>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-3)]">{activeProject.category}</p>
              <h4 className="mt-3 text-display text-3xl font-bold">Premium, polished, and engineered for clarity.</h4>
              <p className="mt-4 leading-8 text-white/68">{activeProject.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activeProject.stack.map((stack) => (
                  <span key={stack} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
                    {stack}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <a href={activeProject.href}>Open Live Demo</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href={activeProject.repo}>View Source</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
