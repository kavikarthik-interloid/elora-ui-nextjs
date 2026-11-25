import { EmptyCartIcon } from "@/components/icons/empty-cart";
import MoveRightIcon from "@/components/icons/move-right";
import { Button } from "@/components/ui/button";

export default function EmptyCart() {
  return (
    <div className="relative isolate h-full flex flex-col justify-center items-center text-center">
      <div className="relative z-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-2 z-0 size-17 rounded-full bg-[#aa7d4e26]"
        />
        <EmptyCartIcon />
      </div>
      <div className="relative z-10 mt-11">
        <span className="text-sm font-inter lg:text-base font-medium uppercase tracking-[2px] leading-7">
          Your cart is currently empty
        </span>
        <p className="text-xs mt-1 lg:text-base font-medium font-inter px-10 capitalize leading-5.75 text-muted-foreground">
          Begin with a personalized assessment to find what your body needs.
        </p>
      </div>
      <Button
        variant="fill"
        type="button"
        aria-label="Take the quiz"
        className="relative z-10 h-12 w-3/4 self-center rounded-[100px] border px-7 py-3 text-start font-inter text-sm font-medium leading-6 tracking-normal mt-7.5 md:mt-8 md:self-center md:text-center md:text-[1.125rem]"
      >
        Take the Quiz
        <MoveRightIcon className="group-hover/button:rotate-320" />
      </Button>
    </div>
  );
}
