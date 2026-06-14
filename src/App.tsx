import {
  Clock,
  Instagram,
  MapPin,
  Phone,
  Send,
  Utensils,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from './components/Section';
import { ButtonLink } from './components/ButtonLink';
import {
  aboutFeatures,
  breakfasts,
  coffeeImages,
  galleryImages,
  heroStats,
  setCards,
} from './data';

const whatsappHref = 'https://wa.me/77073195034';
const instagramHref = 'https://www.instagram.com/';

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-baker-dark px-5 py-8 text-white sm:px-8 lg:px-12">
      <img
        src="/interior/1.jpg"
        alt="Интерьер Baker Street"
        className="image-warmth absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-baker-dark via-baker-dark/58 to-baker-dark/22" />
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#" className="font-display text-2xl font-semibold tracking-wide">
          Baker Street
        </a>
        <a
          href="#contacts"
          className="hidden rounded-full border border-white/25 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white/90 transition hover:bg-white hover:text-baker-dark sm:inline-flex"
        >
          Контакты
        </a>
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 pb-4 pt-28 lg:pb-10">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-baker-accent">
            Кафе-пекарня в Алатау
          </p>
          <h1 className="font-display text-6xl font-semibold leading-[0.86] tracking-normal sm:text-7xl lg:text-9xl">
            Baker Street
          </h1>
          <p className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight text-baker-accent sm:text-4xl">
            Тёплая точка на карте посёлка
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
            Кофе, завтраки, выпечка и доставка любимых блюд каждый день.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="tel:+77073195034" variant="primary">
              Забронировать столик
            </ButtonLink>
            <ButtonLink href={whatsappHref} variant="light">
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
              className="flex min-h-24 items-center gap-3 rounded-[8px] border border-white/16 bg-white/12 p-4 shadow-soft backdrop-blur-md"
            >
              <Icon className="h-5 w-5 shrink-0 text-baker-accent" aria-hidden="true" />
              <span className="text-sm font-semibold leading-tight text-white">{title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="О нас" title="Baker Street — уютное кафе-пекарня в Алатау.">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[8px] shadow-image">
          <img
            src="/interior/4.jpg"
            alt="Зал Baker Street"
            className="image-warmth h-[420px] w-full object-cover sm:h-[560px]"
          />
        </div>
        <div>
          <div className="space-y-4 text-xl leading-9 text-baker-text sm:text-2xl sm:leading-10">
            <p>Мы создаём место, где можно неспешно позавтракать,</p>
            <p>выпить хороший кофе,</p>
            <p>провести встречу,</p>
            <p>поработать за ноутбуком</p>
            <p>или заказать любимые блюда домой.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {aboutFeatures.map(({ title, Icon }) => (
              <div
                key={title}
                className="min-h-32 rounded-[8px] border border-baker-line bg-baker-cream p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <Icon className="mb-5 h-6 w-6 text-baker-primary" aria-hidden="true" />
                <p className="text-base font-semibold leading-snug text-baker-dark">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Breakfasts() {
  return (
    <Section
      id="breakfasts"
      eyebrow="Завтраки"
      title="Спокойное утро, хороший кофе и блюда, к которым возвращаются."
      className="bg-baker-cream"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {breakfasts.map((item) => (
          <motion.article
            key={item.title}
            className="group overflow-hidden rounded-[8px] border border-baker-line bg-white shadow-soft"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="aspect-[4/3] overflow-hidden bg-baker-background">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-3xl font-semibold text-baker-dark">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-baker-text">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function CoffeeBakery() {
  return (
    <Section id="coffee" eyebrow="Кофе и выпечка" title="Каждое утро начинается с ароматного кофе и свежей выпечки.">
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <div className="relative min-h-[460px] overflow-hidden rounded-[8px] shadow-image">
          <img
            src="/food/croissant.jpg"
            alt="Свежий круассан Baker Street"
            className="image-warmth absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="grid gap-6">
          <div className="rounded-[8px] border border-baker-line bg-baker-cream p-7 sm:p-9">
            <Utensils className="mb-6 h-7 w-7 text-baker-primary" aria-hidden="true" />
            <p className="text-xl leading-9 text-baker-text sm:text-2xl sm:leading-10">
              Мы готовим напитки и десерты, которые хочется попробовать снова.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {coffeeImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Кофе Baker Street ${index + 1}`}
                className="image-warmth aspect-[3/4] w-full rounded-[8px] object-cover shadow-soft"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function DeliverySets() {
  return (
    <Section
      id="delivery"
      eyebrow="Доставка и сеты"
      title="Заказывайте любимые блюда домой или в офис."
      className="bg-baker-cream"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {setCards.map(({ title, image, Icon }) => (
          <motion.article
            key={title}
            className="overflow-hidden rounded-[8px] border border-baker-line bg-white shadow-soft"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="aspect-[5/3] bg-baker-background">
              <img src={image} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <Icon className="mb-5 h-7 w-7 text-baker-primary" aria-hidden="true" />
              <h3 className="font-display text-4xl font-semibold leading-none text-baker-dark">{title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-10 max-w-3xl">
        <p className="text-xl leading-9 text-baker-text sm:text-2xl sm:leading-10">
          Сеты идеально подходят для компании друзей, семейного ужина или вечернего отдыха.
        </p>
        <ButtonLink href={whatsappHref} className="mt-7">
          Заказать в WhatsApp
        </ButtonLink>
      </div>
    </Section>
  );
}

function Gallery() {
  return (
    <Section id="gallery" eyebrow="Атмосфера" title="Тёплый свет, дерево, кофе и ощущение своего места.">
      <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image}
            className={`overflow-hidden rounded-[8px] shadow-image ${index === 0 ? 'sm:row-span-2' : ''} ${
              index === 2 ? 'lg:row-span-2' : ''
            }`}
            whileHover={{ scale: 0.985 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <img
              src={image}
              alt={`Атмосфера Baker Street ${index + 1}`}
              className="image-warmth h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contacts() {
  return (
    <Section id="contacts" className="pb-0 pt-0">
      <div className="grid overflow-hidden rounded-[8px] bg-baker-dark text-white shadow-image lg:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 p-7 sm:p-10 lg:order-1 lg:p-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-baker-accent">Контакты</p>
          <h2 className="font-display text-5xl font-semibold leading-none sm:text-6xl">Baker Street</h2>
          <div className="mt-9 space-y-5 text-base leading-7 text-white/86 sm:text-lg">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-baker-accent" aria-hidden="true" />
              <span>Ибрагимова 12а, Алматы</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-baker-accent" aria-hidden="true" />
              <a href="tel:+77073195034" className="transition hover:text-white">
                +7 707 319 5034
              </a>
            </p>
            <div className="flex gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-baker-accent" aria-hidden="true" />
              <div>
                <p>Пн–Пт: 07:30–21:30</p>
                <p>Сб–Вс: 08:30–21:30</p>
              </div>
            </div>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref} variant="light">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href={instagramHref} variant="light">
              <Instagram className="mr-2 h-5 w-5" aria-hidden="true" />
              Instagram
            </ButtonLink>
          </div>
        </div>
        <div className="relative order-1 min-h-[320px] lg:order-2">
          <img
            src="/interior/2.jpg"
            alt="Baker Street в Алматы"
            className="image-warmth absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-baker-dark/40 to-transparent lg:bg-gradient-to-r" />
        </div>
      </div>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-1 py-8 text-sm text-baker-text/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Baker Street</p>
        <a href={whatsappHref} className="inline-flex items-center gap-2 font-semibold text-baker-primary">
          <Send className="h-4 w-4" aria-hidden="true" />
          Написать нам
        </a>
      </footer>
    </Section>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Breakfasts />
      <CoffeeBakery />
      <DeliverySets />
      <Gallery />
      <Contacts />
    </main>
  );
}
