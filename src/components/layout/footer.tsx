import MoveRightIcon from "../icons/move-right";

const shopLinks = [
  "All Products",
  "Sleep Support",
  "Mood Balance",
  "Energy & Metabolism",
  "Bundles",
];

const learnLinks = [
  "The Journal",
  "Take the Quiz",
  "Perimenopause",
  "Our Research",
  "Brain Fog",
];

const supportLinks = ["My Account", "Contact Us", "FAQ", "Shipping", "Returns"];

function LinkGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-5 xl:gap-7 mt-3">
      <span className="font-inter text-[10px] xl:text-sm uppercase tracking-[0.2em] text-white/85 xl:flex xl:self-start">
        {title}
      </span>
      <div className="flex flex-col gap-3 xl:gap-5 font-inter text-sm xl:text-lg text-white/90">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="group inline-flex w-fit items-center gap-2 text-white/90 transition-colors hover:text-primary duration-300 ease-out"
          >
            <span className="underline-offset-4 group-hover:underline">
              {link}
            </span>
            <MoveRightIcon className="pointer-events-none opacity-0 group-hover:rotate-320 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <section className="border-b border-white/10 px-5 py-8 sm:px-8 sm:py-10 lg:px-15 lg:py-12 xl:px-22">
        <div className="flex flex-col gap-8 w-full justify-between sm:gap-10 lg:flex-row lg:gap-16">
          <div>
            <p className="font-inter text-sm xl:text-base  uppercase tracking-[0.2em] text-white/90">
              The Elora Letter
            </p>
            <h2 className="mt-4 max-w-xl font-cormorant text-4xl leading-[1.2] lg:text-5xl xl:text-[64px]">
              Field notes on hormonal health, delivered monthly.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-7 lg:max-w-xl lg:justify-center xl:gap-15">
            <p className="font-inter text-[15px] xl:text-[20px] leading-7 text-white/90">
              Quiet, considered writing from physicians, researchers, and women
              who&apos;ve walked this path. No noise, no algorithms.
            </p>
            <form className="flex items-center border-b border-white/70 pb-3">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent font-inter text-[15px] xl:text-lg text-white outline-none placeholder:text-white/45"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center gap-2 bg-transparent xl:text-lg font-inter text-base text-white"
              >
                Subscribe <MoveRightIcon />
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="grid gap-10 w-full px-5 py-7 grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-15 lg:py-12 xl:px-22">
        <div className="flex flex-col gap-5 lg:col-span-1">
          <span className="font-quantify text-2xl text-[26px] xl:text-[48px] text-primary">
            Elora.
          </span>
          <p className="max-w-45 sm:max-w-80 font-inter text-sm xl:text-[20px] leading-6 text-white/90">
            Quiet, considered writing from physicians, researchers, and women
            who&apos;ve walked this path. No noise, no algorithms.
          </p>
          <div className="flex gap-5 xl:mt-4 font-inter text-[10px] xl:text-[14px] uppercase tracking-[0.18em] text-white/75">
            <span>ISO 9001</span>
            <span>cGMP</span>
            <span>3rd Party Tested</span>
          </div>
        </div>
        <LinkGroup title="Shop" links={shopLinks} />
        <LinkGroup title="Learn" links={learnLinks} />
        <LinkGroup title="Support" links={supportLinks} />
      </section>

      <section className="flex flex-col gap-5 border-t border-white/10 px-5 py-5 font-inter text-xs xl:text-base text-white/90 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-15">
        <span>© 2026 Elora Health Inc. All rights reserved.</span>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a
            href="#"
            className="hover:text-primary underline-offset-4 hover:underline group-hover:underline transition-colors duration-300 ease-out"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-primary underline-offset-4 hover:underline group-hover:underline transition-colors duration-300 ease-out"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="#"
            className="hover:text-primary underline-offset-4 hover:underline group-hover:underline transition-colors duration-300 ease-out"
          >
            Cookies
          </a>
        </div>
        <span>New York · London</span>
      </section>
    </footer>
  );
}
