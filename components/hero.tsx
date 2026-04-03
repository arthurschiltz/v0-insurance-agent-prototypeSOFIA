'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Image
                src="/sofia-portrait.jpg"
                alt="Sofia Ramirez, insurance advisor with 12+ years of experience"
                fill
                className="object-cover rounded-lg shadow-card"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-pretty">
                Get Expert Insurance Advice from Sofia Ramirez
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                12+ years of trusted service providing personalized insurance quotes and guidance for families and businesses in the community.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 flex items-center gap-2">
                <span className="text-primary text-lg">✓</span>
                <span>Fast, free quotes in minutes</span>
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <span className="text-primary text-lg">✓</span>
                <span>Expert personalized recommendations</span>
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <span className="text-primary text-lg">✓</span>
                <span>Local, trusted service you can rely on</span>
              </p>
            </div>

            <a
              href="#quote-form"
              className="w-full md:w-fit bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-sm transition-colors duration-200 text-lg text-center inline-block"
            >
              Get Your Free Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
