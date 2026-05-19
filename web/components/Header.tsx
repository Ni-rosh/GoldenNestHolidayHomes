"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  const navLink = (path: string) => {
    return pathname === path
      ? "text-[#12b7b0] font-semibold"
      : "text-gray-700 hover:text-[#12b7b0] transition";
  };

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm border-b border-gray-100 overflow-hidden">

      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[82px] px-8">

        {/* LOGO */}
{/* LOGO */}
{/* LOGO */}
<Link href="/" className="flex items-center gap-4 min-w-fit">

  {/* ICON */}
  <Image
    src="/logo.png"
    alt="Golden Nest"
    width={58}
    height={58}
    priority
    className="object-contain"
  />

  {/* BRAND TEXT */}
  <div className="flex flex-col justify-center">

    <h1
  className="text-[20px] tracking-[4px] text-[#0b3b2e] uppercase leading-none"
  style={{ fontFamily: "serif" }}
>
  Golden Nest
</h1>

<p
  className="text-[10px] text-[#c8a55a] uppercase mt-[6px] leading-none text-center tracking-[4px]"
  style={{ fontFamily: "serif" }}
>
  Holiday Homes
</p>
</div>

</Link>
        {/* NAVIGATION */}
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

        {/* BUTTON */}
        <Link href="/properties">

          <button className="bg-[#12b7b0] hover:bg-[#0ea5a0] text-white px-8 py-3 rounded-full font-semibold transition whitespace-nowrap">

            VIEW PROPERTIES

          </button>

        </Link>

      </div>

    </header>
  );
};

export default Header;