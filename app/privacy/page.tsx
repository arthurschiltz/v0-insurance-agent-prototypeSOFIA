import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Privacy Policy - Sofia Ramirez Insurance',
  description: 'Our privacy policy and how we protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
              <p>
                Sofia Ramirez Insurance (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
              <p>
                We collect information you provide directly, such as when you fill out a quote form. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>ZIP code and coverage type preferences</li>
                <li>Any additional details you provide in your quote request</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Process your insurance quote request</li>
                <li>Contact you with personalized recommendations</li>
                <li>Improve our services and website</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at sofia@insuranceadvice.local or (555) 123-4567.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-md space-y-1">
                <p>Sofia Ramirez Insurance</p>
                <p>Email: sofia@insuranceadvice.local</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
