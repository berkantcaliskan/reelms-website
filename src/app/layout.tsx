import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const karla = Karla({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-karla",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Reelms for Communities",
  description: "Reelms — your space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} antialiased`}>
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
