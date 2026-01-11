"use client";

import { FadeInUp, ParallaxImage } from "@/components/animations";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                <ParallaxImage src="/images/about-luxury.png" alt="Luxury Travel" className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div className="container mx-auto px-4 relative z-20 text-center text-white">
                    <FadeInUp>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Our Philosophy</h1>
                        <p className="text-xl max-w-2xl mx-auto text-gray-200 font-light">Crafting journeys that touch the soul, respecting the land, and honoring the culture.</p>
                    </FadeInUp>
                </div>
            </div>

            {/* Story Section */}
            <div className="container mx-auto px-4 max-w-5xl py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <FadeInUp>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">More Than Just Travel</h2>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                Bharat Yatra Co. was born from a desire to show the world the authentic, unscripted India. We move beyond the tourist traps to find the quiet corners, the whispered stories, and the genuine smiles.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We believe luxury isn't just about 5-star hotels; it's about access. It's about a private sunrise boat ride in Varanasi, a dinner with a local family in Jaipur, or a meditation session in a Himalayan monastery.
                            </p>
                        </FadeInUp>
                    </div>
                    <FadeInUp delay={0.2} className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <Image src="/images/about-nature.png" alt="Serene Nature" fill className="object-cover" />
                    </FadeInUp>
                </div>

                {/* Sustainability */}
                <div className="bg-emerald-50 rounded-3xl p-12 mb-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <FadeInUp>
                        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-emerald-900 mb-4">Commitment to Sustainability</h2>
                                <p className="text-emerald-800 text-lg leading-relaxed mb-6">
                                    We are guardians of the destinations we visit. We pledge to:
                                </p>
                                <ul className="space-y-3 text-emerald-700 font-medium">
                                    <li className="flex items-center gap-3">🌱 Support local, eco-friendly businesses.</li>
                                    <li className="flex items-center gap-3">🚫 Eliminate single-use plastics on our tours.</li>
                                    <li className="flex items-center gap-3">🦁 Promote ethical wildlife tourism.</li>
                                </ul>
                            </div>
                            <div className="flex-1 w-full relative h-64 rounded-xl overflow-hidden">
                                <Image src="/images/kerala.png" alt="Nature" fill className="object-cover" />
                            </div>
                        </div>
                    </FadeInUp>
                </div>

                {/* Recognition */}
                <div className="text-center mb-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Awards & Recognition</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="w-32 h-32 relative">
                            <Image src="/images/about-awards.png" alt="Award" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-32 relative">
                            <Image src="/images/about-awards.png" alt="Award" fill className="object-contain" />
                        </div>
                        <div className="w-32 h-32 relative">
                            <Image src="/images/about-awards.png" alt="Award" fill className="object-contain" />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/contact" className="inline-block bg-gray-900 text-white font-bold py-4 px-12 rounded-full hover:bg-blue-600 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform">
                        Begin Your Journey
                    </Link>
                </div>
            </div>
        </div>
    );
}
