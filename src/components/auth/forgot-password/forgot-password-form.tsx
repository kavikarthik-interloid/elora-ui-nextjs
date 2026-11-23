import MoveLeftIcon from "@/components/icons/move-left";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForgotPasswordForm() {
  return (
    <section className="flex w-full items-center justify-center py-6 sm:py-8 lg:py-10">
      <div className="flex h-fit w-full max-w-2xl flex-col rounded-3xl border border-white px-5 py-6 shadow-[0_0_20px_0_#0000000D] sm:px-10 sm:py-10 md:px-15 xl:px-25">
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="font-cormorant text-[26px] md:text-[30px] xl:text-[34px] leading-tight text-primary">
            Forgot password
          </h1>
          <p className="text-xs md:text-sm xl:text-base text-secondary font-inter font-medium">
            We will send you an email to reset your password.
          </p>
        </div>
        <form className="mt-15 flex flex-col" autoComplete="off" noValidate>
          <div className="flex flex-col gap-6.5">
            <div className="relative font-cormorant">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                autoComplete="new-password"
                className="peer w-full border-b border-border bg-transparent px-0 py-1 text-lg md:text-xl xl:text-[24px] leading-normal text-secondary outline-none focus:border-primary"
              />
              <label
                htmlFor="email"
                className="w-full pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 bg-background text-lg text-secondary transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:md:text-xl peer-focus:top-0 peer-focus:text-sm peer-focus:text-secondary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm "
              >
                Email Address
              </label>
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="fill"
                className="w-full h-10 md:h-11.25 flex justify-center font-inter items-center rounded-full py-4 text-sm md:text-base xl:text-lg font-medium"
              >
                Reset Password
              </Button>
            </div>
          </div>
        </form>
        <Link href="/login" className="mt-8 flex items-center cursor-pointer justify-center gap-3">
          <span className="font-inter flex items-center text-xs xl:text-base font-normal leading-7 tracking-normal text-center text-secondary animated-underline hover:text-primary">
            <MoveLeftIcon />Back to Login
          </span>
        </Link>
      </div>
    </section>
  );
}
