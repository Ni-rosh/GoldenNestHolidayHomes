"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MapPin,
  Wifi,
  Sparkles,
  Heart,
  Users,
  Venus,
  Mars,
  GraduationCap,
  Home,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  
  const locations = [
    "All",
    "Al Nahda 1",
    "Al Nahda 2",
    "Al Qusais 1",
    "Al Qusais 2",
    "Al Mamzer",
    "Al Karama",
    "Burdubai",
  ];

  const categories = [
    "All",
    "Family Rooms",
    "Bachelors Bedspace",
    "Ladies Bedspace",
    "Studio",
  ];

  const [selectedLocation, setSelectedLocation] =
    useState("All");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedGender, setSelectedGender] =
    useState("All");

  const filteredProperties = properties.filter((property) => {
    const locationMatch =
      selectedLocation === "All" ||
      property.location === selectedLocation;

    const categoryMatch =
      selectedCategory === "All" ||
      property.category === selectedCategory;

    const genderMatch =
      selectedGender === "All" ||
      property.gender === selectedGender;

    return (
      locationMatch &&
      categoryMatch &&
      genderMatch
    );
  });

  return (
    <main className="bg-[#f5fbfb] min-h-screen">   
      <Header />
      {/* HERO */}
      <section className="bg-[#eef8f7] py-10 px-6 text-center">
        <div className="inline-block bg-[#dff5f3] text-[#11b5ae] px-5 py-2 rounded-full text-sm font-semibold mb-6">
          Premium Holiday Homes
        </div>

        <h1 className="text-3xl lg:text-5xl font-black text-[#0d0d3f] leading-tight max-w-5xl mx-auto">
          Find Your Perfect Space in Dubai
        </h1>

        <p className="text-gray-600 text-lg mt-5">
          Browse premium accommodations across Dubai & Sharjah
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <div className="bg-white px-8 py-5 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-black text-[#11b5ae]">
              7
            </h2>
            <p className="text-gray-500 text-sm">
              Locations
            </p>
          </div>

          <div className="bg-white px-8 py-5 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-black text-[#11b5ae]">
              1000+
            </h2>
            <p className="text-gray-500 text-sm">
              Happy Residents
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION FILTER */}
      <section className="bg-white border-y px-4 lg:px-10 py-5">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {locations.map((location, index) => (
  <button
    key={index}
    onClick={() =>
      setSelectedLocation(location)
    }
    className={`whitespace-nowrap px-5 py-3 rounded-xl text-sm font-medium transition flex items-center gap-2 ${
      selectedLocation === location
        ? "bg-[#11b5ae] text-white"
        : "bg-[#f1f1f1] text-gray-700"
    }`}
  >
    <MapPin className="w-4 h-4" />
    {location}
  </button>
))}        
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="bg-white px-4 lg:px-10 py-4 border-b border-[#dbecec]">
        <div className="flex flex-wrap gap-4 items-start">

          {/* LEFT ICON FILTERS */}
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: "All",
                icon: <Users className="w-5 h-5" />,
              },
              {
                label: "Male",
                icon: <Mars className="w-5 h-5" />,
              },
              {
                label: "Female",
                icon: <Venus className="w-5 h-5" />,
              },
              {
                label: "Couple",
                icon: <Users className="w-5 h-5" />,
              },
              {
                label: "Family",
                icon: <Home className="w-5 h-5" />,
              },
              {
                label: "Student",
                icon: (
                  <GraduationCap className="w-5 h-5" />
                ),
              },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedGender(item.label)
                }
                className={`rounded-2xl p-3 flex flex-col items-center justify-center w-[75px] h-[75px] transition ${
                  selectedGender === item.label
                    ? "bg-[#11b5ae] text-white"
                    : "bg-[#f3f3f3] text-gray-700"
                }`}
              >
                {item.icon}

                <p className="text-sm mt-2 font-medium">
                  {item.label}
                </p>
              </button>
            ))}
          </div>

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap gap-3 flex-1">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`whitespace-nowrap px-5 py-3 rounded-full text-sm font-medium transition ${
                  selectedCategory === category
                    ? "bg-[#11b5ae] text-white"
                    : "bg-[#f1f1f1] text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY COUNT */}
      <div className="px-6 lg:px-10 py-3">
        <h2 className="text-xl font-semibold text-gray-700">
          Showing {filteredProperties.length} properties
        </h2>
      </div>

      {/* PROPERTY GRID */}
      <section className="px-6 lg:px-10 pb-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition opacity-100"
            >
              {/* IMAGE */}
              <div className="relative h-[210px]">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-xl text-[#009688] font-bold shadow-sm text-sm">
                  {property.price}
                </div>

                <button className="absolute top-4 left-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                  <Heart className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-bold leading-snug text-gray-900">
                  {property.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-700 mt-3">
                  <MapPin className="w-4 h-4" />
                  <p className="text-sm">
                    {property.location}
                  </p>
                </div>

                <p className="text-[#11b5ae] font-medium mt-3 text-sm">
                  {property.category}
                </p>

                {/* FEATURES */}
                <div className="flex flex-nowrap items-center gap-2 mt-5 overflow-hidden">

  <div className="bg-[#f4f4f4] shrink-0 text-gray-700 px-3 py-2 rounded-full text-xs flex items-center gap-1">
    <Wifi className="w-3 h-3" />
    WiFi
  </div>

  <div className="bg-[#f4f4f4] shrink-0 text-gray-700 px-3 py-2 rounded-full text-xs flex items-center gap-1">
    Drinking Water
  </div>

  <div className="bg-[#f4f4f4] shrink-0 text-gray-700 px-3 py-2 rounded-full text-xs flex items-center gap-1">
    <Sparkles className="w-3 h-3" />
    Cleaning
  </div>

  <div className="shrink-0 text-[#11b5ae] text-xs font-medium">
    + More
  </div>

</div>

{/* BUTTON */}
<Link href={`/properties/${property.id}`}>
  <button className="w-full bg-[#11b5ae] hover:bg-[#0f9d97] text-white py-3 rounded-2xl font-semibold mt-6 transition">
    View Details
  </button>
</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
