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
import {
  Search,
  CreditCard,
  ClipboardCheck,
  KeyRound,
  Ban,
  Clock3,
  CalendarDays,
  Wallet,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  const accommodations = [
  {
    title: "Standard Bedspaces",
    image:
      "/properties/Al Nahda 2 (600 - AED 750)/Photo 1_.jpg",
  },
  {
    title: "Family Rooms",
    image:
      "/properties/Al Qusais 1 (AED 2000 -3200)/Photo 3.jpg",
  },
  {
    title: "Privacy Cabins",
    image:
      "/properties/Al Nahda 2 (900 - AED 950)/Photo 1.jpg",
  },
  {
    title: "Executive Spaces",
    image:
      "/properties/ExecutiveSpace.jpg",
  },
  {
    title: "Gender Specific Housing",
    image:
      "/properties/GenderSpecific.jpg",
  },
];

  const amenities = [
    {
      icon: <Wifi className="w-7 h-7" />,
      title: "Ultra-Fast WiFi",
      desc: "500 to 700 Mbps speed for seamless streaming and remote work.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Utilities Included",
      desc: "Water, electricity, and gas are fully covered in your rent.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Housekeeping",
      desc: "Cleaning services provided 3 times in a Week.",
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
      <section className="relative overflow-hidden bg-[#eef8f7] px-6 lg:px-20 py-12">
  
  <div className="absolute top-10 left-10 w-72 h-72 bg-[#11b5ae]/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#c8a55a]/10 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

    {/* LEFT CONTENT */}
    <div>

      <span className="inline-block bg-white text-[#11b5ae] px-4 py-2 rounded-full font-semibold shadow-sm mb-6">
        Premium Shared Accommodation
      </span>

      <h1 className="text-4xl lg:text-6xl font-black leading-tight text-[#0d0d3f]">
        Live Better.
        <br />
        Stay Connected.
      </h1>

      <p className="mt-8 text-xl text-[#5b6475] leading-relaxed">
        Fully Furnished Shared Accommodations for Families, Bachelors, Couples, Students and Professionals. Experience Premium Comfort without the Premium Price Tag.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">

        <Link href="/properties">
          <button className="bg-[#11b5ae] hover:bg-[#0f9d97] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
            View Properties
          </button>
        </Link>

        <Link href="/contact">
          <button className="border border-[#11b5ae] text-[#11b5ae] hover:bg-[#11b5ae] hover:text-white px-8 py-4 rounded-full font-semibold transition">
            Contact Us
          </button>
        </Link>

      </div>
      

    </div>

    {/* RIGHT COLLAGE */}
    <div className="hidden lg:grid grid-cols-2 gap-4 max-w-xl ml-auto">

  <div className="space-y-4">
    <img
      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
      alt="Bedroom"
      className="h-64 w-full object-cover rounded-[32px] shadow-xl"
    />

    <img
      src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
      alt="Living Room"
      className="h-44 w-full object-cover rounded-[32px] shadow-xl"
    />
  </div>

  <div className="pt-12">
    <img
      src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
      alt="Kitchen"
      className="h-[420px] w-full object-cover rounded-[32px] shadow-xl"
    />
  </div>

</div>

  </div>
</section>
      {/* ACCOMMODATION TYPES */}
      <section
        id="properties"
        className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 bg-[#f5fbfb]"
      >

        <div className="bg-white border border-[#dbecec] rounded-2xl shadow-sm px-4 sm:px-6 py-4 sm:py-5 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0d0d3f]">
  Accommodation Types
</h2>


        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">

          {accommodations.map((item, index) => (

            <div
  key={index}
  className="
    group
    bg-white
    border border-[#dbecec]
    rounded-[24px]
    p-4 sm:p-5
    shadow-sm
    hover:shadow-2xl
    hover:-translate-y-3
    hover:border-[#11b5ae]
    transition-all
    duration-300
  "
>

              <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] overflow-hidden rounded-xl">
                <Image
  src={item.image}
  alt={item.title}
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-110"
/>
              </div>

             
<h3 className="
text-lg
md:text-xl
font-black
text-[#0d0d3f]
text-center
transition-colors
duration-300
group-hover:text-[#11b5ae]
">
  {item.title}
</h3>



            </div>

          ))}

        </div>

      </section>

      {/* AMENITIES */}
      <section
        id="amenities"
        className="px-4 sm:px-8 lg:px-16 py-16 sm:py-24 bg-[#eef8f7]"
      >

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-[#0d0d3f]">
          What's Included
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#5b6475] max-w-4xl mb-12 sm:mb-20 leading-relaxed">
          Experience premium living with all essential services and
          utilities seamlessly integrated into your monthly rent.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-14">

          {amenities.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-[#dbecec] rounded-3xl p-6 sm:p-8 shadow-sm"
            >

              <div className="bg-[#e8f8f7] w-16 sm:w-20 h-16 sm:h-20 rounded-2xl flex items-center justify-center text-[#11b5ae] mb-6 sm:mb-8">
                {item.icon}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#0d0d3f]">
                {item.title}
              </h3>

              <p className="text-[#5b6475] text-sm sm:text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>
      {/* HOW IT WORKS */}
<section className="bg-white py-8 px-6 sm:px-8 lg:px-16">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-black text-center text-[#0d0d3f] mb-3">
      Move In <span className="text-[#11b5ae]">Right Away!</span>
    </h2>

    <p className="text-center text-[#5b6475] text-lg mb-10">
      Four simple steps to your new home. No brokers, no hassle.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {[
        {
          icon: <Search className="w-6 h-6" />,
          title: "Browse & Choose",
          desc: "Explore our properties and find your perfect space",
        },
        {
          icon: <CreditCard className="w-6 h-6" />,
          title: "Book Online",
          desc: "Reserve instantly with refundable deposit",
        },
        {
          icon: <ClipboardCheck className="w-6 h-6" />,
          title: "Quick Verification",
          desc: "Passport or Emirates ID verification",
        },
        {
          icon: <KeyRound className="w-6 h-6" />,
          title: "Move In Today",
          desc: "Get your keys and settle in immediately",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="text-center p-4 rounded-2xl hover:bg-[#eef8f7] transition-all duration-300"
        >

          <div className="w-16 h-16 mx-auto rounded-full bg-[#eef8f7] flex items-center justify-center text-[#11b5ae] shadow-sm mb-3">
            {step.icon}
          </div>

          <div className="bg-[#11b5ae] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center mx-auto mb-3">
            {String(index + 1).padStart(2, "0")}
          </div>

          <h3 className="text-lg font-bold text-[#0d0d3f] mb-2">
            {step.title}
          </h3>

          <p className="text-sm text-[#5b6475] leading-relaxed">
            {step.desc}
          </p>

        </div>
      ))}

    </div>



    {/* Benefits */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

      {[
        {
          icon: <Ban className="w-6 h-6" />,
          title: "No Brokers",
          desc: "Direct booking",
        },
        {
          icon: <Clock3 className="w-6 h-6" />,
          title: "No Lock-in",
          desc: "Month to month",
        },
        {
          icon: <CalendarDays className="w-6 h-6" />,
          title: "15 Days Notice",
          desc: "Flexible exit",
        },
        {
          icon: <Wallet className="w-6 h-6" />,
          title: "Refundable",
          desc: "100% deposit back",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white border border-[#dbecec] rounded-3xl p-6 text-center shadow-sm"
        >
          <div className="w-14 h-14 rounded-full bg-[#eef8f7] text-[#11b5ae] flex items-center justify-center mx-auto mb-4">
            {item.icon}
          </div>

          <h4 className="font-bold text-[#0d0d3f]">
            {item.title}
          </h4>

          <p className="text-sm text-[#5b6475] mt-2">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>

</section>    
      <Footer />
    </main>
  );
}
