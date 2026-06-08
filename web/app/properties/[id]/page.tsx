"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import {
  MapPin,
  Phone,
  MessageCircle,
  Wifi,
  ShieldCheck,
  Refrigerator,
  Wind,
  Microwave,
  WashingMachine,
  Wrench,
  Bed,
  Home,
  Bus,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PropertyDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [property, setProperty] = useState<any>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const found = properties.find((item) => item.id === id);
    setProperty(found);
  }, [id]);

  useEffect(() => {
    // Prevent body scroll when gallery is open
    if (showGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showGallery]);

  if (!property) {
    return (
      <div className="p-10">
        Property not found
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + 1) % property.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + property.images.length) %
        property.images.length
    );
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen">

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-5 py-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#0d0d3f] mb-6">
  {property.displayTitle ?? property.title}
</h1>

        {/* TOP SECTION - LEFT INFO + RIGHT IMAGES GRID */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-5 items-start">

          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">

            <h2 className="text-4xl font-bold text-[#11b5ae] leading-tight">
             {property.price}
            </h2>

            <p className="text-gray-500 mt-2 text-lg">
              / month
            </p>

            {/* TAGS */}
            <div className="flex gap-3 flex-wrap mt-5">

              <div className="bg-[#eafaf8] text-[#11b5ae] px-4 py-2 rounded-xl text-sm font-medium">
                {property.category}
              </div>

              <div className="bg-[#eafaf8] text-[#11b5ae] px-4 py-2 rounded-xl text-sm font-medium">
               {property.gender}
              </div>

            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-6 mt-8 flex-wrap">

  <div className="flex items-center gap-3 text-[#5b6475]">
    <MapPin className="w-5 h-5 text-[#11b5ae]" />
    <span>{property.location}, Dubai</span>
  </div>

  <a
    href={property.map}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-[#11b5ae] text-sm font-medium hover:underline"
  >
    <MapPin className="w-4 h-4" />
    View Location on Map
  </a>

</div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3 mt-8">

              <a
                href="tel:+971581192956"
                className="bg-[#008c8c] hover:bg-[#007070] transition text-white py-3 rounded-2xl font-semibold text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>

              <a
                href="https://wa.me/971581192956"
                target="_blank"
                className="bg-[#25D366] hover:bg-[#1ebe5d] transition text-white py-3 rounded-2xl font-semibold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

            </div>

          </div>

          {/* RIGHT IMAGES - MASONRY GRID */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 auto-rows-max">

            {property.images.map((image: string, index: number) => {
              // First image takes 2x2 space
              if (index === 0) {
                return (
                  <div
                    key={index}
                    className="col-span-2 row-span-2 relative rounded-2xl h-[300px] w-full overflow-hidden cursor-pointer hover:opacity-80 transition group"
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setShowGallery(true);
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                );
              }
              
              // Rest are normal size
              return (
                <div
                  key={index}
                  className="relative rounded-lg h-[140px] w-full overflow-hidden cursor-pointer hover:opacity-80 transition group"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setShowGallery(true);
                  }}
                >
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              );
            })}

          </div>

        </div>

        {/* GALLERY MODAL */}
        {showGallery && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-10 p-2 rounded-full transition z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* MAIN IMAGE */}
            <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
              <Image
                src={property.images[currentImageIndex]}
                alt={`Gallery - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />

              {/* NAVIGATION BUTTONS - MORE VISIBLE */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-3 md:p-4 rounded-full transition shadow-xl z-20"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-3 md:p-4 rounded-full transition shadow-xl z-20"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              {/* IMAGE COUNTER */}
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {currentImageIndex + 1} / {property.images.length}
              </div>

              {/* THUMBNAIL STRIP */}
              <div className="absolute bottom-2 left-0 right-0 flex gap-2 justify-center overflow-x-auto px-4 pb-2 max-h-20">
                {property.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition ${
                      currentImageIndex === index
                        ? "border-white"
                        : "border-gray-600"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABOUT */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

          <h2 className="text-2xl font-bold text-[#0d0d3f] mb-4">
            About Property
          </h2>

          <p className="text-gray-600 leading-7 text-sm">
            Premium fully furnished family accommodation located in Al Qusais 1, Dubai.
            Conveniently located near metro stations, shopping centers, restaurants,
            and business hubs. Designed for comfortable and affordable living with
            modern amenities and a peaceful environment.
          </p>

        </div>

        {/* AMENITIES */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

          <h2 className="text-2xl font-bold text-[#0d0d3f] mb-5">
            Amenities Included
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

 {[
  {
    name: "500-700 Mbps Wi-Fi",
    icon: Wifi,
  },
  {
    name: "Cleaning Service",
    icon: Home,
  },
  {
    name: "Central AC",
    icon: Wind,
  },
  {
    name: "Metro Access",
    icon: MapPin,
  },
  {
    name: "Bus Stop Nearby",
    icon: Bus,
  },
  {
    name: "Washing Machine",
    icon: WashingMachine,
  },
  {
    name: "Refrigerator",
    icon: Refrigerator,
  },
  {
    name: "Gas Supply",
    icon: Home,
  },
  {
    name: "Microwave Oven",
    icon: Microwave,
  },
  {
    name: "CCTV Surveillance",
    icon: ShieldCheck,
  },
  {
    name: "24/7 On Call Support",
    icon: Phone,
  },
  {
    name: "Pest Control",
    icon: ShieldCheck,
  },
  {
    name: "Dry Stand",
    icon: Home,
  },
  {
    name: "Shared Washroom",
    icon: Home,
  },
  {
    name: "Balcony",
    icon: Home,
  },
  {
    name: "Single Bed",
    icon: Bed,
  },
  {
    name: "Shoe Rack",
    icon: Home,
  },
  {
    name: "Regular Maintenance",
    icon: Wrench,
  },
  {
    name: "Shared Room",
    icon: Home,
  },
].map((item) => {
  const Icon = item.icon;

  return (
    <div
      key={item.name}
      className="
border border-gray-200
rounded-xl
p-4
flex items-center gap-3
transition-all duration-300
hover:border-[#11b5ae]
hover:bg-[#f0fdfc]
hover:shadow-md
hover:-translate-y-1
cursor-pointer
"
    >
      <Icon className="w-5 h-5 text-[#11b5ae]" />

      <span className="text-sm text-gray-700 font-medium leading-5">
        {item.name}
      </span>
    </div>
  );
})}

          </div>

        </div>

        {/* NEARBY */}
<div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

  <h2 className="text-2xl font-bold text-[#0d0d3f] mb-5">
    What’s Nearby
  </h2>
  <p className="text-gray-600 mb-8 max-w-3xl">
  Explore nearby attractions, amenities, and services within walking distance or a short commute.
</p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

    {property.nearby.map((place: string) => (
      <div
        key={place}
        className="
border border-gray-200
rounded-xl
p-4
transition-all duration-300
hover:border-[#11b5ae]
hover:bg-[#f0fdfc]
hover:shadow-md
hover:-translate-y-1
cursor-pointer
"
      >
        <MapPin className="w-4 h-4 text-[#11b5ae]" />

        <span className="text-sm text-gray-700">
          {place}
        </span>

      </div>
    ))}

  </div>

</div>

        {/* VISITOR POLICY */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

          <h2 className="text-2xl font-bold text-[#0d0d3f] mb-4">
            Visitor Policy
          </h2>

          <div className="space-y-4 text-gray-600 text-sm leading-7">

            <p>
              Guests are strictly NOT allowed at any property.
            </p>

            <p>
              No outside visitors or overnight guests are permitted under any
              circumstances to ensure privacy and security of the community.
            </p>

          </div>

        </div>

        {/* RULES */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

          <h2 className="text-2xl font-bold text-[#0d0d3f] mb-6">
            Rules & Policies
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-600 text-sm leading-7">

            {/* LEFT */}
            <div className="space-y-5">

              <div>
                <h3 className="text-[#11b5ae] font-semibold mb-2">
                  Accommodation & Maintenance
                </h3>

                <ul className="list-disc pl-5 space-y-1">
                  <li>All furnishings are cleaned before move-in.</li>
                  <li>Bedbug treatment after move-in is tenant responsibility.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#11b5ae] font-semibold mb-2">
                  Laundry & Appliances
                </h3>

                <ul className="list-disc pl-5 space-y-1">
                  <li>Check pockets before using washing machines.</li>
                  <li>Damages caused by negligence will be charged.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#11b5ae] font-semibold mb-2">
                  Air Conditioning
                </h3>

                <ul className="list-disc pl-5 space-y-1">
                  <li>Switch off lights and AC when leaving.</li>
                  <li>Misuse may result in additional charges.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#11b5ae] font-semibold mb-2">
                  Noise & Conduct
                </h3>

                <ul className="list-disc pl-5 space-y-1">
                  <li>No loud music or disturbances.</li>
                  <li>Cooking after 11:30 PM is not allowed.</li>
                </ul>
              </div>

            </div>

            {/* RIGHT */}
            <div className="space-y-5">

              <div>
                <h3 className="text-[#11b5ae] font-semibold mb-2">
                  Cleanliness & Hygiene
                </h3>

                <ul className="list-disc pl-5 space-y-1">
                  <li>Keep rooms and common areas clean.</li>
                  <li>Dispose Garbage Properly.</li>
                  <li>Do not leave dirty dishes unattended.</li>
                  <li>Use assigned cupboards only.</li>
                  <li>Mattress damage incurs AED 250 fine.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#11b5ae] font-semibold mb-2">
                  Safety & Security
                </h3>

                <ul className="list-disc pl-5 space-y-1">
                  <li>No smoking, alcohol, or illegal substances.</li>
                  <li>No gambling or illegal activities.</li>
                  <li>Electric stoves inside rooms are prohibited.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#11b5ae] font-semibold mb-2">
                  Guests & Visitors
                </h3>

                <ul className="list-disc pl-5 space-y-1">
                  <li>Visitors only with management approval.</li>
                  <li>No overnight stays for non-registered tenants.</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="bg-[#eafaf8] rounded-2xl p-7 mt-6 text-center">

          <h2 className="text-3xl font-bold text-[#0d0d3f] mb-3">
            Interested in this property?
          </h2>

          <p className="text-gray-600 text-sm mb-7">
            Contact us directly for real-time availability and bookings.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-xl font-bold text-[#0d0d3f] mt-10">
  <span>+971 58 119 2956</span>

  <span>+971 50 182 9564</span>
</div>

<div className="flex flex-wrap justify-center gap-6 mt-10">

          

            <a
              href="https://wa.me/971581192956"
              target="_blank"
              className="bg-[#25D366] hover:bg-[#1ebe5d] transition text-white px-8 py-3 rounded-2xl font-semibold flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+971581192956"
              className="bg-[#008c8c] hover:bg-[#007070] transition text-white px-8 py-3 rounded-2xl font-semibold flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}