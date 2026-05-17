"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLink = (path: string) => {
    return pathname === path
      ? "text-[#12b7b0] font-semibold"
      : "text-gray-700 hover:text-[#12b7b0] transition";
  };

  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-5 px-6 lg:px-10">

        {/* LEFT SIDE */}
        <Link href="/" className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full border border-[#12b7b0] flex items-center justify-center text-[#12b7b0] font-bold text-lg">
            GN
          </div>

          <div>
            <h1 className="text-xl font-bold text-black leading-none">
              Golden Nest
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Holiday Homes
            </p>
          </div>

        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-12 text-[17px] font-medium">

          <Link
            href="/"
            className={navLink("/")}
          >
            Home
          </Link>

          <Link
            href="/properties"
            className={navLink("/properties")}
          >
            Properties
          </Link>

          <Link
            href="/amenities"
            className={navLink("/amenities")}
          >
            Amenities
          </Link>

          <Link
            href="/contact"
            className={navLink("/contact")}
          >
            Contact Us
          </Link>

        </nav>

        {/* BUTTON */}
        <Link href="/properties">

          <button className="bg-[#12b7b0] hover:bg-[#0ea5a0] text-white px-8 py-3 rounded-full font-semibold transition">

            VIEW PROPERTIES

          </button>

        </Link>
      </div>
    </header>
  );
};

export default Header;