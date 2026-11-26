"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuIcon from "../../icons/menu";
import { Button } from "../../ui/button";
import UserIcon from "../../icons/user";
import TwitterIcon from "../../icons/twitter";
import InstagramIcon from "../../icons/instagram";
import YoutubeIcon from "../../icons/youtube";
import FaceBookIcon from "../../icons/facebook";
import { shopCategories, shopPromo } from "@/data/shop-menu";
import { scienceLinks } from "@/data/science-menu";
import { journalArticles } from "@/data/journey-menu";
import { ChevronRight, X } from "lucide-react";
import { type ImageProps } from "next/image";
import Submenu, { MobileSubmenuConfig, MobileSubmenuItem } from "./submenu";
import { useRouter } from "next/navigation";

function toMobileItems(
  items: Array<{
    title: string;
    description?: string;
    readTime?: string;
    image: ImageProps["src"];
    href: string;
  }>,
): MobileSubmenuItem[] {
  return items.map((item) => ({
    title: item.title,
    subtitle: item.description ?? item.readTime ?? "",
    image: item.image,
    href: item.href,
  }));
}

export const navigationItems = [
  {
    label: "Shop",
    href: "/shop",
    submenu: {
      title: "Shop",
      items: toMobileItems(shopCategories),
      allLink: { href: "/shop", label: "Shop All" },
      promo: shopPromo,
      animate: true,
    },
  },
  {
    label: "Quiz",
    href: "/quiz",
  },
  {
    label: "Our Science",
    href: "/science",
    submenu: {
      title: "Our Science",
      items: toMobileItems(scienceLinks),
      allLink: { href: "/science", label: "Explore All" },
    },
  },
  {
    label: "Journal",
    href: "/journal",
    submenu: {
      title: "Journal",
      items: toMobileItems(journalArticles),
      allLink: { href: "/journal", label: "Explore All" },
    },
  },
  {
    label: "Account",
    href: "/account",
  },
];

export function MobileNavigation() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] =
    useState<MobileSubmenuConfig | null>(null);

  return (
    <Sheet
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value) setActiveSubmenu(null);
      }}
    >
      <SheetTrigger
        render={
          <button
            type="button"
            aria-label="Open navigation"
            className="cursor-pointer inline-flex items-center justify-center p-2 lg:hidden"
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-dvh w-full max-w-none flex-col gap-0 border-none bg-foreground p-0 text-white [&>button]:hidden"
      >
        <SheetTitle className="sr-only">Elora Navigation</SheetTitle>
        <header className="flex h-19 shrink-0 items-center justify-between px-7">
          <SheetClose
            nativeButton={false}
            render={
              <Link
                href="/home"
                className="font-quantify text-[26px] font-bold text-primary"
              />
            }
          >
            Elora.
          </SheetClose>
          <SheetClose
            render={
              <button
                type="button"
                aria-label="Close navigation"
                className="flex size-9 items-center justify-center"
              />
            }
          >
            <X
              size={27}
              strokeWidth={2}
              className="hover:-rotate-180 transition-all duration-500 cursor-pointer "
            />
          </SheetClose>
        </header>
        {activeSubmenu ? (
          <Submenu {...activeSubmenu} onBack={() => setActiveSubmenu(null)} />
        ) : (
          <nav className="flex-1 overflow-y-auto px-6 pt-7">
            <ul className="space-y-5">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <div className="flex  items-center justify-between transition-transform duration-200 ease-out hover:text-primary">
                    {item.submenu ? (
                      <button
                        type="button"
                        onClick={() => setActiveSubmenu(item.submenu)}
                        className="group/button flex cursor-pointer hover:text-primary duration-200 w-full items-center justify-between text-left font-cormorant text-[26px] leading-tight text-white"
                      >
                        <span className="transition-all duration-500 ease-in-out group-hover/button:ml-2">
                          {item.label}
                        </span>
                        <ChevronRight
                          size={21}
                          className="transition-transform duration-300"
                        />
                      </button>
                    ) : (
                      <SheetClose
                        nativeButton={false}
                        render={
                          <Link
                            href={item.href}
                            className="flex w-full transition-all duration-500 ease-in-out hover:ml-2 hover:text-primary items-center text-left font-cormorant text-[26px] leading-tight text-white"
                          />
                        }
                      >
                        {item.label}
                      </SheetClose>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <footer className="shrink-0 border-t border-white/10 px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-3">
          <div className="flex items-center justify-between gap-3 overflow-auto">
            <SheetClose
              render={
                <Button
                  onClick={() => router.push("/login")}
                  variant="fill"
                  className="flex min-h-10 items-center justify-center gap-1 rounded-full bg-primary px-5 font-medium font-inter hover:text-white transition-colors hover:bg-[#C99B42]"
                />
              }
            >
              <UserIcon className="inline-flex size-4 xl:size-4" />
              sign in
            </SheetClose>
            <div className="flex items-center gap-1">
              <Button
                variant="icon-slide"
                className="social-icon-button px-0 h-10 fill rounded-full bg-secondary-background text-primary hover:text-white"
              >
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="relative z-10 flex size-9 items-center justify-center rounded-full text-primary group-hover/button:text-white"
                >
                  <span className="social-icon-pop inline-flex">
                    <FaceBookIcon />
                  </span>
                </Link>
              </Button>
              <Button
                variant="icon-slide"
                className="social-icon-button px-0 h-10 fill rounded-full bg-secondary-background text-primary"
              >
                <Link
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="relative z-10 flex size-9 items-center justify-center rounded-full text-primary group-hover/button:text-white"
                >
                  <span className="social-icon-pop inline-flex">
                    <TwitterIcon />
                  </span>
                </Link>
              </Button>
              <Button
                variant="icon-slide"
                className="social-icon-button px-0 h-10 fill rounded-full bg-secondary-background text-primary"
              >
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="relative z-10 flex size-9 items-center justify-center rounded-full text-primary group-hover/button:text-white"
                >
                  <span className="social-icon-pop inline-flex">
                    <InstagramIcon />
                  </span>
                </Link>
              </Button>
              <Button
                variant="icon-slide"
                className="social-icon-button px-0 h-10 fill rounded-full bg-secondary-background text-primary"
              >
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="relative z-10 flex size-9 items-center justify-center rounded-full text-primary group-hover/button:text-white"
                >
                  <span className="social-icon-pop inline-flex">
                    <YoutubeIcon />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </SheetContent>
    </Sheet>
  );
}
