import { Header } from "../layout/header/header";
import HeroSection from "./hero-section";
import { MarqueeDemo } from "./marquee";

export default function Home() {
  return (
    <main className="h-full">
      <Header overlay />
      <HeroSection />
      <MarqueeDemo />
    </main>
  );
}
