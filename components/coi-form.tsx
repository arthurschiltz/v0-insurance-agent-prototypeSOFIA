'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { coiFormSchema, COIFormData } from '@/lib/form-schema';
import { saveCOI } from '@/lib/form-utils';

export function COIForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<COIFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<COIFormData>({
    resolver: zodResolver(coiFormSchema),
  });

  const onSubmit = async (data: COIFormData) => {
    try {
      // Save to localStorage
      saveCOI(data);

      // Show success state
      setSubmittedData(data);
      setSubmitted(true);

      // Toast notification
      toast.success('Certificate of Insurance request received! We will contact you soon.');

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
      <section className="py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-background">
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
                Your Certificate of Insurance request has been received.
              </p>
            </div>

            <div className="bg-gray-50 rounded-md p-6 space-y-3 text-left">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Business Name:</span>{' '}
                {submittedData.businessName}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Certificate Holder Name:</span>{' '}
                {submittedData.certificateHolderName}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Certificate Holder Address:</span>{' '}
                {submittedData.certificateHolderAddress}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Email:</span>{' '}
                {submittedData.email}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                Jose will process your Certificate of Insurance request and contact you within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-sm transition-colors duration-200"
              >
                Submit Another Request
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-background" id="coi-form">
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
              Request a Certificate of Insurance
            </h2>
            <p className="text-lg text-gray-600">
              Need a Certificate of Insurance? Fill out the form below and we&apos;ll prepare one for you.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card rounded-lg shadow-card p-6 md:p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Name */}
              <div className="md:col-span-1">
                <label
                  htmlFor="coi-businessName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Your Name / Business Name *
                </label>
                <input
                  {...register('businessName')}
                  type="text"
                  id="coi-businessName"
                  placeholder="John Doe or Acme Corp"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {errors.businessName && (
                  <p className="text-error text-sm mt-1">{errors.businessName.message}</p>
                )}
              </div>

              {/* Certificate Holder Name */}
              <div className="md:col-span-1">
                <label
                  htmlFor="coi-certificateHolderName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Certificate Holder Name *
                </label>
                <input
                  {...register('certificateHolderName')}
                  type="text"
                  id="coi-certificateHolderName"
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {errors.certificateHolderName && (
                  <p className="text-error text-sm mt-1">{errors.certificateHolderName.message}</p>
                )}
              </div>

              {/* Certificate Holder Address */}
              <div className="md:col-span-2">
                <label
                  htmlFor="coi-certificateHolderAddress"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Certificate Holder Address *
                </label>
                <input
                  {...register('certificateHolderAddress')}
                  type="text"
                  id="coi-certificateHolderAddress"
                  placeholder="123 Main St, City, State 12345"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {errors.certificateHolderAddress && (
                  <p className="text-error text-sm mt-1">{errors.certificateHolderAddress.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label
                  htmlFor="coi-email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email to Send the COI *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="coi-email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-sm transition-colors duration-200"
            >
              {isSubmitting ? 'Submitting...' : 'Request Certificate'}
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
