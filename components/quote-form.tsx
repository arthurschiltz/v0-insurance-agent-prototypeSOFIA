'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { quoteFormSchema, QuoteFormData } from '@/lib/form-schema';
import { saveQuote } from '@/lib/form-utils';

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Save to localStorage
      saveQuote(data);

      // Show success state
      setSubmittedData(data);
      setSubmitted(true);

      // Toast notification
      toast.success('Quote request received! We will contact you soon.');

      // Reset form
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedData(null);
    reset();
  };

  if (submitted && submittedData) {
    return (
      <section className="py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-section">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg shadow-card p-8 md:p-12 text-center space-y-6"
          >
            {/* Success Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}
              className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto"
            >
              <span className="text-white text-3xl font-bold">✓</span>
            </motion.div>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Thank You!
              </h2>
              <p className="text-lg text-gray-600">
                Your quote request has been received.
              </p>
            </div>

            <div className="bg-gray-50 rounded-md p-6 space-y-3 text-left">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Name:</span>{' '}
                {submittedData.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Email:</span>{' '}
                {submittedData.email}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Phone:</span>{' '}
                {submittedData.phone}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Coverage Type:</span>{' '}
                {submittedData.serviceType.charAt(0).toUpperCase() +
                  submittedData.serviceType.slice(1)}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">ZIP Code:</span>{' '}
                {submittedData.zipCode}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                Sofia will review your information and contact you within 24 hours with personalized insurance recommendations.
              </p>
              <button
                onClick={handleReset}
                className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-sm transition-colors duration-200"
              >
                Submit Another Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-section" id="quote-form">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Form Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we&apos;ll get back to you with personalized recommendations.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card rounded-lg shadow-card p-6 md:p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="md:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {errors.name && (
                  <p className="text-error text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="md:col-span-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="md:col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {errors.phone && (
                  <p className="text-error text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Service Type */}
              <div className="md:col-span-1">
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Coverage Type *
                </label>
                <select
                  {...register('serviceType')}
                  id="serviceType"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                >
                  <option value="">Select a coverage type</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="home">Home Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="umbrella">Umbrella Insurance</option>
                </select>
                {errors.serviceType && (
                  <p className="text-error text-sm mt-1">
                    {errors.serviceType.message}
                  </p>
                )}
              </div>

              {/* ZIP Code */}
              <div className="md:col-span-1">
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  ZIP Code *
                </label>
                <input
                  {...register('zipCode')}
                  type="text"
                  id="zipCode"
                  placeholder="12345"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {errors.zipCode && (
                  <p className="text-error text-sm mt-1">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message (Full Width) */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Additional Details (Optional)
              </label>
              <textarea
                {...register('message')}
                id="message"
                placeholder="Tell us anything else we should know..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-error text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-sm transition-colors duration-200"
            >
              {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
            </button>

            <p className="text-xs text-gray-600 text-center">
              Your information is secure. We respect your privacy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
