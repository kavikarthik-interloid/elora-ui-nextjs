import Link from "next/link";
import { MoveRight } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { journalArticles } from "@/data/journey-menu";
import { JournalArticleItem } from "./journal-article-item";

export function JournalMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-auto rounded-none bg-transparent p-0 font-inter text-base font-normal uppercase tracking-widest animated-underline hover:bg-transparent focus:bg-transparent focus-visible:ring-0">
        Journal
      </NavigationMenuTrigger>
      <NavigationMenuContent className="left-10 w-full rounded-[24px] bg-transparent!">
        <div className="journal-menu-panel mt-3 flex w-full flex-col rounded-[24px] bg-white p-5 shadow-sm md:p-8">
          <div className="mb-5 flex items-start justify-between">
            <span className="font-inter text-lg font-bold uppercase tracking-[0.15em] text-primary">
              Journal
            </span>
            <NavigationMenuLink
              render={
                <Link
                  href="/journal"
                  className="flex items-center gap-2 bg-transparent font-cormorant text-[22px] text-foreground hover:bg-transparent hover:text-primary"
                >
                  Explore All
                  <MoveRight size={17} />
                </Link>
              }
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2">
            {journalArticles.map((article) => (
              <JournalArticleItem key={article.title} {...article} />
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
