import { Header } from "@/components/layout/header/header";
import QuizFlow from "@/components/layout/quiz/quiz-flow";
import SiteFooter from "@/components/layout/site-footer";

export default function QuizPage() {
  return (
    <>
      <Header overlay />
      <QuizFlow />
      <SiteFooter />
    </>
  );
}
