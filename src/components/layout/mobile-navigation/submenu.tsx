import MoveRightIcon from "@/components/icons/move-right";
import { SheetClose } from "@/components/ui/sheet";
import { shopPromo } from "@/data/shop-menu";
import { cn } from "cn";
import { ChevronLeft } from "lucide-react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

export type MobileSubmenuItem = {
  title: string;
  subtitle: string;
  image: ImageProps["src"];
  href: string;
};

export type MobileSubmenuConfig = {
  title: string;
  items: MobileSubmenuItem[];
  allLink: {
    href: string;
    label: string;
  };
  promo?: typeof shopPromo;
  animate?: boolean;
  align?: boolean;
};

export default function Submenu({
  onBack,
  title,
  items,
  allLink,
  promo,
  animate,
  align,
}: MobileSubmenuConfig & { onBack: () => void }) {
  return (
    <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 cursor-pointer flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-primary"
      >
        <ChevronLeft size={14} />
        {title}
      </button>

      <div className="space-y-5">
        {items.map((item) => (
          <SheetClose
            key={item.title}
            nativeButton={false}
            render={
              <Link
                href={item.href}
                className="group flex items-center gap-4"
              />
            }
            className="hover:bg-[#2A2A2A] py-1 px-1 hover:rounded-lg hover:shadow-lg"
          >
            <div
              className={cn(
                "corner-frame relative flex h-14 w-14 shrink-0 items-center rounded-[10px] justify-center overflow-hidden bg-white/5",
                animate && "shop-item-float overflow-visible",
              )}
            >
              <Image
                src={item.image}
                alt=""
                className={cn(
                  "object-fill",
                  animate &&
                    "absolute bottom-0 left-1/2 h-18 w-11 -translate-x-1/2",
                )}
              />
            </div>
            <span className="flex flex-col">
              <span className="font-cormorant text-[20px] leading-none text-white">
                {item.title}
              </span>
              <span className="mt-1 font-cormorant text-[15px] text-white/50">
                {item.subtitle}
              </span>
            </span>
          </SheetClose>
        ))}
      </div>
      <SheetClose
        nativeButton={false}
        render={
          <Link
            href={allLink.href}
            className="mt-10 flex items-center gap-2 font-cormorant text-lg text-center text-white transition-colors hover:text-primary"
          />
        }
      >
        {allLink.label}
        <MoveRightIcon className="size-3.5 flex items-center" />
      </SheetClose>
      {promo ? (
        <SheetClose
          nativeButton={false}
          render={
            <Link
              href={promo.href}
              className={cn("group relative mt-auto block min-h-35 overflow-hidden rounded-[18px]", align && ("min-h-43.5"))}
            />
          }
        >
          <Image
            src={promo.image}
            alt=""
            fill
            className="object-cover  transition-transform duration-500 group-hover:scale-105"
          />
          {align && (
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.78)_0.21%,rgba(0,0,0,0.65)_32.42%,rgba(0,0,0,0.43)_62.88%,rgba(0,0,0,0)_88.35%)]" />
          )}
          {animate && (
            <div className="absolute -inset-1 rounded-[inherit] bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0.21%,rgba(0,0,0,0.65)_32.42%,rgba(0,0,0,0.43)_62.88%,rgba(0,0,0,0)_88.35%)]" />
          )}
          <div className={cn("pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10", align && ("ring-0"))}/>
          <div
            className={cn(
              "relative z-10 flex h-full max-w-80 flex-col justify-center gap-2 p-5",
              align && "justify-end text-white pl-4 pb-0",
            )}
          >
            <h2
              className={cn(
                "font-cormorant text-[20px] md:text-[22px] font-bold leading-[0.95] w-40 text-primary",
                align && "text-white",
              )}
            >
              {promo.title}
            </h2>
            <p className="font-inter text-[10px] md:text-sm leading-5.75 text-white">
              {promo.description}
            </p>
          </div>
        </SheetClose>
      ) : null}
    </nav>
  );
}
