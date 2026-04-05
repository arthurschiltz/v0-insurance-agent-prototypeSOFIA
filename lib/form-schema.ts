import { z } from 'zod';

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(
      /^(\+1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
      'Please enter a valid U.S. phone number (e.g., 555-123-4567 or (555) 123-4567)'
    ),
  serviceType: z
    .enum(['auto', 'home', 'life', 'umbrella'], {
      errorMap: () => ({ message: 'Please select a coverage type' }),
    }),
  zipCode: z
    .string()
    .regex(/^\d{5}$/, 'ZIP code must be 5 digits'),
  message: z
    .string()
    .max(500, 'Message must be less than 500 characters')
    .optional()
    .default(''),
});

export const coiFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(
      /^(\+1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
      'Please enter a valid U.S. phone number (e.g., 555-123-4567 or (555) 123-4567)'
    ),
  serviceType: z
    .enum(['auto', 'home', 'life', 'umbrella'], {
      errorMap: () => ({ message: 'Please select a coverage type' }),
    }),
  zipCode: z
    .string()
    .regex(/^\d{5}$/, 'ZIP code must be 5 digits'),
  message: z
    .string()
    .max(500, 'Message must be less than 500 characters')
    .optional()
    .default(''),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type COIFormData = z.infer<typeof coiFormSchema>;
