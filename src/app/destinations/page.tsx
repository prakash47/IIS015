"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInUp, GlowCard } from "@/components/animations";

const destinations = [
    { id: 1, name: "Rajasthan", description: "Land of Kings. Forts, palaces, and vibrant culture.", image: "/images/rajasthan.png", bestTime: "Oct - Mar" },
    { id: 2, name: "Kerala", description: "God's Own Country. Backwaters, tea plantations, and beaches.", image: "/images/kerala.png", bestTime: "Sep - Mar" },
    { id: 3, name: "Goa", description: "Sun, sand, and sea. Portuguese heritage and vibrant nightlife.", image: "/images/goa.png", bestTime: "Nov - Feb" },
    { id: 4, name: "Himachal Pradesh", description: "The beautiful mountain state. Snow, pines, and peace.", image: "/images/himachal.png", bestTime: "Mar - Jun" },
    { id: 5, name: "Varanasi", description: "The spiritual capital of India. Ghats, temples, and Ganga.", image: "/images/varanasi.png", bestTime: "Oct - Mar" },
    { id: 6, name: "Ladakh", description: "Land of High Passes. Monasteries and stark landscapes.", image: "/images/ladakh.png", bestTime: "Jun - Sep" },
];

export default function DestinationsPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="container mx-auto px-4">
                <div className="mb-20 text-center">
                    <FadeInUp>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Destinations</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            Handpicked regions that showcase the diversity and beauty of the subcontinent.
                        </p>
                    </FadeInUp>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <FadeInUp key={dest.id} delay={index * 0.1}>
                            <GlowCard className="h-full flex flex-col">
                                <div className="h-72 relative overflow-hidden">
                                    <Image
                                        src={dest.image}
                                        alt={dest.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        Best: {dest.bestTime}
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{dest.name}</h3>
                                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{dest.description}</p>
                                    <Link href={`/contact?destination=${dest.name}`} className="block w-full text-center border-2 border-gray-900 text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-colors">
                                        Explore
                                    </Link>
                                </div>
                            </GlowCard>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </div>
    );
}
