"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus, Truck, X } from "lucide-react";

import { shopCategories } from "@/data/shop-menu";
import CartIcon from "@/components/icons/cart";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BinIcon from "@/components/icons/bin";
import { Button } from "@/components/ui/button";
import MoveRightIcon from "@/components/icons/move-right";
import EmptyCart from "./empty-cart";

type CartLine = {
  product: (typeof shopCategories)[number];
  quantity: number;
};

const FREE_SHIPPING_THRESHOLD = 1105;

export default function CartDrawer() {
  const [items, setItems] = useState<CartLine[]>(() =>
    shopCategories
      .filter((product) => product.id === 1 || product.id === 3)
      .map((product) => ({ product, quantity: 1 })),
  );

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const remainingForFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotal,
  );
  const shippingProgress = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100,
  );

  function changeQuantity(productId: number, amount: number) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  }

  function removeItem(productId: number) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    );
  }

  return (
    <Sheet>
      <Tooltip>
        <TooltipTrigger
          className="flex"
          render={
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open cart"
                  className="inline-flex items-center justify-center cursor-pointer"
                >
                  <CartIcon className="hover:text-primary"/>
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
          Card
        </TooltipContent>
      </Tooltip>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="gap-0 overflow-hidden rounded-[20px] border-0 bg-[#F6F2EC] text-[#242321] shadow-xl data-[side=right]:h-[58%] sm:data-[side=right]:h-[72%] md:data-[side=right]:h-[70%] lg:data-[side=right]:h-[86%] xl:data-[side=right]:h-[94%] data-[side=right]:w-full data-[side=right]:max-w-full data-[side=right]:sm:max-w-101.25 data-[side=right]:lg:max-w-135 data-[side=right]:xl:max-w-150"
      >
        <div className="flex shrink-0 items-center justify-between px-7.5 pt-6">
          <SheetTitle className="font-cormorant text-[26px] md:text-[30px] font-bold text-primary-text-secondary">
            Cart
            <sup className="ml-1 text-center font-inter text-base font-medium uppercase leading-7 tracking-[2px]">
              1
            </sup>
          </SheetTitle>
          <SheetClose
            render={
              <button
                type="button"
                aria-label="Close cart"
                className="inline-flex size-8 items-center justify-center cursor-pointer"
              />
            }
          >
            <X
              size={30}
              strokeWidth={1.8}
              className="hover:-rotate-180 transition-all duration-500"
            />
          </SheetClose>
        </div>

        <div className="mt-5 shrink-0 rounded-xl bg-[#e8e5dd98] mx-7.5 px-4.5 py-3">
          <div className="flex items-center gap-2 font-inter text-sm lg:text-lg font-medium text-[#a77843]">
            <Truck size={17} strokeWidth={1.7} />
            <span>
              {remainingForFreeShipping > 0
                ? `Spend $${remainingForFreeShipping} more to reach free shipping!`
                : "You've reached free shipping!"}
            </span>
          </div>
          <div
            role="progressbar"
            aria-label="Free shipping progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(shippingProgress)}
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#dedbd3]"
          >
            <div
              className="h-full rounded-full bg-[#aa8050] transition-[width]"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-7.5 pt-9.5">
          {items.length > 0 ? (
            <ul>
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex gap-3 border-b border-[#dfdcd6] py-2.5 last:border-b-0"
                >
                  <div className="relative size-18 h-22 lg:h-27 lg:w-23 overflow-hidden rounded-md bg-[#e5ded2]">
                    <Image
                      src={product.cartImage}
                      alt={product.title}
                      fill
                      sizes="72px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative min-w-0 flex-1">
                    <button
                      type="button"
                      aria-label={`Remove ${product.title} from cart`}
                      onClick={() => removeItem(product.id)}
                      className="absolute right-0 top-0 p-0.5 hover:text-primary cursor-pointer"
                    >
                      <BinIcon />
                    </button>

                    <p className="text-[8px] lg:text-[10px] font-medium tracking-[1.4px] text-[#99958f]">
                      SUBSCRIPTION • MONTHLY
                    </p>
                    <h2 className="font-cormorant text-[20px] lg:text-[24px] mt-1.25 lg:mt-1.75 font-medium leading-tight">
                      {product.title}
                    </h2>
                    <p className="mt-0.75 lg:mt-1 text-[10px] lg:text-sm font-inter leading-4 text-[#393735]">
                      {product.cartDescription}
                    </p>

                    <div className="mt-1.25 lg:mt-3 flex items-center justify-between font-inter gap-2">
                      <p className="text-[20px] lg:text-[24px] font-medium leading-none">
                        ${product.price * quantity}
                      </p>

                      <div className="flex h-6.75 items-center rounded-full border border-1.5 border-[#c7c3bd]">
                        <button
                          aria-label={`Decrease ${product.title} quantity`}
                          disabled={quantity <= 1}
                          onClick={() => changeQuantity(product.id, -1)}
                          className="inline-flex size-7 items-center justify-center disabled:opacity-40 cursor-pointer"
                        >
                          <Minus size={13} className="font-medium" />
                        </button>
                        <span className="min-w-5 text-center text-xs font-zain font-bold">
                          {quantity}
                        </span>
                        <button
                          aria-label={`Increase ${product.title} quantity`}
                          onClick={() => changeQuantity(product.id, 1)}
                          className="inline-flex size-7 items-center justify-center cursor-pointer"
                        >
                          <Plus size={13} className="font-medium" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyCart />
          )}
        </div>
        {subtotal && (
          <div className="shrink-0 border-t border border-white bg-background px-7.5 pb-6 pt-2.5 lg:pt-6.5">
            <div className="flex items-center justify-between">
              <p className="text-xs md:text-sm lg:text-lg font-inter tracking-[2px] font-medium">
                SUBTOTAL
              </p>
              <p className="text-[20px] lg:text-[28px] font-inter text-primary-text-secondary font-medium">
                ${subtotal}
              </p>
            </div>
            <p className="mt-1.5 text-[9px] md:text-[10px] lg:text-[13px] text-[#77736e]">
              Shipping, taxes, and discounts calculated at checkout
            </p>
            <Button
              variant="fill"
              className="group mt-6.25 w-full flex h-9 items-center justify-center lg:h-11 gap-3.75 font-medium rounded-full bg-primary text-[13px] text-sm lg:text-base text-white transition-colors hover:bg-[#9d7123]"
            >
              Proceed to Checkout
              <MoveRightIcon className="group-hover/button:-rotate-45 transition-normal duration-500"/>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
