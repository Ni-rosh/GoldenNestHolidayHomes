"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Wifi,
  ShieldCheck,
  Wrench,
  Droplets,
  Refrigerator,
  WashingMachine,
  Utensils,
  BedDouble,
  Lock,
  Flame,
  Ban,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function AmenitiesPage() {
  const amenities = [
    {
      title: "High-Speed WiFi",
      desc: "Up to 1000 Mbps internet for seamless work and streaming.",
      icon: Wifi,
    },
    {
      title: "Daily Cleaning",
      desc: "Housekeeping provided 4 days a week for all shared spaces.",
      icon: Sparkles,
    },
    {
      title: "24/7 Maintenance",
      desc: "On-call support available anytime for maintenance issues.",
      icon: Wrench,
    },
    {
      title: "Drinking Water",
      desc: "Clean drinking water included for all residents.",
      icon: Droplets,
    },
    {
      title: "Fully Furnished",
      desc: "Comfortable furnished rooms and shared living spaces.",
      icon: BedDouble,
    },
    {
      title: "Kitchen Appliances",
      desc: "Microwave, stove, refrigerator and cooking essentials included.",
      icon: Refrigerator,
    },
    {
      title: "Laundry Facilities",
      desc: "Automatic washing machines and ironing tables available.",
      icon: WashingMachine,
    },
    {
      title: "Shared Kitchen",
      desc: "Fully equipped kitchens for convenient everyday cooking.",
      icon: Utensils,
    },
  ];

  const safety = [
    "Always keep doors and entrances securely locked.",
    "24-hour CCTV monitoring inside buildings.",
    "No smoking, alcohol, or illegal substances allowed.",
    "No gambling or illegal activities permitted.",
    "Electric stoves and heaters inside rooms are prohibited.",
    "Management is not responsible for personal belongings.",
  ];

  return (
    <div className="bg-[#f8fbfb] min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section className="bg-[#eef8f7]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT */}
          <div>
            <p className="text-[#11b5ae] font-semibold text-sm uppercase tracking-wide mb-4">
              Included Services & Utilities
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-[#0d0d3f] leading-tight">
              Premium Amenities for Comfortable Living
            </h1>

            <p className="text-[#5b6475] text-lg mt-8 leading-8 max-w-xl">
              Enjoy fully furnished living spaces with high-speed WiFi,
              housekeeping, kitchen facilities, laundry access, utilities,
              maintenance support, and more — all included in your stay.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
              alt="Amenities"
              className="rounded-3xl w-full h-[520px] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0d0d3f]">
            Everything Included
          </h2>

          <p className="text-[#5b6475] mt-4 text-lg">
            Designed to make your stay hassle-free and comfortable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 shadow-sm border border-[#edf3f3] hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#eef8f7] flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#11b5ae]" />
                </div>

                <h3 className="text-xl font-semibold text-[#0d0d3f] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#5b6475] leading-7 text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INCLUDED SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#edf3f3]">
          
          <h2 className="text-4xl font-bold text-[#0d0d3f] mb-10">
            What’s Included in Your Rent?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* LEFT */}
            <div className="space-y-6">
              {[
                "Housekeeping provided 4 days a week.",
                "Water, electricity & air conditioning included.",
                "Cooking gas and utility bills covered.",
                "Fully furnished rooms and shared spaces.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#11b5ae] shrink-0 mt-1" />

                  <p className="text-[#5b6475] leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              {[
                "Kitchen appliances and refrigerator provided.",
                "Laundry area with washing machines.",
                "Dedicated cupboards and storage spaces.",
                "24/7 maintenance support and CCTV security.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#11b5ae] shrink-0 mt-1" />

                  <p className="text-[#5b6475] leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY SECTION */}
      <section className="bg-[#eef8f7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0d0d3f]">
              Safety & Security
            </h2>

            <p className="text-[#5b6475] mt-4 text-lg">
              We maintain a secure and respectful co-living environment for all residents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safety.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eef8f7] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-[#11b5ae]" />
                </div>

                <p className="text-[#5b6475] leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY RULES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#edf3f3]">
          
          <h2 className="text-4xl font-bold text-[#0d0d3f] mb-10">
            Community Living Standards
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <Lock className="w-6 h-6 text-[#11b5ae] mt-1 shrink-0" />

                <div>
                  <h3 className="font-semibold text-[#0d0d3f] text-lg mb-2">
                    Respect Shared Spaces
                  </h3>

                  <p className="text-[#5b6475] leading-7">
                    Residents are expected to maintain cleanliness and hygiene in kitchens, rooms, and common areas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Flame className="w-6 h-6 text-[#11b5ae] mt-1 shrink-0" />

                <div>
                  <h3 className="font-semibold text-[#0d0d3f] text-lg mb-2">
                    Responsible Appliance Usage
                  </h3>

                  <p className="text-[#5b6475] leading-7">
                    Electric stoves, heaters, and unsafe appliances inside rooms are prohibited.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Ban className="w-6 h-6 text-[#11b5ae] mt-1 shrink-0" />

                <div>
                  <h3 className="font-semibold text-[#0d0d3f] text-lg mb-2">
                    No Smoking or Illegal Activities
                  </h3>

                  <p className="text-[#5b6475] leading-7">
                    Smoking, alcohol, drugs, gambling, and illegal activities are strictly prohibited.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-[#11b5ae] mt-1 shrink-0" />

                <div>
                  <h3 className="font-semibold text-[#0d0d3f] text-lg mb-2">
                    Secure Living Environment
                  </h3>

                  <p className="text-[#5b6475] leading-7">
                    Residents should ensure all doors and entrances remain securely locked at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto bg-[#eef8f7] rounded-3xl p-14 text-center">
          
          <h2 className="text-5xl font-bold text-[#0d0d3f]">
            Looking for a Comfortable Stay?
          </h2>

          <p className="text-[#5b6475] text-xl mt-6">
            Contact us for real-time availability and bookings.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            
            <a
              href="https://wa.me/971581192956"
              target="_blank"
              className="bg-[#10d463] hover:bg-[#0fc45c] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition"
            >
              Chat on WhatsApp
            </a>

            <a
              href="tel:+971581192956"
              className="bg-[#11b5ae] hover:bg-[#0e9c96] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition"
            >
              Contact Us
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}