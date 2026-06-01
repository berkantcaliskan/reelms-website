import type { Metadata } from "next";
import { Dela_Gothic_One, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const delaGothic = Dela_Gothic_One({
  weight: "400",
  variable: "--font-dela",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reelms",
  description: "Reelms — your space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${delaGothic.variable} ${plusJakarta.variable} antialiased`}>
        <Script id="sw-kill" strategy="afterInteractive">{`
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(r) {
              for (var reg of r) { reg.unregister(); }
            });
          }
        `}</Script>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
