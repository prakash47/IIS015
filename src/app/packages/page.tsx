"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInUp, GlowCard } from "@/components/animations";

const packages = [
    {
        id: 1,
        title: "Golden Triangle Tour",
        duration: "6 Days, 5 Nights",
        price: "₹25,000",
        locations: "Delhi • Agra • Jaipur",
        desc: "The classic introduction to India. Witness the majesty of the Taj Mahal, the pink city of Jaipur, and the historic capital Delhi.",
        highlights: ["Sunrise at Taj Mahal", "Amber Fort Elephant Ride", "Old Delhi Rickshaw Tour"],
        image: "/images/package-golden.png"
    },
    {
        id: 2,
        title: "Kerala Backwaters & Hills",
        duration: "7 Days, 6 Nights",
        price: "₹35,000",
        locations: "Munnar • Thekkady • Alleppey",
        desc: "Immerse yourself in nature. Cruise through serene backwaters, walk through misty tea plantations, and spot wildlife.",
        highlights: ["Houseboat Stay", "Tea Museum Visit", "Periyar Jungle Safari"],
        image: "/images/package-kerala.png"
    },
    {
        id: 3,
        title: "Royal Rajasthan Heritage",
        duration: "10 Days, 9 Nights",
        price: "₹55,000",
        locations: "Udaipur • Jodhpur • Jaisalmer • Jaipur",
        desc: "A complete royal experience. Stay in heritage hotels, see the blue city, and camp under stars in the desert.",
        highlights: ["Lake Pichola Boat Ride", "Desert Camel Safari", "Mehrangarh Fort Tour"],
        image: "/images/package-rajasthan.png"
    },
    {
        id: 4,
        title: "Himachal Adventure",
        duration: "6 Days, 5 Nights",
        price: "₹20,000",
        locations: "Manali • Solang • Kasol",
        desc: "For the thrill-seekers. Paragliding, trekking, and relaxation by the river Parvati in the lap of the Himalayas.",
        highlights: ["Solang Valley Paragliding", "Manikaran Hot Springs", "Cafe Hopping in Kasol"],
        image: "/images/package-himachal.png"
    },
];

export default function PackagesPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="container mx-auto px-4">
                <div className="mb-20 text-center">
                    <FadeInUp>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Curated Packages</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            Meticulously viewed itineraries that blend comfort, adventure, and culture.
                        </p>
                    </FadeInUp>
                </div>

                <div className="space-y-12 max-w-5xl mx-auto">
                    {packages.map((pkg, index) => (
                        <FadeInUp key={pkg.id} delay={index * 0.2}>
                            <GlowCard className="flex flex-col md:flex-row overflow-hidden">
                                <div className="w-full md:w-2/5 min-h-[300px] relative group">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <div className="flex-grow p-10 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                            <div>
                                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{pkg.title}</h2>
                                                <p className="text-sm text-indigo-600 font-bold uppercase tracking-wide">{pkg.locations}</p>
                                            </div>
                                            <span className="inline-block bg-indigo-50 text-indigo-700 text-sm px-4 py-1.5 rounded-full font-bold mt-2 md:mt-0">{pkg.duration}</span>
                                        </div>
                                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">{pkg.desc}</p>

                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider text-xs">Highlights</h4>
                                            <ul className="flex flex-wrap gap-2">
                                                {pkg.highlights.map(h => (
                                                    <li key={h} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200 font-medium">{h}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                        <div>
                                            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Starting from</span>
                                            <span className="text-4xl font-black text-gray-900">{pkg.price}</span>
                                        </div>
                                        <Link href="/contact" className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all hover:shadow-lg hover:-translate-y-1">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </GlowCard>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </div>
    );
}
