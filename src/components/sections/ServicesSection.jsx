import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { services } from '@/data/portfolio';
import { Layers3 } from 'lucide-react';

export function ServicesSection() {
  return (
    <section id="services" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="A service menu built around full product ownership, not isolated tasks."
        description="From build to motion and deployment, the offering is positioned like a premium studio stack."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group glass relative overflow-hidden rounded-[1.75rem] p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,140,255,0.16),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative flex items-start gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[var(--accent-3)]">
                <Layers3 size={18} />
              </div>
              <div>
                <h3 className="text-display text-2xl font-semibold">{service}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">Premium execution with animated interfaces, clean logic, and production-minded delivery.</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
