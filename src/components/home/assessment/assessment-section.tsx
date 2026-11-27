import MoveRightIcon from "../../icons/move-right";
import { Button } from "../../ui/button";
import SymptomsQuiz from "./symptoms-quiz";

type assessment = {
  id: number;
  order: string;
  title: string;
  description: string;
};

export const assessment: assessment[] = [
  {
    id: 1,
    order: "01",
    title: "Three-minute assessment",
    description:
      "No medical jargon. Just considered questions about how you actually feel.",
  },
  {
    id: 2,
    order: "02",
    title: "Personalized recommendations",
    description:
      "A protocol shaped around your specific symptoms, life stage, and goals.",
  },
  {
    id: 3,
    order: "03",
    title: "Science-backed routines",
    description:
      "Every recommendation references peer-reviewed clinical research.",
  },
];

export default function AssessmentSection() {
  return (
    <section className="px-5 pt-15 pb-5 md:px-10 lg:flex lg:w-full lg:flex-row-reverse lg:gap-10 xl:gap-0">
      <div className="lg:w-1/2 xl:mr-40">
        <div>
          <span className="font-inter text-sm xl:text-base text-primary font-medium leading-none tracking-[0.15em]">
            THE ASSESSMENT
          </span>
          <h1 className="pt-5 font-cormorant text-4xl font-medium leading-none xl:text-[64px]">
            Your symptoms are personal. Your wellness plan should be too.
          </h1>
          <p className="pt-6 font-inter text-[17px] xl:text-[22px] leading-[1.7]">
            A three-minute, physician-designed assessment translates your unique
            pattern of symptoms into a precise, science-backed protocol.
          </p>
        </div>
        {assessment.map((item) => (
          <div key={item.id} className="pt-6 flex gap-5">
            <span className="font-cormorant self-start text-3xl md:text-[32px] relative bottom-4 font-semibold leading-[1.7] text-primary">
              {item.order}
            </span>
            <div>
              <span className="font-inter text-[17px] font-medium leading-[1.7] lg:text-[20px]">
                {item.title}
              </span>
              <p className="font-inter text-[17px] lg:text-[18px]  leading-[1.7] tracking-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <div className="pt-15">
          <Button
            variant="fill"
            type="button"
            className="font-inter text-base lg:text-lg font-medium leading-7 tracking-normal text-center px-8 h-12.5 border-0! hover:border! focus-visible:border-0! shadow-[0px_2px_15px_0px_rgba(175,125,40,0.5)]"
          >
            <span className="flex gap-3 items-center">
              Start Your Quiz
              <MoveRightIcon className="group-hover/button:-rotate-45 transition-normal duration-500" />
            </span>
          </Button>
        </div>
      </div>
      <div className="py-10.75 min-h-full lg:w-1/2">
        <SymptomsQuiz />
      </div>
    </section>
  );
}
