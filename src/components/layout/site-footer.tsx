import MoveRightIcon from "../icons/move-right";
import { Button } from "../ui/button";
import leafImage from "@/assets/leaf.png";
import Footer from "./footer";

export default function SiteFooter() {
  return (
    <section className="w-full">
      <div
        className="site-footer-hero relative flex min-h-102 w-full flex-col justify-center overflow-hidden bg-background px-6 py-8 text-white sm:px-10 sm:py-10 md:min-h-127 md:items-center lg:px-20"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(39, 39, 39, 0.76) 29.34%, rgba(65, 65, 65, 0.76) 47.38%, rgba(65, 65, 65, 0.76) 61.11%, rgba(65, 65, 65, 0.76) 75.49%, rgba(18, 18, 18, 0.76) 100%, rgba(102, 102, 102, 0.76) 100%), url(${leafImage.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-3/4 flex-col gap-5 sm:w-full md:items-center md:justify-center">
          <span className="font-inter text-sm  uppercase tracking-[0.2em] text-background md:text-lg">
            Subscription
          </span>
          <span className="w-full font-cormorant text-4xl md:hidden">
            Wellness that adapts with you.
          </span>
          <h1 className="hidden w-full text-center font-cormorant text-4xl xl:text-[64px]  md:block md:leading-[1.1]">
            Your next chapter starts here.
          </h1>
          <p className="max-w-lg font-inter text-base  text-white/80 md:text-center md:text-base xl:text-[22px] md:leading-[1.7]">
            Personalized wellness support designed for every transition.
          </p>
        </div>
        <Button
          variant="fill"
          type="button"
          aria-label="Take the quiz"
          className="group mt-18 h-12 w-fit self-start rounded-[100px] border px-7 py-3 text-start font-inter text-base font-medium leading-6 tracking-normal md:mt-8 md:self-center md:text-center md:text-[1.125rem]"
        >
          Take the Quiz{" "}
          <MoveRightIcon className="group-hover/button:-rotate-45 transition-normal duration-500" />
        </Button>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
