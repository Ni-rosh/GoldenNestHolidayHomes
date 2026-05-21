"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = (path: string) => {
    return pathname === path
      ? "text-[#12b7b0] font-semibold"
      : "text-gray-700 hover:text-[#12b7b0] transition";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm border-b border-gray-100 overflow-hidden">

      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[82px] px-4 md:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 min-w-fit">

          {/* ICON */}
          <Image
            src="/logo.png"
            alt="Golden Nest"
            width={50}
            height={50}
            priority
            className="object-contain md:w-[58px] md:h-[58px]"
          />

          {/* BRAND TEXT */}
          <div className="flex flex-col justify-center">

            <h1
              className="text-[16px] md:text-[20px] tracking-[2px] md:tracking-[4px] text-[#0b3b2e] uppercase leading-none"
              style={{ fontFamily: "serif" }}
            >
              Golden Nest
            </h1>

            <p
              className="text-[8px] md:text-[10px] text-[#c8a55a] uppercase mt-[4px] md:mt-[6px] leading-none text-center tracking-[2px] md:tracking-[4px]"
              style={{ fontFamily: "serif" }}
            >
              Holiday Homes
            </p>
          </div>

        </Link>

        {/* NAVIGATION - DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-[17px] font-medium">

          <Link href="/" className={navLink("/")}>
            Home
          </Link>

          <Link href="/properties" className={navLink("/properties")}>
            Properties
          </Link>

          <Link href="/amenities" className={navLink("/amenities")}>
            Amenities
          </Link>

          <Link href="/contact" className={navLink("/contact")}>
            Contact Us
          </Link>

        </nav>

        {/* BUTTON - DESKTOP */}
        <Link href="/properties" className="hidden md:block">

          <button className="bg-[#12b7b0] hover:bg-[#0ea5a0] text-white px-8 py-3 rounded-full font-semibold transition whitespace-nowrap">

            VIEW PROPERTIES

          </button>

        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={28} className="text-[#0b3b2e]" />
          ) : (
            <Menu size={28} className="text-[#0b3b2e]" />
          )}
        </button>

      </div>

      {/* MOBILE NAVIGATION MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 gap-4">

            <Link 
              href="/" 
              className={`py-2 text-[16px] font-medium ${navLink("/")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link 
              href="/properties" 
              className={`py-2 text-[16px] font-medium ${navLink("/properties")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>

            <Link 
              href="/amenities" 
              className={`py-2 text-[16px] font-medium ${navLink("/amenities")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Amenities
            </Link>

            <Link 
              href="/contact" 
              className={`py-2 text-[16px] font-medium ${navLink("/contact")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Link href="/properties" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-[#12b7b0] hover:bg-[#0ea5a0] text-white px-6 py-3 rounded-full font-semibold transition mt-2">
                VIEW PROPERTIES
              </button>
            </Link>

          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;