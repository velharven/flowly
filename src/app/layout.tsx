import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ancola = localFont({
  src: [
    {
      path: "./fonts/ancola-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ancola-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-ancola",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowly — Automate the work between your tools",
  description:
    "Flowly turns the manual glue between your SaaS into reliable, observable workflows. Built as a portfolio piece — the product is fictional, the code is real.",
  metadataBase: new URL("https://velharven.github.io/flowly-landing/"),
  openGraph: {
    title: "Flowly — Automate the work between your tools",
    description:
      "Workflow automation for teams. Built as a portfolio piece — the product is fictional, the code is real.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ancola.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
