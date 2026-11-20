import balanceImage from "@/assets/balance.svg";
import energyImage from "@/assets/energy.svg";
import moodImage from "@/assets/mood.svg";
import shopMainImage from "@/assets/shop-main.svg";
import sleepImage from "@/assets/sleep.svg";

export const shopCategories = [
  {
    title: "Sleep",
    description: "Sleep & Recovery",
    image: sleepImage,
    href: "/shop/sleep",
  },
  {
    title: "Energy",
    description: "Energy & Metabolism",
    image: energyImage,
    href: "/shop/energy",
  },
  {
    title: "Mood",
    description: "Mood & Mind",
    image: moodImage,
    href: "/shop/mood",
  },
  {
    title: "Balance",
    description: "Hormonal Balance",
    image: balanceImage,
    href: "/shop/balance",
  },
];

export const shopPromo = {
  title: "Build your wellness bundle",
  description: "Buy 3 and save 30%",
  image: shopMainImage,
  href: "/shop/bundles",
};
