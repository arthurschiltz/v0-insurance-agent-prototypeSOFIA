import { Hero } from '@/components/hero';
import { QuoteForm } from '@/components/quote-form';
import { COIForm } from '@/components/coi-form';
import { Testimonials } from '@/components/testimonials';
import { PricingTiers } from '@/components/pricing-tiers';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <QuoteForm />
      <COIForm />
      <Testimonials />
      <PricingTiers />
      <Footer />
    </main>
  );
}
