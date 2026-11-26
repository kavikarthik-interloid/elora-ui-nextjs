"use client";

import Home from "@/components/home/home";

import { EloraIntro } from "@/components/animation/elora-intro";
import { useCallback, useState, } from "react";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);
  return (
    <main className="h-full">
      {showIntro && <EloraIntro onComplete={handleIntroComplete} />}
      {!showIntro && <Home />}
    </main>
  );
}

// export default function HomePage() {
//   return (
//     <main className="h-svh">
//       <Home />
//     </main>
//   );
// }
