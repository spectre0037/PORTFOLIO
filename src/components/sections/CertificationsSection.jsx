import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { certifications } from '@/data/portfolio';

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Certifications"
        title="Credential-style cards with depth, verification cues, and hover lift."
        description="Shown as premium attestations to technical and product craft."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {certifications.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.link}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
            whileHover={{ y: -6 }}
            className="glass rounded-[1.75rem] p-6"
          >
            <BadgeCheck className="text-[var(--accent-3)]" />
            <h3 className="mt-4 text-display text-2xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-white/55">{item.issuer}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/75">
              Verify <ExternalLink size={14} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
