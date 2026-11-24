import UserIcon from "../../icons/user";
import CartIcon from "../../icons/cart";
import Link from "next/link";
import { quantify } from "@/lib/fonts";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { NavigationMenu, NavigationMenuList } from "../../ui/navigation-menu";
import { ShopMenu } from "./shop-dropdown/shop-menu";
import { ScienceMenu } from "./science-dropdown/science-menu";
import { JournalMenu } from "./journal-dropdown/journey-menu";
import { MobileNavigation } from "../mobile-navigation/mobile-navigation";
import SearchPanel from "./search-panel";
import { cn } from "cn";

export function Header({
  className,
  overlay = false,
}: {
  className?: string;
  overlay?: boolean;
}) {
  return (
    <header className={cn(overlay ? "h-0" : "h-20", className)}>
      <div className="fixed left-1/2 top-3 z-50 h-20 w-full max-w-[1555px] -translate-x-1/2 px-4 sm:px-5 xl:top-6 lg:px-6">
        <div className="flex justify-between items-center p-5 h-10.25 lg:h-16 bg-white rounded-[250px] lg:px-10">
          <div className="flex items-center gap-3">
            <MobileNavigation />
            <Link
            href="/home-page"
              className={`${quantify.className} text-[26px] xl:text-[40px] text-primary`}
            >
              Elora.
            </Link>
          </div>
          <div className="uppercase hidden lg:flex items-center lg:gap-6 xl:gap-12.25 font-inter text-sm">
            <NavigationMenu className="flex-none">
              <NavigationMenuList>
                <ShopMenu />
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/"
              className="group flex items-center gap-2 lg:text-base tracking-widest animated-underline"
            >
              quiz
            </Link>
            <NavigationMenu className="flex-none">
              <NavigationMenuList>
                <ScienceMenu />
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu className="flex-none">
              <NavigationMenuList>
                <JournalMenu />
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-2 lg:gap-3.75 items-center">
            <SearchPanel />
            <Tooltip>
              <TooltipTrigger aria-label="Account" className="flex">
                <UserIcon />
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                sideOffset={8}
                className="rounded-[14px] bg-secondary px-5 py-2 text-lg text-white"
              >
                Account
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger aria-label="Card">
                <CartIcon />
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                sideOffset={8}
                className="rounded-[14px] bg-secondary px-5 py-2 text-lg text-white"
              >
                Card
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  );
}
