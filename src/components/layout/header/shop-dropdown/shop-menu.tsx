import Link from "next/link";
import { MoveRight } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { shopCategories } from "@/data/shop-menu";
import { ShopCategoryItem } from "./shop-category-item";
import { ShopPromoBanner } from "./shop-promo-banner";

export function ShopMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-auto rounded-none bg-transparent p-0 font-inter text-base  uppercase tracking-widest animated-underline hover:bg-transparent focus:bg-transparent focus-visible:ring-0">
        Shop
      </NavigationMenuTrigger>
      <NavigationMenuContent className="left-10 w-full rounded-[24px] bg-transparent!">
        <div className="shop-menu-panel mt-3 flex w-full flex-col gap-6 rounded-[24px] bg-white p-5 shadow-sm md:flex-row md:gap-8 md:p-8">
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="mb-5 flex items-start justify-between">
              <span className="font-inter text-lg font-bold uppercase tracking-[0.15em] text-primary">
                Shop
              </span>
              <NavigationMenuLink
                render={
                  <Link
                    href="/shop"
                    className="flex items-center gap-2 font-cormorant text-[22px] bg-transparent hover:bg-transparent text-foreground hover:text-primary"
                  >
                    Shop All
                    <MoveRight size={17} />
                  </Link>
                }
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {shopCategories.map((category) => (
                <ShopCategoryItem key={category.title} {...category} />
              ))}
            </div>
          </div>
          <div className="group min-h-62.5 md:w-[40%] md:shrink-0">
            <ShopPromoBanner />
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
