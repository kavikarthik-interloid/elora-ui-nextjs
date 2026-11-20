import type { Metadata } from "next";
import { AppProvider } from "@/providers/app-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cormorantGaramond, inter, quantify } from "@/lib/fonts";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Elora UI",
    template: "%s | Elora UI",
  },
  description: "Elora UI application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        cormorantGaramond.variable,
        inter.variable,
        quantify.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>
        <TooltipProvider>
          <AppProvider>{children}</AppProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
