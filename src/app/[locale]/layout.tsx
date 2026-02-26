import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "AIBUY | Агент автодетейлинга на базе ИИ",
  description: "АГЕНТ АВТОДЕТЕЙЛИНГА НА БАЗЕ ИСКУССТВЕННОГО ИНТЕЛЛЕКТА (AI / Нейросети). Удерживайте вечерних клиентов. Исключите пустые слоты.",
};

export default async function RootLayout(props: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { children } = props;
  const { locale } = await props.params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-primary-500/30 selection:text-primary-100`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
