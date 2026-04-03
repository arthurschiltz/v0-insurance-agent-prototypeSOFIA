import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Terms of Service - Sofia Ramirez Insurance',
  description: 'Terms of service for Sofia Ramirez Insurance.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of Sofia Ramirez Insurance&apos;s website and services. By accessing or using this site, you agree to be bound by these Terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Sofia Ramirez Insurance&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software on the site</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Quote Accuracy</h2>
              <p>
                Insurance quotes provided through our website are estimates based on information you provide. Actual quotes may vary based on additional underwriting requirements, policy details, and carrier guidelines. Sofia will contact you to confirm all details before providing a final quote.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
              <p>
                Sofia Ramirez Insurance shall not be liable for any damages arising out of or related to your use of this website or the quotes provided, including but not limited to indirect, incidental, special, or consequential damages.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Modifications</h2>
              <p>
                Sofia Ramirez Insurance may revise these Terms at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with applicable laws and regulations.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
