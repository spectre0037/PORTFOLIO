import { motion } from 'framer-motion';
import { Bot, BrainCircuit, Cpu, Radar } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { aiProjects } from '@/data/portfolio';

const icons = [Bot, BrainCircuit, Cpu, Radar];

export function AIShowcaseSection() {
  return (
    <section id="ai" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="AI Projects Showcase"
        title="A futuristic AI layer with neural visuals, intelligent cards, and luminous depth."
        description="This section frames applied AI work through a premium visual language instead of a generic grid."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="glass relative overflow-hidden rounded-[2rem] p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(122,92,255,0.16),transparent_30%)]" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] shadow-glow">
                <Bot />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Neural Interface</p>
                <h3 className="text-display text-2xl font-bold">Human-centered AI systems</h3>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {['Inference', 'Automation', 'Insights', 'Assistants'].map((item, index) => (
                <div key={item} className="glass-strong rounded-3xl p-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent-3)]">0{index + 1}</span>
                  <div className="mt-3 text-lg font-semibold">{item}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <p className="text-sm leading-7 text-white/70">
                AI work here is represented as useful systems: assistants, recommendation logic, dashboards, and automation layers that feel practical and sharp.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aiProjects.map((project, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="glass rounded-[1.75rem] p-5"
              >
                <Icon className="text-[var(--accent-3)]" />
                <h4 className="mt-4 text-display text-xl font-semibold">{project}</h4>
                <p className="mt-3 text-sm leading-7 text-white/65">Designed with a luminous interface, subtle depth, and future-ready interaction cues.</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
