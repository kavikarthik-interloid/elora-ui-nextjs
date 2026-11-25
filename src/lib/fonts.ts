import localFont from "next/font/local";
import { Inter, Zain } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

export const quantify = localFont({
  src: "../fonts/Quantify.ttf",
  display: "swap",
  weight: "400",
  variable: "--font-quantify-file",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-file",
  display: "swap",
});

export const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-file",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const zain = Zain({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-zain-file",
  display: "swap",
});