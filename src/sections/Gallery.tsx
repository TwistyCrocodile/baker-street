import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { galleryImages } from '../data';

export function Gallery() {
  return (
    <Section id="gallery" eyebrow="Атмосфера" title="Тёплый свет, дерево, кофе и ощущение своего места." className="section-paper">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            className={`premium-image aspect-[4/5] overflow-hidden rounded-[8px] ${
              index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
            whileHover={{ scale: 0.988 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="image-warmth h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
