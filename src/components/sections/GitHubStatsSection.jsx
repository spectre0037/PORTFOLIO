import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { githubStats } from '@/data/portfolio';

const contribution = Array.from({ length: 84 }, (_, index) => (index % 7) + 1);

export function GitHubStatsSection() {
  return (
    <section id="github-stats" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="GitHub Stats"
        title="A live-looking stats wall built to feel like an engineer's command center."
        description="The section combines summary cards, a contribution graph, and activity-style presentation."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {githubStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="glass rounded-[1.75rem] p-5"
            >
              <div className="text-display text-3xl font-bold">{item.value}</div>
              <p className="mt-2 text-sm text-white/60">{item.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="glass rounded-[2rem] p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-display text-2xl font-semibold">Contribution graph</h3>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">365 days</span>
          </div>
          <div className="mt-5 grid grid-cols-12 gap-2">
            {contribution.map((value, index) => (
              <div
                key={index}
                className="aspect-square rounded-sm"
                style={{ background: `rgba(79, 140, 255, ${0.1 + value * 0.12})` }}
              />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/60">
            <div>
              <div className="text-display text-xl font-semibold text-white">Top languages</div>
              <p className="mt-1">JavaScript, TypeScript, Python, SQL, C++</p>
            </div>
            <div>
              <div className="text-display text-xl font-semibold text-white">Streak</div>
              <p className="mt-1">23 days and climbing</p>
            </div>
            <div>
              <div className="text-display text-xl font-semibold text-white">Activity</div>
              <p className="mt-1">Consistent product and AI work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
