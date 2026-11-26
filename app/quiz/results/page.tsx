import { Header } from "@/components/layout/header/header";
import QuizResultsHero from "@/components/layout/quiz/quiz-result/quiz-results-hero";
import SiteFooter from "@/components/layout/site-footer";

export default function QuizResultsPage() {
  return (
    <>
      <Header overlay />
      <QuizResultsHero />
      <SiteFooter />
    </>
  );
}
