import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.shortName} | Public Website`,
  description:
    "A modern, responsive website providing MBA students with source-backed information about management consulting careers and recruiting.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="min-h-dvh" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
