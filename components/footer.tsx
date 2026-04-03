'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Sofia Ramirez Insurance</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              12+ years of trusted insurance guidance. Personalized quotes and expert recommendations for individuals and families.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#quote-form"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Get a Quote
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/licensing"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Insurance Licensing
                </Link>
              </li>
            </ul>
          </div>

          {/* Coverage Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Coverage Types</h3>
            <ul className="space-y-2 text-gray-400 text-sm space-y-2">
              <li>Auto Insurance</li>
              <li>Home Insurance</li>
              <li>Life Insurance</li>
              <li>Umbrella Insurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <a
                  href="tel:+15551234567"
                  className="hover:text-primary transition-colors"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:sofia@insuranceadvice.local"
                  className="hover:text-primary transition-colors"
                >
                  sofia@insuranceadvice.local
                </a>
              </p>
              <p className="leading-relaxed">
                Available Monday-Friday, 9am-6pm
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sofia Ramirez Insurance. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right">
            Insurance licenses and disclosures available upon request. This site is for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
