"use client";

import SearchIcon from "@/components/icons/search";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationItems } from "../mobile-navigation/mobile-navigation";
import Image from "next/image";
import { shopCategories } from "@/data/shop-menu";
import { journalArticles } from "@/data/journey-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const trendingSearches = [
  "Hot flashes",
  "Sleep support",
  "Magnesium",
  "Brain fog",
  "Perimenopause",
];

export default function SearchPanel() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateScreen = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateScreen();
    mediaQuery.addEventListener("change", updateScreen);

    return () => {
      mediaQuery.removeEventListener("change", updateScreen);
    };
  }, []);
  return (
    <Sheet
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
      }}
    >
      <Tooltip>
        <TooltipTrigger
          render={
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open search"
                  className="inline-flex items-center justify-center p-2"
                >
                  <SearchIcon />
                </button>
              }
            />
          }
        />
        <TooltipContent
          side="bottom"
          sideOffset={8}
          className="rounded-[14px] bg-black px-5 py-2 text-lg text-white"
        >
          Search
        </TooltipContent>
      </Tooltip>
      <SheetContent
        side={isDesktop ? "top" : "left"}
        className="h-full max-w-none rounded-[28px] border border-[#E3DED7] bg-background px-0 text-foreground [&>button]:hidden lg:h-fit! lg:top-4 lg:bottom-4 lg:mx-auto lg:max-w-375"
      >
        <SheetTitle className="sr-only">Search Elora</SheetTitle>
        <div className="flex relative flex-row-reverse h-full lg:flex-col lg:justify-center overflow-hidden">
          <header className="flex shrink-0 justify-end px-6 pt-6">
            <SheetClose
              render={
                <button
                  type="button"
                  aria-label="Close search"
                  className="absolute flex size-10 items-center justify-center"
                />
              }
            >
              <X
                size={30}
                strokeWidth={2}
                className="lg:size-5 cursor-pointer"
              />
            </SheetClose>
          </header>
          <div className="flex flex-col overflow-y-auto px-8 pb-8 lg:w-full lg:px-30">
            <div className="mt-7 flex items-center gap-3 border-b border-[#BDBAB5] pb-2">
              <Search size={23} className="shrink-0 text-[#AAA9A7]" />
              <input
                type="search"
                placeholder="Search products, symptoms..."
                aria-label="Search products and articles"
                className="min-w-0 flex-1 bg-transparent font-cormorant text-[25px] text-[#252321] outline-none placeholder:text-[#B8B7B5] placeholder:opacity-100"
              />
            </div>
            <section className="mt-7">
              <h2 className="mb-5 text-[14px] font-medium tracking-[0.18em] text-[#B57C24]">
                TRENDING
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    type="button"
                    className="rounded-full border border-[#C9C6C2] px-3 py-1.5 text-[14px] text-muted-forground transition-colors hover:border-primary hover:text-primary hover:bg-transparent"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </section>
            <section className=" lg:flex lg:gap-15">
              {navigationItems.length > 0 && (
                <section className="mt-10">
                  <h2 className="mb-5 text-[14px] font-medium tracking-[0.18em] text-primary">
                    SUGGESTED PRODUCTS
                  </h2>
                  <div className="space-y-4">
                    {shopCategories.slice(0, 2).map((product) => (
                      <a
                        href="/shop"
                        key={product.title}
                        className="flex items-center gap-4 hover:bg-"
                      >
                        <div className="relative size-15.5 shrink-0 rounded-xl bg-[#E1DDD7] shop-item-float overflow-visible ">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="62px"
                            className="absolute bottom-0 left-1/2 h-25 w-15"
                          />
                        </div>

                        <div>
                          <h3 className="font-cormorant text-[20px] leading-tight hover:text-primary">
                            {product.title}
                          </h3>

                          <p className="mt-1 text-[13px] text-muted-foreground">
                            {product.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              )}
              {navigationItems.length > 0 && (
                <section className="mt-10">
                  <h2 className="mb-5 text-[14px] font-medium tracking-[0.18em] text-[#B57C24]">
                    ARTICLES
                  </h2>

                  <div className="space-y-5">
                    {journalArticles.slice(0, 2).map((article) => (
                      <a
                        href="/journal"
                        key={article.title}
                        className="flex items-center gap-4"
                      >
                        <div className="relative size-15.5 shrink-0 overflow-hidden rounded-xl bg-[#E1DDD7]">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            sizes="62px"
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="font-cormorant text-[20px] leading-tight hover:text-primary">
                            {article.title}
                          </h3>

                          <p className="mt-1 text-[13px] text-[#696663]">
                            {article.readTime}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </section>
            {navigationItems.length === 0 && navigationItems.length === 0 && (
              <div className="py-12 text-center">
                <p className="font-cormorant text-2xl">No results found</p>

                <p className="mt-2 text-sm text-[#696663]">
                  Try searching for another product or symptom.
                </p>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
