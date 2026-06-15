import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { galleryImages } from '../data';

export function Gallery() {
  return (
    <Section id="gallery" eyebrow="Атмосфера" title="Тёплый свет, дерево, кофе и ощущение своего места.">
      <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px]">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image}
            className={`overflow-hidden rounded-[8px] shadow-image ${index === 0 ? 'sm:row-span-2' : ''} ${
              index === 2 ? 'lg:row-span-2' : ''
            }`}
            whileHover={{ scale: 0.988 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <img
              src={image}
              alt={`Интерьер и атмосфера Baker Street, фото ${index + 1}`}
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
