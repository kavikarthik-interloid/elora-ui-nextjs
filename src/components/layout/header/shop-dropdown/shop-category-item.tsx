import Image from "next/image";
import Link from "next/link";

type ShopCategoryItemProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export function ShopCategoryItem({
  title,
  description,
  image,
  href,
}: ShopCategoryItemProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-muted/60"
    >
      <div className="shop-item-float relative flex h-17 w-18.5 shrink-0 items-center justify-center overflow-visible rounded-xl bg-[#e7e7e7]">
        <Image
          src={image}
          alt={title}
          width={57}
          height={94}
          sizes="57px"
          className="absolute left-1/2 bottom-0 z-10 h-21 w-14.25 -translate-x-1/2 object-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-cormorant text-[22px] leading-tight text-foreground transition-colors group-hover:text-primary">
          {title}
        </span>
        <span className="font-inter text-sm text-muted-foreground">
          {description}
        </span>
      </div>
    </Link>
  );
}
