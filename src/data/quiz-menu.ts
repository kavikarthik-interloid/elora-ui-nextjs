export type QuizQuestion = {
  id: string;
  section: string;
  question: string;
  mode: "single" | "multiple";
  options: { id: string; label: string }[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "age",
    section: "Foundation",
    question: "Which age range describes you?",
    mode: "single",
    options: [
      { id: "under-40", label: "Under 40" },
      { id: "40-45", label: "40 - 45" },
      { id: "46-50", label: "46 - 50" },
      { id: "51-55", label: "51 - 55" },
      { id: "56-plus", label: "56+" },
    ],
  },
  {
    id: "hormonal-journey",
    section: "Foundation",
    question: "Where are you in your hormonal journey?",
    mode: "single",
    options: [
      { id: "regular-cycles", label: "Cycles are still regular" },
      { id: "irregular-cycles", label: "Cycles becoming irregular" },
      { id: "no-period-6-11-months", label: "No period for 6–11 months" },
      { id: "no-period-12-plus-months", label: "No period for 12+ months" },
      { id: "unsure", label: "I'm not sure" },
    ],
  },
  {
    id: "symptoms",
    section: "Foundation",
    question: "Which of these have you noticed in the past month?",
    mode: "multiple",
    options: [
      { id: "sleep", label: "Trouble sleeping" },
      { id: "mood", label: "Mood swings or low mood" },
      { id: "fatigue", label: "Persistent fatigue" },
      { id: "libido", label: "Loss of libido" },
      { id: "hot-flashes", label: "Hot flashes or night sweats" },
      { id: "brain-fog", label: "Brain fog" },
      { id: "joint-stiffness", label: "Joint stiffness" },
      { id: "weight-changes", label: "Weight changes" },
    ],
  },
  {
    id: "stress",
    section: "Foundation",
    question: "How would you describe your current stress level?",
    mode: "single",
    options: [
      { id: "manageable", label: "Manageable" },
      { id: "moderate", label: "Moderate, most days" },
      { id: "high", label: "High, frequently overwhelmed" },
      { id: "chronic", label: "Constant, chronic" },
    ],
  },
  {
    id: "priority",
    section: "Foundation",
    question: "What matters most to you right now?",
    mode: "multiple",
    options: [
      { id: "sleep", label: "Better, deeper sleep" },
      { id: "energy", label: "Steady energy" },
      { id: "clarity", label: "Mental clarity" },
      { id: "emotional-balance", label: "Emotional equilibrium" },
      { id: "hot-flashes", label: "Fewer hot flashes" },
      { id: "hormonal-health", label: "Long-term hormonal" },
    ],
  },
];