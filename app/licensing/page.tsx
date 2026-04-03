import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Insurance Licensing - Sofia Ramirez Insurance',
  description: 'Insurance licensing and regulatory information.',
};

export default function LicensingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Insurance Licensing & Disclosures</h1>
            <p className="text-gray-600">Regulatory information and licensing details</p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Licensing Information</h2>
              <p>
                Sofia Ramirez is a licensed insurance agent authorized to provide insurance quotes and recommendations. All insurance products are provided through licensed insurance carriers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Regulatory Compliance</h2>
              <p>
                Sofia Ramirez Insurance operates in compliance with all federal and state insurance regulations and requirements. Our services are provided in accordance with applicable insurance codes and regulations.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Important Disclosures</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Quote Validity:</strong> Insurance quotes are valid for 30 days from the date of issuance unless otherwise stated by the insurance carrier.
                </li>
                <li>
                  <strong>Non-Binding Quotes:</strong> All quotes provided are estimates and non-binding until a policy is formally issued by the insurance carrier.
                </li>
                <li>
                  <strong>Coverage Details:</strong> Final policy terms, conditions, exclusions, and coverage limits will be detailed in your official policy documents.
                </li>
                <li>
                  <strong>Underwriting:</strong> Final approval of any insurance policy is subject to underwriting and carrier approval.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Insurance Carriers</h2>
              <p>
                Sofia Ramirez represents multiple insurance carriers to provide you with the best coverage options and rates. All carriers are licensed and financially stable.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">Complaint & Resolution</h2>
              <p>
                If you have a complaint regarding your insurance service or quote, please contact Sofia directly at sofia@insuranceadvice.local or (555) 123-4567. We are committed to resolving any concerns promptly.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">State Insurance Department</h2>
              <p>
                For additional information about insurance regulations or to file a complaint with your state insurance department, please visit your state's official insurance regulatory website.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
