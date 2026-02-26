import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['ru', 'kz'];

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || 'ru';
  if (!locales.includes(currentLocale)) notFound();

  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default
  };
});
