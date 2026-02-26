import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import MetricsSection from '@/components/MetricsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Nav');

  return (
    <main className="min-h-screen relative selection:bg-primary-500/30 selection:text-primary-100">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]" />
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent pointer-events-none z-50" />

      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto rounded-2xl bg-black/50 backdrop-blur-xl border border-neutral-800/50 px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="text-white">{t('logo')}</span>
            <div className="w-2 h-2 rounded-full bg-primary-500" />
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <button className="hidden sm:block px-6 py-2.5 bg-white hover:bg-neutral-200 text-black rounded-lg font-medium transition-colors text-sm">
              {t('getDemo')}
            </button>
          </div>
        </div>
      </nav>

      <HeroSection />

      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        <ProblemSection />
      </div>

      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        <SolutionSection />
      </div>

      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        <FeaturesSection />
      </div>

      <MetricsSection />

      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        <HowItWorksSection />
      </div>

      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        <FAQSection />
      </div>

      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-900/50 to-transparent" />
        <CTASection />
      </div>

      <footer className="py-8 bg-black text-center text-neutral-500 text-sm border-t border-neutral-900">
        <p>© {new Date().getFullYear()} AIBUY. Все права защищены.</p>
      </footer>
    </main>
  );
}
