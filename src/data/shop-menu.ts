import balanceImage from "@/assets/balance.svg";
import energyImage from "@/assets/energy.svg";
import moodImage from "@/assets/mood.svg";
import shopMainImage from "@/assets/shop-main.svg";
import sleepImage from "@/assets/sleep.svg";
import SleepImage2 from "@/assets/sleep.png";
import energyImage2 from "@/assets/energy.png";
import moodImage2 from "@/assets/mood.png";
import balanceImage2 from "@/assets/balance.png";

export const shopCategories = [
  {
    id: 1,
    title: "Sleep",
    description: "Sleep & Recovery",
    cartDescription: "Restorative Night Formula",
    price: 52,
    image: sleepImage,
    cartImage: SleepImage2,
    href: "/shop/sleep",
  },
  {
    id: 2,
    title: "Energy",
    description: "Energy & Metabolism",
    price: 54,
    cartDescription: "Daily Energy & Vitality Formula",
    image: energyImage,
    cartImage: energyImage2,
    href: "/shop/energy",
  },
  {
    id: 3,
    title: "Mood",
    description: "Mood & Mind",
    price: 55,
    cartDescription: "Daily Emotional Equilibrium",
    image: moodImage,
    cartImage: moodImage2,
    href: "/shop/mood",
  },
  {
    id: 4,
    title: "Balance",
    description: "Hormonal Balance",
    price: 56,
    cartDescription: "Daily Hormonal Balance & Wellness",
    image: balanceImage,
    cartImage: balanceImage2,

    href: "/shop/balance",
  },
];

export const shopPromo = {
  title: "Build your wellness bundle",
  description: "Buy 3 and save 30%",
  image: shopMainImage,
  href: "/shop/bundles",
};
