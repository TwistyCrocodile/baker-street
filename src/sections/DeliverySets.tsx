import { motion } from 'framer-motion';
import { ButtonLink } from '../components/ButtonLink';
import { Section } from '../components/Section';
import { setCards, whatsappHref } from '../data';

export function DeliverySets() {
  return (
    <Section
      id="delivery"
      eyebrow="Доставка и сеты"
      title="Любимые блюда можно заказать домой или в офис."
      className="section-soft"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {setCards.map(({ title, image, Icon }) => (
          <motion.article
            key={title}
            className="premium-card overflow-hidden rounded-[8px] border border-baker-line/80 bg-[#fffaf6]"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="aspect-[5/3] bg-baker-background">
              <img
                src={image}
                alt={`${title} от Baker Street`}
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 sm:p-8">
              <Icon className="mb-5 h-7 w-7 text-baker-primary" aria-hidden="true" />
              <h3 className="font-display text-4xl font-semibold leading-none text-baker-dark">{title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-11 max-w-3xl">
        <p className="text-xl leading-9 text-baker-text sm:text-2xl sm:leading-10">
          Сеты идеально подходят для компании друзей, семейного ужина или вечернего отдыха.
        </p>
        <ButtonLink href={whatsappHref} className="mt-7" aria-label="Заказать сет Baker Street в WhatsApp">
          Заказать в WhatsApp
        </ButtonLink>
      </div>
    </Section>
  );
}
