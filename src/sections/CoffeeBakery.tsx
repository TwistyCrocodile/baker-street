import { Utensils } from 'lucide-react';
import { Section } from '../components/Section';
import { coffeeImages } from '../data';

export function CoffeeBakery() {
  return (
    <Section
      id="coffee"
      eyebrow="Кофе и выпечка"
      title="Каждое утро начинается с ароматного кофе и свежей выпечки."
      className="section-milk"
    >
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:gap-8">
        <div className="premium-image relative min-h-[380px] overflow-hidden rounded-[8px] sm:min-h-[520px]">
          <img
            src="/food/croissant.jpg"
            alt="Свежий круассан и кофе в Baker Street"
            className="image-warmth absolute inset-0 h-full w-full object-cover object-[50%_44%]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="grid gap-5 sm:gap-6">
          <div className="premium-card rounded-[8px] border border-baker-line/80 bg-[#fffaf6]/88 p-7 sm:p-9">
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
                alt={`Кофейная витрина Baker Street, фото ${index + 1}`}
                className="image-warmth premium-card aspect-[3/4] w-full rounded-[8px] object-cover"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
