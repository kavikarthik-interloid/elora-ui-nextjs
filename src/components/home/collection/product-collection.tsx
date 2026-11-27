import CartIcon from "@/components/icons/cart";
import MoveRightIcon from "@/components/icons/move-right";
import { Button } from "@/components/ui/button";
import { productCollection } from "@/data/product-collection";
import Image from "next/image";
import Link from "next/link";

export default function ProductCollection() {
  return (
    <section className="px-5 md:px-11 py-12.5 pb-17.75 md:pb-38.75 xl:px-25">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:justify-between">
        <div className="flex flex-col">
          <span className="font-inter font-medium text-sm lg:text-base leading-[100%] tracking-[0.15em] uppercase text-primary">
            The Collection
          </span>
          <span className="font-cormorant font-medium text-[36px] xl:text-[64px] leading-[100%] pt-5 w-[85%] lg:w-full">
            A quiet system,{" "}
            <em className="inline-block pt-[0.12em]">precisely</em> formulated.
          </span>
        </div>
        <Link
          href="/shop"
          className="group animated-underline-swap inline-flex w-fit items-cente r gap-2 cursor-pointer lg:justify-end lg:items-end font-inter font-medium text-base lg:text-lg leading-7 hover:text-primary"
        >
          <span>View all products</span>
          <MoveRightIcon className="-rotate-45 transition-transform duration-500 group-hover:rotate-0 relative lg:bottom-2" />
        </Link>
      </div>
      <div>
        <div className="pt-10 md:pt-13.25 xl:mt-25">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 2xl:gap-10">
            {productCollection.map((product) => {
              return (
                <li
                  key={product.id}
                  className="px-6 py-6.25 border w- border-white rounded-[25px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] group"
                >
                  <div className="relative size-full h-89.25 rounded-[25px] bg-background overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover rounded-[25px] hover:scale-105 transistion-all duration-400 "
                    />
                    <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 translate-y-4 scale-95 opacity-0 transition-[translate,scale,opacity,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[translate,opacity] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:blur-0 group-hover:duration-700 motion-reduce:transition-none">
                      <Button
                        variant="ghost"
                        className="glass-btn bottom-4 button-fill-hover text-base shop-now-button backdrop-blur-sm  w-32.25 h-10 rounded-full border border-white/10"
                      >
                        Shop Now
                      </Button>
                    </div>
                    <div className="pointer-events-none absolute right-4 top-4 z-10 translate-x-4 scale-90 opacity-0 transition-[translate,scale,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-900 motion-reduce:transition-none">
                      <Button
                        variant="icon-fill"
                        className="cart-scroll-button h-10 w-10 rounded-full glass-btn"
                      >
                        <span className="icon-scroll">
                          <span className="relative z-10 icon-scroll-track">
                            <span>
                              <CartIcon className="flex items-center" />
                            </span>
                            <span aria-hidden="true">
                              <CartIcon className="flex items-center" />
                            </span>
                          </span>
                        </span>
                      </Button>
                    </div>
                  </div>
                  <div className="w-full rounded-xl bg-[#F5F1EB] pt-4.25">
                    <div className="flex items-start justify-between">
                      <span className="font-inter font-medium text-sm text-primary leading-none tracking-[0.15em] uppercase">
                        {product.title}
                      </span>
                      <div className="text-right flex flex-col items-start">
                        <span className="text-[20px] font-medium relative bottom-1">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <h3 className="font-cormorant font-medium text-[32px] lg:text-[34px] leading-none tracking-normal">
                        {product.name}
                      </h3>
                      <div>
                        <span className="text-xs tracking-[15%] text-muted-foreground relative bottom-1.5 uppercase">
                          {product.billingCycle}
                        </span>
                      </div>
                    </div>
                    <p className="font-inter text-[13px] lg:text-[15px] leading-none tracking-normal pt-3">
                      {product.subtitle}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.75">
                      {product.benefits.map((benefit) => (
                        <span
                          key={benefit.label}
                          className="rounded-[10px] border border-[#E5D9C7] bg-[#EFE7DA] px-3 py-1 font-inter text-[13px] lg:text-sm"
                        >
                          {benefit.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
