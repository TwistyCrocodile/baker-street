import { Clock, Instagram, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { Section } from '../components/Section';
import { instagramHref, whatsappHref } from '../data';

export function Contacts() {
  return (
    <Section id="contacts" className="pb-24 pt-0 sm:pb-0">
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
              <a
                href="tel:+77073195034"
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                aria-label="Позвонить Baker Street по номеру +7 707 319 5034"
              >
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
            <ButtonLink href={whatsappHref} variant="light" aria-label="Написать Baker Street в WhatsApp">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href={instagramHref} variant="light" aria-label="Открыть Instagram Baker Street">
              <Instagram className="mr-2 h-5 w-5" aria-hidden="true" />
              Instagram
            </ButtonLink>
          </div>
        </div>
        <div className="relative order-1 min-h-[320px] lg:order-2">
          <img
            src="/interior/2.jpg"
            alt="Фасад и атмосфера Baker Street в Алматы"
            className="image-warmth absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-baker-dark/40 to-transparent lg:bg-gradient-to-r" />
        </div>
      </div>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-1 py-8 text-sm text-baker-text/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Baker Street</p>
        <a
          href={whatsappHref}
          className="inline-flex items-center gap-2 font-semibold text-baker-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-baker-primary"
          aria-label="Написать Baker Street в WhatsApp"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Написать нам
        </a>
      </footer>

      <a
        href={whatsappHref}
        className="fixed inset-x-4 bottom-4 z-50 inline-flex min-h-14 items-center justify-center rounded-full bg-baker-primary px-6 text-center text-sm font-bold uppercase tracking-[0.1em] text-white shadow-image transition hover:bg-baker-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-baker-primary sm:hidden"
        aria-label="Написать Baker Street в WhatsApp"
      >
        <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
    </Section>
  );
}
