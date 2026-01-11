'use client';

import { useActionState } from 'react'; // React 19 hook
import { submitInquiry, type ContactState } from '@/actions/contact';
import { cn } from '@/lib/utils';

const initialState: ContactState = {
    success: false,
    message: '',
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitInquiry, initialState);

    return (
        <form action={formAction} className="space-y-4 max-w-lg mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Name</label>
                    <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                    {state.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                    <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                    {state.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>}
                </div>
            </div>

            <div>
                <label htmlFor="destination" className="block text-sm font-medium mb-1 text-gray-700">Destination of Interest</label>
                <select name="destination" id="destination" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Select a region</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Goa">Goa</option>
                    <option value="Himachal">Himachal Pradesh</option>
                    <option value="Custom">Other / Custom</option>
                </select>
                {state.errors?.destination && <p className="text-red-500 text-xs mt-1">{state.errors.destination[0]}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="travelDates" className="block text-sm font-medium mb-1 text-gray-700">Travel Dates</label>
                    <input type="date" name="travelDates" id="travelDates" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                    <label htmlFor="travelers" className="block text-sm font-medium mb-1 text-gray-700">Travelers</label>
                    <input type="number" name="travelers" id="travelers" min="1" defaultValue="2" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
            </div>

            <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-1 text-gray-700">Estimated Budget (Optional)</label>
                <input type="text" name="budget" id="budget" placeholder="e.g. ₹50,000" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
                {isPending ? 'Sending...' : 'Plan My Trip'}
            </button>

            {state.success && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm text-center">
                    {state.message}
                </div>
            )}
        </form>
    );
}
