import { ArrowLeft, Check } from "lucide-react";

const symptoms = [
  { label: "Trouble falling or staying asleep", selected: false },
  { label: "Hot flashes or night sweats", selected: true },
  { label: "Mood swings or low mood", selected: false },
  { label: "Brain fog or memory lapses", selected: true },
];

export default function SymptomsQuiz() {
  return (
    <section
      aria-labelledby="quiz-title"
      className="relative mx-auto w-full max-w-125 card-float"
    >
      <div className="relative min-h-147.5 rounded-[28px] border border-white/70 bg-background px-6.5 pb-10 pt-5.75 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.28)]">
        <header className="flex items-center justify-between text-[11px] lg:text-[13px]  tracking-[2px]">
          <span className="text-foreground">STEP 03 OF 06</span>
          <span className="text-primary">2 MIN REMAINING</span>
        </header>
        <div
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={50}
          className="mt-6 h-0.75 w-full overflow-hidden rounded-full bg-[#d8d6d2]"
        >
          <div className="h-full w-1/2 rounded-full bg-primary" />
        </div>
        <div className="mt-9">
          <p className="text-[11px] lg:text-[13px] font-medium tracking-[2px] text-[foreground">
            YOUR SYMPTOMS
          </p>
          <h2
            id="quiz-title"
            className="mt-4 font-cormorant text-2xl lg:text-[28px] leading-[1.2] text-foreground "
          >
            Which of these have you noticed in the past month?
          </h2>
          <ul className="mt-6 space-y-2">
            {symptoms.map(({ label, selected }) => (
              <li
                key={label}
                className={`flex min-h-15 items-center justify-between rounded-xl border px-5 text-[15px] lg:text-[18px] text-foreground ${
                  selected
                    ? "border-primary bg-background"
                    : "border-border bg-white/40"
                }`}
              >
                <span>{label}</span>
                <span
                  aria-label={selected ? "Selected" : undefined}
                  className={`ml-3 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                    selected
                      ? "border-primary bg-primary text-white"
                      : "border-[#c9c4bb]"
                  }`}
                >
                  {selected && (
                    <Check aria-hidden="true" size={12} strokeWidth={2.5} />
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-11 flex items-center gap-2  text-base text-foreground hover:text-primary cursor-pointer">
            <ArrowLeft aria-hidden="true" size={20} strokeWidth={1.5} />
            <span className="mt-0.5">Back</span>
          </p>
        </div>
        <aside
          aria-label="Your wellness match"
          className="assessment-card-rock absolute -bottom-14 right-2 z-10 w-42.75 md:w-48.5 lg:w-62.5 lg:-bottom-25 rounded-2xl bg-card px-5 py-4 text-background shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
        >
          <p className="text-[10px] font-inter lg:text-sm tracking-[2px]">YOUR MATCH</p>
          <h3 className="mt-1 font-cormorant text-[20px] md:text-[22px] lg:text-[30px] font-semibold leading-tight">
            Sleep + Balance
          </h3>
          <p className="mt-3 text-[11px] font-inter md:text-[12px] lg:text-base leading-[1.6] text-white/75">
            A tailored two-formula protocol based on your responses.
          </p>
        </aside>
      </div>
    </section>
  );
}
