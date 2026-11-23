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
};

export default function Submenu({
  onBack,
  title,
  items,
  allLink,
  promo,
  animate,
}: MobileSubmenuConfig & { onBack: () => void }) {
  return (
    <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 flex items-center gap-2 font-inter text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-primary"
      >
        <ChevronLeft size={16} />
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
          >
            <div
              className={cn(
                "corner-frame relative flex h-16 w-16 shrink-0 items-center rounded-[10px] justify-center overflow-hidden bg-white/5",
                animate && "shop-item-float overflow-visible ",
              )}
            >
              <Image
                src={item.image}
                alt=""
                className={cn(
                  "object-fill",
                  animate &&
                    "absolute bottom-0 left-1/2 h-19 w-12 -translate-x-1/2",
                )}
              />
            </div>
            <span className="flex flex-col">
              <span className="font-cormorant text-[22px] leading-none text-white">
                {item.title}
              </span>
              <span className="mt-1 font-cormorant text-base text-white/50">
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
            className="mt-10 flex items-center gap-2 font-cormorant text-xl text-center text-white transition-colors hover:text-primary"
          />
        }
      >
        {allLink.label}
        <MoveRightIcon className="size-5 flex items-center" />
      </SheetClose>

      {promo ? (
        <SheetClose
          nativeButton={false}
          render={
            <Link
              href={promo.href}
              className="group relative mt-auto block min-h-44 overflow-hidden rounded-[22px]"
            />
          }
        >
          <Image
            src={promo.image}
            alt=""
            fill
            sizes="100vw"

            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/30 to-transparent" />
          <div className="relative z-10 flex h-full max-w-55 flex-col justify-center gap-2 p-5">
            <h2 className="font-cormorant text-[25px] leading-[0.95] text-primary">
              {promo.title}
            </h2>
            <p className="font-inter text-xs text-white">{promo.description}</p>
          </div>
        </SheetClose>
      ) : null}
    </nav>
  );
}
