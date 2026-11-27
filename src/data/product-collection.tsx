import sleepImage from "@/assets/sleep.png";
import EnergyImage from "@/assets/energy.png";
import MoodImage from "@/assets/mood.png";
import BalanceImage from "@/assets/balance.png";
import { StaticImageData } from "next/image";

type Productbenefit = {
  label: string;
};

type ProductCollection = {
  id: number;
  title: string;
  name: string;
  subtitle: string;
  price: string;
  billingCycle: string;
  image: StaticImageData;
  benefits: Productbenefit[];
};

export const productCollection: ProductCollection[] = [
  {
    id: 1,
    title: "Sleep & Recovery",
    name: "Sleep",
    subtitle: "Restorative Night Formula",
    price: "52",
    billingCycle: "monthly",
    image: sleepImage,
    benefits: [
      { label: "Falls asleep faster" },
      { label: "Stays asleep longer" },
      { label: "Reduces night sweats" },
    ],
  },
  {
    id: 2,
    title: "energy & metabolism",
    name: "Energy",
    subtitle: "Metabolism + Vitality",
    price: "58",
    billingCycle: "monthly",
    image: EnergyImage,
    benefits: [
      { label: "Sustained energy" },
      { label: "Metabolic support" },
      { label: "Reduces fatigue" },
    ],
  },
  {
    id: 3,
    title: "Mood & Mind",
    name: "Mood",
    subtitle: "Daily Emotional Equilibrium",
    price: "54",
    billingCycle: "monthly",
    image: MoodImage,
    benefits: [
      { label: "Stabilizes mood" },
      { label: "Reduces anxiety" },
      { label: "Eases irritability" },
    ],
  },
  {
    id: 4,
    title: "Hormonal Balance",
    name: "Balance",
    subtitle: "Hormonal Foundation",
    price: "68",
    billingCycle: "monthly",
    image: BalanceImage,
    benefits: [
      { label: "Eases hot flashes" },
      { label: "Reduces night sweats" },
      { label: "Supports cycle" },
    ],
  },
];
