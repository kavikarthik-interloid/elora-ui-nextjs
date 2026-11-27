import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { scienceLinks } from "@/data/science-menu";
import { ScienceLinkItem } from "./science-link-item";
import { ScienceFeatureCard } from "./science-feature-card";

export function ScienceMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-auto rounded-none bg-transparent! p-0 font-inter text-base  uppercase tracking-widest animated-underline hover:bg-transparent! focus:bg-transparent focus-visible:ring-0">
        our science
      </NavigationMenuTrigger>
      <NavigationMenuContent className="left-0 w-full rounded-[24px] bg-transparent">
        <div className="science-menu-panel mt-3 flex w-full flex-col gap-6 rounded-[24px] bg-white p-5 shadow-sm md:flex-row md:gap-8 md:p-8">
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="mb-5 flex items-start justify-between">
              <p className="font-inter text-lg font-bold uppercase tracking-[0.15em] text-primary">
              Our Science
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {scienceLinks.map((item) => (
                <ScienceLinkItem key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div className="min-h-65 md:w-[40%] md:shrink-0">
            <ScienceFeatureCard />
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
