import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { blogInsights } from '@/data/portfolio';

export function BlogSection() {
  return (
    <section id="blog" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog / Insights"
        title="Short-form thoughts on AI, design systems, and modern development craft."
        description="A curated preview of the kinds of ideas that would live in a technical insight section."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {blogInsights.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="glass rounded-[1.75rem] p-5"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-3)]">{item.tag}</span>
            <h3 className="mt-4 text-display text-2xl font-semibold leading-tight">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/60">Thoughtful, practical insights for founders, engineers, and design-minded builders.</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
