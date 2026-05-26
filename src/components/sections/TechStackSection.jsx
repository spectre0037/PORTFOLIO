import { motion } from 'framer-motion';
import { Cpu, Layers3, Orbit, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { techCategories } from '@/data/portfolio';

const icons = [Cpu, Layers3, Orbit, Zap];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Tech Stack"
        title="A layered toolkit spanning interfaces, infrastructure, and intelligent systems."
        description="The stack is organized for speed, scalability, and premium-feeling product delivery."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {techCategories.map((category, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass relative overflow-hidden rounded-[2rem] p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <Icon className="text-[var(--accent-3)]" />
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/50">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-display text-2xl font-semibold">{category.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
