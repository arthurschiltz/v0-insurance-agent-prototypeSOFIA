'use client';

import { motion } from 'framer-motion';
import { PricingCard } from './pricing-card';

const pricingTiers = [
  {
    tier: 'Coverage Level',
    name: 'Basic Coverage',
    features: [
      'State minimum liability coverage',
      'Affordable monthly premiums',
      'Responsive customer support',
      'Easy policy management online',
    ],
  },
  {
    tier: 'Coverage Level',
    name: 'Balanced Coverage',
    features: [
      'Enhanced liability protection',
      'Collision & comprehensive coverage',
      'Lower deductible options',
      'Accident forgiveness program',
    ],
    isHighlighted: true,
  },
  {
    tier: 'Coverage Level',
    name: 'Premium Protection',
    features: [
      'Comprehensive coverage options',
      'Umbrella liability protection',
      'Home & auto package discounts',
      'Priority 24/7 support line',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export function PricingTiers() {
  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-2"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Coverage Levels to Fit Your Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right protection level for your situation. Sofia will help you find the perfect balance of coverage and affordability.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <PricingCard
                tier={tier.tier}
                name={tier.name}
                features={tier.features}
                isHighlighted={tier.isHighlighted}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
