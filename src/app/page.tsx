import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation (simplified for landing page) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter cursor-pointer">
            AI<span className="text-primary-500">BUY</span>
          </div>
          <button className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            Получить демо
          </button>
        </div>
      </nav>

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTASection />

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} AIBUY. Агент автодетейлинга на базе ИИ.</p>
        </div>
      </footer>
    </main>
  );
}
