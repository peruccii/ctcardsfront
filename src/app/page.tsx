import Particles from '@/components/ui/particles';
import HeroSection from './page/hero';
import HowItWorks from '@/components/HowItWorks';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="">
      <Particles
        className="absolute inset-0"
        quantity={600}
        ease={80}
        vx={3}
        vy={3}
        staticity={20}
        color={'#000000'}
        refresh
      />
      <HeroSection />
      <HowItWorks />
      <div className="w-full flex items-center justify-center">
        <Footer />
      </div>
    </main>
  );
}
