"use client";
import AppleIcon from "@/components/icons/apple";
import EyeIcon from "@/components/icons/eye";
import EyeOffIcon from "@/components/icons/eye-off";
import GoogleIcon from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/home");
  };
  const [showPassword, setShowPassword] = useState<boolean | null>(false);
  return (
    <section className="flex w-full items-center justify-center py-6 sm:py-8 lg:py-10">
      <div className="flex h-fit w-full max-w-2xl flex-col rounded-3xl border border-white px-5 py-6 shadow-[0_0_20px_0_#0000000D] sm:px-10 sm:py-10 md:px-15 xl:px-25">
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="font-cormorant text-[26px] md:text-[30px] xl:text-[34px] leading-tight text-primary">
            Welcome back
          </h1>
          <p className="text-xs md:text-sm xl:text-base text-secondary font-inter font-medium">
            Log in to manage your protocol and subscriptions.
          </p>
        </div>
        <form
          className="mt-15 flex flex-col"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
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
            <div className="relative font-cormorant">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder=" "
                autoComplete="new-password"
                className="peer w-full border-b border-border bg-transparent px-0 py-1 text-lg md:text-xl leading-normal text-secondary outline-none focus:border-primary"
              />
              <label
                htmlFor="password"
                className="w-full pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 bg-background text-lg md:text-xl text-secondary transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:md:text-xl peer-focus:top-0 peer-focus:text-sm peer-focus:text-secondary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm"
              >
                Password
              </label>
              <Button
                aria-label="Toggle password visibility"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 bg-transparent hover:bg-transparent transition-none focus:transition-none  p-1 text-secondary"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </Button>
            </div>
            <div className="flex justify-end ">
              <Link
                href="/forgot-password"
                className="text-xs xl:text-base text-secondary hover:text-primary animated-underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="fill"
                className="w-full h-10 md:h-11.25 flex justify-center font-inter items-center rounded-full py-4 text-sm md:text-base xl:text-lg font-medium"
              >
                sign in
              </Button>
            </div>
          </div>
        </form>
        <div className="mt-3 flex items-center gap-3">
          <span className="h-px flex-1 bg-line" />
          <span className="font-inter text-[10px]  leading-7 tracking-normal text-center text-secondary">
            or continue with
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="mt-3 flex justify-center gap-5">
          <Button
            variant="icon-fill"
            aria-label="Continue with Google"
            className="flex size-10 items-center justify-center rounded-full"
          >
            <span className="icon-scroll" aria-hidden="true">
              <span className="icon-scroll-track">
                <span>
                  <GoogleIcon />
                </span>
                <span>
                  <GoogleIcon />
                </span>
              </span>
            </span>
          </Button>
          <Button
            variant="icon-fill"
            aria-label="Continue with Apple"
            className="flex size-10 items-center justify-center rounded-full"
          >
            <span className="icon-scroll" aria-hidden="true">
              <span className="icon-scroll-track">
                <span>
                  <AppleIcon />
                </span>
                <span>
                  <AppleIcon />
                </span>
              </span>
            </span>
          </Button>
        </div>

        <div className="pt-11.5 flex flex-wrap justify-center gap-2 text-center text-sm xl:text-lg">
          <span className="text-secondary"> New to Elora?</span>
          <Link href="/register" className="text-primary animated-underline">
            Begin your journey
          </Link>
        </div>
      </div>
    </section>
  );
}
