"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
  ArrowUpRight,
  ArrowDownRight,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
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
    "Al Ghubaiba",
    "Bur Dubai",
    "Al Nahda Sharjah",
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

  const [sortOrder, setSortOrder] =
  useState<"low" | "high">("low");

  const [showSavedOnly, setShowSavedOnly] =
  useState(false);

  const [savedProperties, setSavedProperties] =
  useState<string[]>([]);

  const [carouselIndex, setCarouselIndex] = useState<{ [key: string]: number }>({});

  // Load saved properties from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedProperties');
    if (saved) {
      try {
        setSavedProperties(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load saved properties:', error);
      }
    }
  }, []);

  // Save to localStorage whenever savedProperties changes
  useEffect(() => {
    localStorage.setItem('savedProperties', JSON.stringify(savedProperties));
  }, [savedProperties]);

  let filteredProperties = properties.filter(
  (property) => {
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
  }
);

if (showSavedOnly) {
  filteredProperties = filteredProperties.filter(
    (property) =>
      savedProperties.includes(property.id)
  );
}

filteredProperties = filteredProperties.sort(
  (a, b) => {
    const priceA = Number(
      String(a.price).replace(/[^\d]/g, "")
    );

    const priceB = Number(
      String(b.price).replace(/[^\d]/g, "")
    );

    return sortOrder === "low"
      ? priceA - priceB
      : priceB - priceA;
  }
);

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
          Browse Premium Accommodations across Dubai & Sharjah
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <div className="bg-white px-8 py-5 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-black text-[#11b5ae]">
              9
            </h2>
            <p className="text-gray-500 text-sm">
              Locations
            </p>
          </div>

          <div className="bg-white px-8 py-5 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-black text-[#11b5ae]">
              2246+
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
  <div className="flex flex-col xl:flex-row gap-6">

    {/* LEFT SIDE */}
    <div className="flex flex-col lg:flex-row gap-5 flex-1">

      {/* GENDER FILTERS */}
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
            icon: <GraduationCap className="w-5 h-5" />,
          },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() =>
              setSelectedGender(item.label)
            }
            className={`rounded-2xl p-3 flex flex-col items-center justify-center w-[65px] h-[65px] lg:w-[75px] lg:h-[75px] transition ${
              selectedGender === item.label
                ? "bg-[#11b5ae] text-white shadow-lg shadow-[#11b5ae]/20"
                : "bg-[#f3f3f3] text-gray-700"
            }`}
          >
            {item.icon}

            <p className="text-xs lg:text-sm mt-2 font-medium">
              {item.label}
            </p>
          </button>
        ))}
      </div>

      {/* CATEGORY CHIPS */}
      <div className="flex flex-wrap gap-3 flex-1">
  {categories.map((category, index) => (
    <button
      key={index}
      onClick={() => setSelectedCategory(category)}
      className={`min-w-[120px] h-[50px] px-4 rounded-xl text-sm font-medium transition flex items-center justify-center text-center ${
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

    {/* RIGHT ACTIONS */}
    <div className="flex items-center gap-4">

      {/* SAVED */}
      <button
  onClick={() =>
    setShowSavedOnly(!showSavedOnly)
  }
   className={`border border-[#dbecec] px-3 text-sm rounded-xl flex items-center gap-3 shadow-sm transition ${
    showSavedOnly
      ? "bg-[#11b5ae] text-white"
       : "bg-white text-gray-700"
  }`}
  //className={`min-w-[110px] h-[42px] px-3 text-sm rounded-xl`}
>
  <Heart
    className={`w-5 h-5 ${
      showSavedOnly
        ? "fill-current"
        : "text-[#11b5ae]"
    }`}
  />

  <span className="font-medium">
    Saved
  </span>
</button>

      {/* SORT */}
      <div className="bg-white border border-[#dbecec] rounded-2xl p-2 shadow-sm flex items-center gap-2">

        <ArrowUpDown  className="w-7 h-7 text-[#11b5ae]" />

        <div className="flex flex-col gap-2">

          <button
            onClick={() =>
              setSortOrder("low")
            }
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
              sortOrder === "low"
                ? "bg-[#11b5ae] text-white"
                : "bg-[#f3f3f3] text-gray-700"
            }`}
          >
            <ArrowUpRight className="w-4 h-4" />
            Low to High
          </button>

          <button
            onClick={() =>
              setSortOrder("high")
            }
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
              sortOrder === "high"
                ? "bg-[#11b5ae] text-white"
                : "bg-[#f3f3f3] text-gray-700"
            }`}
          >
            <ArrowDownRight className="w-4 h-4" />
            High to Low
          </button>

        </div>
      </div>

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
              {/* IMAGE CAROUSEL */}
              <div className="relative h-[210px] group">
                <Image
                  src={property.images[carouselIndex[property.id] || 0]}
                  alt={property.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                {/* PRICE BADGE */}
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-xl text-[#009688] font-bold shadow-sm text-sm z-10">
                  {property.price}
                </div>

                {/* HEART BUTTON */}
                <button
                  onClick={() => {
                    if (
                      savedProperties.includes(property.id)
                    ) {
                      setSavedProperties(
                        savedProperties.filter(
                          (id) => id !== property.id
                        )
                      );
                    } else {
                      setSavedProperties([
                        ...savedProperties,
                        property.id,
                      ]);
                    }
                  }}
                  className="absolute top-4 left-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10 hover:bg-gray-100 transition"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      savedProperties.includes(property.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-500"
                    }`}
                  />
                </button>

                {/* LEFT ARROW */}
                {property.images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCarouselIndex({
                        ...carouselIndex,
                        [property.id]: (carouselIndex[property.id] || 0) === 0 
                          ? property.images.length - 1 
                          : (carouselIndex[property.id] || 0) - 1
                      });
                    }}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition shadow-md"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* RIGHT ARROW */}
                {property.images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCarouselIndex({
                        ...carouselIndex,
                        [property.id]: (carouselIndex[property.id] || 0) === property.images.length - 1 
                          ? 0 
                          : (carouselIndex[property.id] || 0) + 1
                      });
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition shadow-md"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                {/* THUMBNAIL STRIP */}
                {property.images.length > 1 && (
                  <div className="absolute bottom-2 left-0 right-0 flex gap-1 justify-center px-2 z-10">
                    {property.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          setCarouselIndex({ ...carouselIndex, [property.id]: idx });
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition ${
                          idx === (carouselIndex[property.id] || 0)
                            ? "bg-white w-3"
                            : "bg-white bg-opacity-50 hover:bg-opacity-75"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-bold leading-snug text-gray-900">
                  {property.displayTitle ?? property.title}
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
