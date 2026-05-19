"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  Wifi,
  Wrench,
  Sparkles,
  Zap,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  const accommodations = [
    {
      title: "Standard Bedspaces",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Privacy Cabins",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Executive Spaces",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Gender-specific Housing",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const amenities = [
    {
      icon: <Wifi className="w-7 h-7" />,
      title: "Ultra-Fast WiFi",
      desc: "1000 Mbps speed for seamless streaming and remote work.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Utilities Included",
      desc: "Water, electricity, and gas are fully covered in your rent.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Housekeeping",
      desc: "Professional cleaning services provided multiple times a week.",
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: "Maintenance Support",
      desc: "24/7 assistance for repairs and maintenance needs.",
    },
  ];

  return (
    <main className="bg-[#f5fbfb] text-black">
      <Header />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-[#eef8f7] px-6 py-20">

        {/* LEFT */}
        {/* LEFT */}
<div className="max-w-6xl mx-auto text-center flex flex-col items-center">

  <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0d0d3f] max-w-5xl">
    Affordable & Comfortable Living in Dubai & Sharjah
  </h1>

  <p className="mt-10 text-xl text-[#5b6475] max-w-3xl leading-relaxed">
    Fully furnished shared accommodations for families,
    bachelors, and professionals. Experience premium
    comfort without the premium price tag.
  </p>

  <div className="flex flex-wrap items-center justify-center gap-6 mt-14">

    <Link href="/properties">
      <button className="bg-[#11b5ae] hover:bg-[#0f9d97] text-white px-10 py-5 rounded-[30px] text-lg font-semibold transition shadow-sm min-w-[220px]">
        VIEW PROPERTIES
      </button>
    </Link>

    <Link href="/contact">
      <button className="border border-[#11b5ae] text-[#11b5ae] hover:bg-[#11b5ae] hover:text-white px-10 py-5 rounded-[30px] text-lg font-semibold transition min-w-[220px]">
        CONTACT US
      </button>
    </Link>

    <a
      href="https://wa.me/971501234567"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-[30px] text-lg font-semibold transition shadow-sm min-w-[220px] flex items-center justify-center gap-3">
        <MessageCircle className="w-6 h-6" />
        WHATSAPP
      </button>
    </a>

  </div>

</div>

        

        {/* RIGHT IMAGE */}
        
      </section>

      {/* ACCOMMODATION TYPES */}
      <section
        id="properties"
        className="px-8 lg:px-16 py-16 bg-[#f5fbfb]"
      >

        <div className="bg-white border border-[#dbecec] rounded-2xl shadow-sm px-6 py-5 mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-[#0d0d3f]">
            Accommodation Types
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {accommodations.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-[#dbecec] rounded-[30px] p-8 hover:-translate-y-2 transition duration-300 shadow-sm"
            >

              <div className="relative w-full h-[320px] overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-black text-[#0d0d3f] leading-tight mt-8">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* AMENITIES */}
      <section
        id="amenities"
        className="px-8 lg:px-16 py-24 bg-[#eef8f7]"
      >

        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-[#0d0d3f]">
          What’s Included
        </h2>

        <p className="text-xl text-[#5b6475] max-w-4xl mb-20 leading-relaxed">
          Experience premium living with all essential services and
          utilities seamlessly integrated into your monthly rent.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {amenities.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-[#dbecec] rounded-3xl p-8 shadow-sm"
            >

              <div className="bg-[#e8f8f7] w-20 h-20 rounded-2xl flex items-center justify-center text-[#11b5ae] mb-8">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#0d0d3f]">
                {item.title}
              </h3>

              <p className="text-[#5b6475] text-lg leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </main>
  );
}