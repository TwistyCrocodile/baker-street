import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
};

export function Section({ id, eyebrow, title, children, className = '', headerClassName = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 ${className}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className={`mb-10 max-w-3xl ${headerClassName}`}>
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-baker-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl font-semibold leading-[0.98] text-baker-dark sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
