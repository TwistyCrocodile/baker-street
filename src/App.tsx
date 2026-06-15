import { About } from './sections/About';
import { Breakfasts } from './sections/Breakfasts';
import { CoffeeBakery } from './sections/CoffeeBakery';
import { Contacts } from './sections/Contacts';
import { DeliverySets } from './sections/DeliverySets';
import { FinalCta } from './sections/FinalCta';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Breakfasts />
      <CoffeeBakery />
      <DeliverySets />
      <Gallery />
      <FinalCta />
      <Contacts />
    </main>
  );
}
