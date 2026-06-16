import { Section } from '../components/Section';
import { aboutFeatures, comfortItems } from '../data';

export function About() {
  return (
    <Section id="about" eyebrow="О нас" title="Baker Street — уютное кафе-пекарня в Алатау." className="section-paper">
      <div className="mb-10 grid grid-cols-2 gap-2 border-y border-baker-line/80 py-4 text-sm font-semibold text-baker-dark/82 sm:grid-cols-4 sm:gap-4 sm:py-5">
        {comfortItems.map((item) => (
          <div key={item} className="min-w-0">
            {item}
          </div>
        ))}
      </div>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div className="premium-image overflow-hidden rounded-[8px]">
          <img
            src="/interior/4.jpg"
            alt="Светлый зал Baker Street с деревянными деталями"
            className="image-warmth h-[420px] w-full object-cover object-[50%_42%] sm:h-[560px]"
            loading="lazy"
            decoding="async"
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
          <div className="mt-11 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2">
            {aboutFeatures.map(({ title, Icon }) => (
              <div
                key={title}
                className="premium-card min-h-28 rounded-[8px] border border-baker-line/80 bg-[#fffaf6]/88 p-5 transition duration-300 hover:-translate-y-1 sm:min-h-32"
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
