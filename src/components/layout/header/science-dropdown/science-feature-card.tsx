import Image from "next/image";
import Link from "next/link";
import { scienceFeature } from "@/data/science-menu";

export function ScienceFeatureCard() {
  return (
    <Link
      href={scienceFeature.href}
      className="group relative isolate flex min-h-65 overflow-hidden rounded-2xl"
    >
      <Image
        src={scienceFeature.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 z-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      <div className="relative z-10 flex w-full flex-col justify-end p-6 text-white">
        <h3 className="font-cormorant text-3xl leading-tight">
          {scienceFeature.title}
        </h3>
        <p className="mt-2 max-w-md font-inter text-sm leading-6 text-white/80">
          {scienceFeature.description}
        </p>
      </div>
    </Link>
  );
}