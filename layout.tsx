import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "دفتر فنی و لوازم التحریر سروش",
  description: "فروشگاه آنلاین دفتر فنی و لوازم التحریر سروش در اصفهان",
  keywords: ["لوازم التحریر", "دفتر فنی", "سروش", "اصفهان", "جابر انصاری"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}