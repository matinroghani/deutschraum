import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { yekan } from "@/lib/font";

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
    <html lang="de" className={`${inter.variable} ${yekan.variable} h-full antialiased`}>
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
