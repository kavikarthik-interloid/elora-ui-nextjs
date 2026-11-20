import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

import { shopPromo } from "@/data/shop-menu";

export function ShopPromoBanner() {
  return (
    <div className="relative isolate flex min-h-62.5 overflow-hidden rounded-2xl">
      <Image
        src={shopPromo.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 z-0 bg-linear-to-r from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10 flex max-w-55 flex-col items-start justify-center gap-3 p-8 text-white">
        <h3 className="font-cormorant text-3xl leading-[1.05] text-primary">
          {shopPromo.title}
        </h3>

        <p className="font-inter text-sm">{shopPromo.description}</p>

        <Link
          href={shopPromo.href}
          className="mt-2 cursor-pointer inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 font-inter text-sm text-white transition-colors hover:bg-primary/90"
        >
          Shop Now
          <MoveRight size={16} />
        </Link>
      </div>
    </div>
  );
}
