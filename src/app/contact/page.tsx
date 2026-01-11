import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Bharat Yatra Co.",
    description: "Plan your custom trip to India. Contact us for a personalized itinerary.",
};

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Custom Trip</h1>
                    <p className="text-gray-600">Tell us a bit about what you're looking for, and we'll craft the perfect itinerary for you. No strings attached.</p>
                </div>
                <ContactForm />
            </div>
        </div>
    );
}
