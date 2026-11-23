"use client"

import { EloraIntro } from "@/components/animation/elora-intro";
import Home from "@/components/home-page/home";
import { useCallback, useState, } from "react";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);
  return (
    <main>
      {showIntro && <EloraIntro onComplete={handleIntroComplete} />}
      {!showIntro && <Home />}
    </main>
  );
}
