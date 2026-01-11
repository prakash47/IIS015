'use server';

import { z } from 'zod';
import { after } from 'next/server';
// import { Resend } from 'resend'; // Uncomment when API key is available

const ContactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    destination: z.string().min(1, "Please select a destination"),
    travelDates: z.string().min(1, "Travel dates are required"),
    travelers: z.coerce.number().min(1, "At least 1 traveler required"),
    budget: z.string().optional(),
});

export type ContactState = {
    success: boolean;
    message: string;
    errors?: {
        [K in keyof z.infer<typeof ContactSchema>]?: string[];
    };
};

export async function submitInquiry(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const validatedFields = ContactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        destination: formData.get('destination'),
        travelDates: formData.get('travelDates'),
        travelers: formData.get('travelers'),
        budget: formData.get('budget'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Validation failed',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // Simulate non-blocking email sending
    after(async () => {
        console.log('[Background] Sending email via Resend to:', validatedFields.data.email);
        // await resend.emails.send({ ... });
        await new Promise(resolve => setTimeout(resolve, 1000)); // Mock delay
        console.log('[Background] Email sent successfully');
    });

    return {
        success: true,
        message: 'Inquiry received! We will contact you shortly.',
    };
}
