'use client';

import { motion } from 'framer-motion';
import { TestimonialCard } from './testimonial-card';

const testimonials = [
  {
    name: 'Jennifer Martinez',
    coverage: 'Auto Insurance',
    quote:
      'Sofia helped me save $600 per year on my auto policy while getting better coverage. Her personalized approach really made a difference.',
    initials: 'JM',
  },
  {
    name: 'Robert Chen',
    coverage: 'Home Insurance',
    quote:
      'I was overwhelmed with insurance options until I met Sofia. She explained everything clearly and found me the perfect home policy at a great rate.',
    initials: 'RC',
  },
  {
    name: 'Sarah Williams',
    coverage: 'Life Insurance',
    quote:
      'Sofia took the time to understand my family&apos;s needs and provided life insurance recommendations that give me peace of mind.',
    initials: 'SW',
  },
  {
    name: 'Michael Torres',
    coverage: 'Auto & Home',
    quote:
      'Working with Sofia on multiple policies was seamless. Her bundling recommendations saved my family thousands. Highly recommend!',
    initials: 'MT',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function Testimonials() {
  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-2"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from people Sofia has helped secure the right insurance coverage.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <TestimonialCard
                name={testimonial.name}
                coverage={testimonial.coverage}
                quote={testimonial.quote}
                initials={testimonial.initials}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
