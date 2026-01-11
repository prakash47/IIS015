"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInUp, TextReveal, ParallaxImage, GlowCard } from "@/components/animations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/hero.png"
            alt="Beautiful India Landscape"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 z-10"></div>

        <div className="container mx-auto px-4 z-20 text-center text-white">
          <div className="mb-6">
            <TextReveal text="Discover the Soul of India" className="text-5xl md:text-8xl font-black tracking-tighter" />
          </div>
          <FadeInUp delay={0.5}>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-50 font-light leading-relaxed">
              Curated journeys. Authentic experiences. Memories that last a lifetime.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-amber-500 text-blue-900 hover:bg-amber-400 font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_rgba(245,158,11,0.8)]">
              Plan Your Trip
            </Link>
            <Link href="/packages" className="bg-white/10 border border-white/30 text-white hover:bg-white/20 font-bold py-4 px-10 rounded-full transition-all hover:scale-105 backdrop-blur-md">
              View Packages
            </Link>
          </FadeInUp>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/about-luxury.png" alt="Luxury Travel" fill className="object-cover" />
            </div>
            <div>
              <FadeInUp>
                <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">The Bharat Yatra Difference</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Travel Reimagined.</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We don't just book hotels; we craft narratives. Every journey is a story waiting to be written, involving local artisans, hidden gems, and the unparalleled hospitality of India.
                </p>
                <ul className="space-y-4 mb-8">
                  {["Personalized Concierge", "Handpicked Heritage Stays", "Exclusive Local Access"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/about" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors inline-flex items-center gap-2 group">
                  Read Our Story <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Preview */}
      <section className="py-24 bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Trending Destinations</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Explore our most requested locations for the upcoming season.</p>
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0.2}>
              <GlowCard className="h-full">
                <div className="h-80 relative">
                  <Image src="/images/rajasthan.png" alt="Rajasthan" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-2xl font-bold text-white">Rajasthan</h3>
                    <p className="text-gray-300 text-sm">Land of Kings</p>
                  </div>
                </div>
              </GlowCard>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <GlowCard className="h-full">
                <div className="h-80 relative">
                  <Image src="/images/kerala.png" alt="Kerala" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-2xl font-bold text-white">Kerala</h3>
                    <p className="text-gray-300 text-sm">God's Own Country</p>
                  </div>
                </div>
              </GlowCard>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <GlowCard className="h-full">
                <div className="h-80 relative">
                  <Image src="/images/ladakh.png" alt="Ladakh" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-2xl font-bold text-white">Ladakh</h3>
                    <p className="text-gray-300 text-sm">The High Passes</p>
                  </div>
                </div>
              </GlowCard>
            </FadeInUp>
          </div>

          <div className="text-center mt-12">
            <Link href="/destinations" className="inline-block border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works (Process) */}
      <section className="py-24 bg-indigo-50">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">How We Plan Your Trip</h2>
          </FadeInUp>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Consult", desc: "We discuss your interests, budget, and style." },
                { step: "02", title: "Design", desc: "We craft a preliminary itinerary for review." },
                { step: "03", title: "Refine", desc: "we tweak details until it's perfect." },
                { step: "04", title: "Book", desc: "We handle all logistics. You just pack." }
              ].map((item, index) => (
                <FadeInUp key={index} delay={index * 0.2} className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-100 text-center relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6 shadow-indigo-200 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2 block">Travel Smart</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Expert Tips for India</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl">👗</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Dress Modestly</h4>
                    <p className="text-gray-600 text-sm">Especially when visiting temples. Cover shoulders and knees.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">💧</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Stay Hydrated</h4>
                    <p className="text-gray-600 text-sm">Always drink bottled or filtered water.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Bargaining</h4>
                    <p className="text-gray-600 text-sm">It's part of the culture in local markets. Do it with a smile.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/varanasi.png" alt="Travel Tips" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <ParallaxImage src="/images/hero.png" alt="Background" className="absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Traveler Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <FadeInUp key={i} delay={i * 0.2} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex text-amber-400 mb-4">★★★★★</div>
                <p className="italic mb-6 text-gray-300">"The attention to detail was incredible. Every transfer, every guide, was top notch."</p>
                <div className="font-bold">Trusted Customer</div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
