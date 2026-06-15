import { motion } from 'framer-motion';
import { ButtonLink } from '../components/ButtonLink';
import { heroStats, whatsappHref } from '../data';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-baker-dark px-5 pb-8 pt-28 text-white sm:px-8 sm:pb-10 lg:px-12">
      <img
        src="/interior/1.jpg"
        alt="Тёплый интерьер кафе-пекарни Baker Street"
        className="image-warmth absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_34%,rgba(217,179,130,0.34),transparent_28rem),linear-gradient(90deg,rgba(45,36,29,0.9),rgba(45,36,29,0.58)_44%,rgba(45,36,29,0.24)),linear-gradient(0deg,rgba(45,36,29,0.86),rgba(45,36,29,0.08)_48%)]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.16]" aria-hidden="true" />

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label="Baker Street, перейти к началу страницы"
        >
          Baker Street
        </a>
        <a
          href="#contacts"
          className="hidden min-h-11 items-center rounded-full border border-white/25 px-5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 transition hover:bg-white hover:text-baker-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex"
        >
          Контакты
        </a>
      </div>

      <div id="top" className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 overflow-hidden pb-2 lg:gap-16 lg:pb-8">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-baker-accent sm:text-sm">
            Кафе-пекарня в Алатау
          </p>
          <h1 className="max-w-full font-display text-[clamp(3.1rem,17vw,4.35rem)] font-semibold leading-[0.86] tracking-normal sm:text-8xl lg:text-[9.5rem]">
            Baker Street
          </h1>
          <p className="mt-7 max-w-2xl font-display text-[1.65rem] font-semibold leading-tight text-baker-accent sm:text-5xl">
            Тёплая точка на карте посёлка
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
            Кофе, завтраки, выпечка и доставка любимых блюд каждый день.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="tel:+77073195034" variant="primary" aria-label="Позвонить и забронировать столик">
              Забронировать столик
            </ButtonLink>
            <ButtonLink href={whatsappHref} variant="light" aria-label="Написать Baker Street в WhatsApp">
              Написать в WhatsApp
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroStats.map(({ title, Icon }) => (
            <div
              key={title}
              className="flex min-h-24 min-w-0 items-center gap-3 rounded-[8px] border border-white/16 bg-white/12 p-4 shadow-soft backdrop-blur-md sm:min-h-28 sm:p-5"
            >
              <Icon className="h-5 w-5 shrink-0 text-baker-accent" aria-hidden="true" />
              <span className="min-w-0 text-sm font-semibold leading-tight text-white sm:text-base">{title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
