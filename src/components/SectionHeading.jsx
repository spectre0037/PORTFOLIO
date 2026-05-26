import { motion } from 'framer-motion';

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${alignClass}`}
    >
      <span className="section-kicker text-xs text-[var(--accent-3)]">{eyebrow}</span>
      <h2 className="text-display max-w-3xl text-3xl font-bold tracking-tight text-[var(--text)] md:text-5xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">{description}</p>
    </motion.div>
  );
}
