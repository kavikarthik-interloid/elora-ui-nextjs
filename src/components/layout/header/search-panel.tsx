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
import { useState } from "react";
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
        side="top"
        className="h-full max-w-none rounded-[28px] mx-4 md:mx-10 border border-[#E3DED7] bg-background px-0 text-foreground [&>button]:hidden lg:h-fit! lg:top-4 lg:bottom-4 2xl:mx-auto lg:max-w-375"
      >
        <SheetTitle className="sr-only">Search Elora</SheetTitle>
        <div className="flex relative flex-row-reverse h-full lg:flex-col lg:justify-center overflow-hidden">
          <header className="flex shrink-0 justify-end pt-6">
            <SheetClose
              render={
                <button
                  type="button"
                  aria-label="Close search"
                  className="absolute flex right-3 top-4 lg:right-10 lg:top-10 size-10 items-center justify-center pr-0! cursor-pointer"
                />
              }
            >
              <X
                size={30}
                strokeWidth={2}
                className="hover:-rotate-180 transition-all duration-500"
              />
            </SheetClose>
          </header>
          <div className="flex flex-col w-full px-8 pb-8 md:pb-13 lg:w-full lg:px-15 xl:px-30 xl:pb-16">
            <div className="mt-19 md:mt-17 lg:mt-13.5 flex items-center gap-3 xl:gap-7.5 border-b border-[#BDBAB5] pb-2">
              <Search size={23} className="shrink-0 xl:size-10 text-[#AAA9A7]" />
              <input
                type="search"
                placeholder="Search products, symptoms..."
                aria-label="Search products and articles"
                className="min-w-0 flex-1 bg-transparent font-cormorant text-[22px] md:text-[30px] xl:text-[48px] text-[#252321] outline-none placeholder:text-[#B8B7B5] placeholder:opacity-100"
              />
            </div>
            <section className="mt-4 md:mt-4.5 lg:mt-9.5 w-full">
              <h2 className="mb-3 text-[12px] lg:text-[14px] font-medium tracking-[2px] text-primary">
                TRENDING
              </h2>
              <div className="flex w-full flex-wrap items-center gap-x-2.5 gap-y-2.5">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    type="button"
                    className="flex w-fit shrink-0 items-center justify-center rounded-full border border-[#C9C6C2] px-1.5 md:px-3 lg:px-3.75 py-1 text-xs md:text-sm lg:text-base  text-muted-foreground transition-colors hover:border-primary hover:bg-transparent hover:text-primary"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </section>
            <section className=" md:flex md:gap-15 ">
              {navigationItems.length > 0 && (
                <section className="mt-6 md:mt-9">
                  <h2 className="mb-5  text-[12px] lg:text-[14px] font-medium tracking-[2px] text-primary">
                    SUGGESTED PRODUCTS
                  </h2>
                  <div className="flex relative flex-col space-y-4 h-full lg:flex-col overflow-visible">
                    {shopCategories.slice(0, 2).map((product) => (
                      <a
                        href="/shop"
                        key={product.title}
                        className="flex items-center gap-4 hover:bg-"
                      >
                        <div className="corner-frame relative size-15.5 shrink-0 overflow-visible rounded-xl bg-[#E1DDD7]">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={48}
                            height={76}
                            sizes="48px"
                            className="absolute bottom-0 left-1/2 z-10 h-18 w-12 -translate-x-1/2"
                          />
                        </div>

                        <div>
                          <h3 className="font-cormorant text-[15px]  md:text-lg lg:text-[20px] xl:text-[24px] leading-tight hover:text-primary">
                            {product.title}
                          </h3>

                          <p className="mt-1 text-[10px] md:text-xs lg:text-sm xl:text-[17px] text-muted-foreground">
                            {product.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              )}
              {navigationItems.length > 0 && (
                <section className="mt-6 md:mt-9">
                  <h2 className="mb-5 text-[12px] lg:text-[14px] font-medium tracking-[2px] text-primary">
                    ARTICLES
                  </h2>
                  <div className="space-y-5">
                    {journalArticles.slice(0, 2).map((article) => (
                      <a
                        href="/journal"
                        key={article.title}
                        className="flex items-center gap-4 lg:gap-4.5"
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
                          <h3 className="font-cormorant text-[15px] md:text-lg lg:text-[20px] xl:text-[24px] leading-tight hover:text-primary">
                            {article.title}
                          </h3>
                          <p className="mt-1 text-[10px] md:text-xs lg:text-sm xl:text-[17px] text-muted-foreground">
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

                <p className="mt-2 text-sm text-secondary">
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
