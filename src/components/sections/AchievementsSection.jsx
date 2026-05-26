import { motion } from 'framer-motion';
import { Trophy, Sparkles, Rocket, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { achievements } from '@/data/portfolio';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const icons = [Trophy, Sparkles, Rocket, ShieldCheck];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Achievements"
        title="Selected markers of momentum, collaboration, and consistent delivery."
        description="A visual summary of the progress made through projects, leadership, and competitive environments."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          const Accent = icons[index % icons.length];
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="glass rounded-[1.75rem] p-5"
            >
              <div className="flex items-center justify-between">
                <Accent className="text-[var(--accent-3)]" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/45">0{index + 1}</span>
              </div>
              <div className="mt-5 text-display text-4xl font-bold text-white">{item.value}</div>
              <p className="mt-2 text-sm text-white/60">{item.label}</p>
              <div className="mt-5 h-px w-full bg-white/10" />
              <div className="mt-4 text-sm text-white/50">Highlighted with a motion-led card that reinforces scale and progress.</div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {['Hackathon finalist moments', 'Campus leadership', 'Client delivery milestones'].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="glass rounded-[1.75rem] p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-3)]">Milestone</p>
            <h3 className="mt-3 text-display text-2xl font-semibold">{item}</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">Each achievement supports the broader story of building with consistency, quality, and momentum.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
