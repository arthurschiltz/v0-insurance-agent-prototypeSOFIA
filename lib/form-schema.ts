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
  businessName: z
    .string()
    .min(2, 'Business name must be at least 2 characters')
    .max(100, 'Business name must be less than 100 characters'),
  certificateHolderName: z
    .string()
    .min(2, 'Certificate holder name must be at least 2 characters')
    .max(100, 'Certificate holder name must be less than 100 characters'),
  certificateHolderAddress: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(200, 'Address must be less than 200 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type COIFormData = z.infer<typeof coiFormSchema>;
