import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  return (
    <a
      href="#top"
      aria-label="Scroll to top"
      className="fixed bottom-15 right-2 z-50 flex size-10 items-center justify-center rounded-full bg-primary shadow-[0px_2px_15px_0px_rgba(175,125,40,0.5)]"
    >
      <ArrowUp className="size-4.5 text-white" />
    </a>
  );
}
