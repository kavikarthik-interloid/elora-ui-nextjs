export function ScrollIndicator() {
  return (
    <div
      aria-label="Scroll to next section"
      className="mt-0 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] lg:text-sm tracking-[0.25em] text-white/80">SCROLL</span>
      <div className="relative h-5 lg:h-7 w-px overflow-hidden bg-white/25">
        <span className="scroll-line absolute left-0 top-0 w-full bg-white" aria-hidden="true" />
      </div>
    </div>
  );
}
