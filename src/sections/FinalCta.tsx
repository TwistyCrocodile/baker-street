import { MessageCircle } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { whatsappHref } from '../data';

export function FinalCta() {
  return (
    <section className="section-milk px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-7 rounded-[8px] border border-white/10 bg-baker-dark px-6 py-9 text-white shadow-image sm:px-9 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-11">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-baker-accent">Ждём в Baker Street</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.95] sm:text-5xl">
            Загляните на кофе или напишите нам заранее.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
            Подскажем по свободным столикам, завтракам и доставке по району.
          </p>
        </div>
        <ButtonLink href={whatsappHref} variant="light" aria-label="Написать Baker Street в WhatsApp">
          <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
          Написать в WhatsApp
        </ButtonLink>
      </div>
    </section>
  );
}
