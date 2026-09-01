import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { yekan } from "@/lib/font";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Deutschraum",
    template: "%s | Deutschraum",
  },
  description:
    "Deutsch lernen für Alltag, Studium, Arbeit und Leben in Deutschland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={cn("h-full", "antialiased", inter.variable, yekan.variable, "font-sans", geist.variable)}>
      <body
        className="
          min-h-full
          font-sans
        "
      >
        {children}
      </body>
    </html>
  );
}
