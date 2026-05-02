import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Inventory Predictor — Predict Stockouts Before They Happen",
  description: "ML-powered inventory forecasting for Shopify stores. Prevent stockouts and overstock with AI-driven predictions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3b16991a-5ef2-4eeb-9bbb-afacd17ae58a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
