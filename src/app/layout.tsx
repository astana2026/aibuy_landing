import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "AIBUY | Агент автодетейлинга на базе ИИ",
  description: "АГЕНТ АВТОДЕТЕЙЛИНГА НА БАЗЕ ИСКУССТВЕННОГО ИНТЕЛЛЕКТА (AI / Нейросети). Удерживайте вечерних клиентов. Исключите пустые слоты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-primary-500/30 selection:text-primary-100`}
      >
        {children}
      </body>
    </html>
  );
}
