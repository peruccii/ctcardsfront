import Particles from "@/components/ui/particles";
import HeroSection from "./page/hero";

export default function Home() {
  return (
    <main className="bg-orange-50">
      <Particles
        className="absolute inset-0"
        quantity={600}
        ease={80}
        vx={3}
        vy={3}
        staticity={20}
        color={"#000000"}
        refresh
      />
      <HeroSection />
    </main>
  );
}
