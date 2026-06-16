import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { breakfasts } from '../data';

export function Breakfasts() {
  return (
    <Section
      id="breakfasts"
      eyebrow="Завтраки"
      title="Спокойное утро, хороший кофе и блюда, к которым возвращаются."
      className="section-warm"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {breakfasts.map((item) => (
          <motion.article
            key={item.title}
            className="premium-card group overflow-hidden rounded-[8px] border border-baker-line/80 bg-[#fffaf6]"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="aspect-[4/3] overflow-hidden bg-baker-background">
              <img
                src={item.image}
                alt={`${item.title} в Baker Street`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="font-display text-3xl font-semibold leading-none text-baker-dark">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-baker-text">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
