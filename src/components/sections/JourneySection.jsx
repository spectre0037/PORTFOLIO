import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { journey } from '@/data/portfolio';

export function JourneySection() {
  return (
    <section id="journey" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Journey / Story"
        title="From first lines of code to cinematic product experiences."
        description="An emotional, forward-moving story that tracks the evolution from learning to creating systems with intent."
      />

      <div className="mt-14 grid gap-4">
        {journey.map((item, index) => (
          <motion.article
            key={item.step}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            className="glass rounded-[2rem] p-6 md:grid md:grid-cols-[130px_1fr] md:items-center"
          >
            <div className="text-display text-4xl font-black text-[var(--accent-3)]">{item.step}</div>
            <div>
              <h3 className="text-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-8 text-white/65">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
