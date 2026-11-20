import Image from "next/image";
import Link from "next/link";

type JournalArticleItemProps = {
  title: string;
  readTime: string;
  image: string;
  href: string;
};

export function JournalArticleItem({
  title,
  readTime,
  image,
  href,
}: JournalArticleItemProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-muted"
    >
      <div className="relative size-19 shrink-0 overflow-hidden rounded-xl bg-muted">
        <Image
          src={image}
          alt=""
          fill
          sizes="76px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-cormorant text-[22px] leading-tight text-foreground transition-colors group-hover:text-primary">
          {title}
        </span>

        <span className="font-inter text-sm text-muted-foreground">
          {readTime}
        </span>
      </div>
    </Link>
  );
}
