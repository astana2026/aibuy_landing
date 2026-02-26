'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { useRouter as useNextRouter, usePathname as useNextPathname } from 'next/navigation';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useNextRouter();
    const pathname = useNextPathname();
    const [isPending, startTransition] = useTransition();

    const toggleLocale = () => {
        const nextLocale = locale === 'ru' ? 'kz' : 'ru';
        // For app router static export without middleware, pathname might include /ru or /kz
        const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);

        startTransition(() => {
            router.replace(newPathname || `/${nextLocale}`);
        });
    };

    return (
        <button
            onClick={toggleLocale}
            disabled={isPending}
            className={`px-3 py-1.5 rounded-lg border border-neutral-800 glass text-xs font-bold transition-colors hover:border-primary-500/50 flex items-center gap-2 ${isPending ? 'opacity-50' : ''}`}
        >
            <span className={locale === 'ru' ? 'text-white' : 'text-neutral-500'}>RU</span>
            <div className="w-px h-3 bg-neutral-800" />
            <span className={locale === 'kz' ? 'text-white' : 'text-neutral-500'}>KZ</span>
        </button>
    );
}
