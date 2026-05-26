import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Layers3, Rocket } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { aboutStats } from '@/data/portfolio';

const highlights = [
  'GIK Institute student',
  'Pursuing Data Science',
  'AI and Full Stack Developer',
  'Modern UI/UX enthusiast',
  'Strong frontend animation expertise',
  'Strong Cloud and AWS expertise',
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About Me"
        title="A builder focused on premium product craft, intelligent systems, and motion-led experiences."
        description="I combine data science, full stack development, and animation-driven UI to create interfaces that feel sharp, modern, and memorable."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/image.png"
            alt="Abdullah Bin Zubair"
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </motion.div>

        <div className="grid gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="glass rounded-[2rem] p-6">
            <h3 className="text-display text-2xl font-bold">A blend of engineering precision and design instinct.</h3>
            <p className="mt-4 leading-8 text-white/68">
              I build scalable applications, polished dashboards, and AI-enabled experiences with a strong bias toward clarity, responsiveness, and motion.
              My work sits at the intersection of frontend animation, product thinking, and practical systems.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80">
                  <ShieldCheck size={16} className="text-[var(--accent-3)]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {aboutStats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <motion.div whileHover={{ y: -5 }} className="glass rounded-3xl p-5">
              <Layers3 className="text-[var(--accent)]" />
              <p className="mt-4 text-sm text-white/60">Production mindset</p>
              <h4 className="mt-2 text-xl font-semibold">Built for scale</h4>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="glass rounded-3xl p-5">
              <Rocket className="text-[var(--accent-3)]" />
              <p className="mt-4 text-sm text-white/60">Execution speed</p>
              <h4 className="mt-2 text-xl font-semibold">Fast iterations</h4>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="glass rounded-3xl p-5">
              <Sparkles className="text-[var(--accent-2)]" />
              <p className="mt-4 text-sm text-white/60">Visual quality</p>
              <h4 className="mt-2 text-xl font-semibold">Motion-first polish</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
