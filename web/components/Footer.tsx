import NextLink from "next/link";
import Image from "next/image";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#07122a] text-white pt-8 pb-6 px-4 md:px-6 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14 border-b border-white/10 pb-8 md:pb-10 lg:pb-14">

          {/* LEFT */}
          <div>

            {/* LOGO + BRAND */}
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">

              {/* LOGO */}
              <Image
                src="/logo.png"
                alt="Golden Nest Holiday Homes"
                width={60}
                height={60}
                priority
                className="object-contain opacity-95 md:w-[70px] md:h-[70px]"
              />

              {/* TEXT */}
              <div className="flex flex-col">

                <h2
                  className="text-[24px] md:text-[32px] tracking-[3px] md:tracking-[4px] text-white uppercase leading-none"
                  style={{ fontFamily: "serif" }}
                >
                  Golden Nest
                </h2>

                <p
                  className="text-[10px] md:text-[12px] tracking-[6px] md:tracking-[8px] text-[#c8a55a] uppercase leading-none text-center mt-2 md:mt-4"
                  style={{ fontFamily: "serif" }}
                >
                  Holiday Homes
                </p>

              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-[15px] md:text-[17px] leading-7 md:leading-9 max-w-md">
              Premium holiday homes and co-living spaces in
              Dubai and Sharjah. Experience the perfect blend
              of affordability, comfort, and modern luxury living.
            </p>

          </div>

          {/* CENTER */}
          <div className="flex flex-col items-start md:items-center lg:items-center">

            <h3 className="text-[24px] md:text-[32px] font-bold mb-6 md:mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 md:gap-5 text-[15px] md:text-[17px] text-gray-300 items-start md:items-center">

              <a
                href="/"
                className="hover:text-[#12b7b0] hover:translate-x-1 transition duration-300"
              >
                Home
              </a>

              <a
                href="/properties"
                className="hover:text-[#12b7b0] hover:translate-x-1 transition duration-300"
              >
                Properties
              </a>

              <a
                href="/amenities"
                className="hover:text-[#12b7b0] hover:translate-x-1 transition duration-300"
              >
                Amenities
              </a>

              <a
                href="/contact"
                className="hover:text-[#12b7b0] hover:translate-x-1 transition duration-300"
              >
                Contact Us
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="md:col-span-2 lg:col-span-1">

            <h3 className="text-[24px] md:text-[32px] font-bold mb-6 md:mb-8">
              Contact Us
            </h3>

            <div className="space-y-5 md:space-y-7 text-gray-300">

              {/* ADDRESS */}
              <div className="flex items-start gap-3 md:gap-4">

                <MapPin className="w-5 h-5 text-[#12b7b0] mt-1 shrink-0" />

                <p className="text-[15px] md:text-[17px] leading-6 md:leading-8">
                  Office No. 372-ST,
                  Port Saeed,
                  Dubai, UAE
                </p>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-3 md:gap-4">

                <Phone className="w-5 h-5 text-[#12b7b0] mt-1 shrink-0" />

                <div className="text-[15px] md:text-[17px] leading-6 md:leading-8">
                  <p>+971 58 119 2956</p>
                  <p>+971 50 182 9564</p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3 md:gap-4">

                <Mail className="w-5 h-5 text-[#12b7b0] mt-1 shrink-0" />

                <p className="text-[15px] md:text-[17px] break-all leading-6 md:leading-8">
                  infogoldennestholidayhomes@gmail.com
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* LOCATIONS */}
        <div className="py-8 md:py-10 border-b border-white/10">

          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 md:gap-4">

            <p className="text-gray-400 text-sm">
              Our Locations:
            </p>

            {[
              "Al Nahda 1, Dubai",
              "Al Nahda 2, Dubai",
              "Al Qusais 1, Dubai",
              "Bur Dubai",
              "Al Barsha 1",
              "Karama",
              "Sharjah",
            ].map((location) => (

              <span
                key={location}
                className="bg-white/5 border border-white/5 text-gray-300 text-xs md:text-sm px-3 md:px-5 py-2 rounded-full hover:bg-[#12b7b0]/10 hover:text-[#12b7b0] transition"
              >
                {location}
              </span>

            ))}

          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-6 md:pt-8">

          <div className="flex flex-col gap-6 md:gap-8">

            {/* COPYRIGHT */}
            <div className="text-gray-500 text-xs md:text-sm text-center">
              © 2026 Golden Nest Holiday Homes LLC. All Rights Reserved.
            </div>

            {/* POLICY LINKS */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400">

              <NextLink
                href="/privacy-policy"
                className="hover:text-[#12b7b0] transition text-center md:text-left"
              >
                Privacy Policy
              </NextLink>

              <NextLink
                href="/terms-of-service"
                className="hover:text-[#12b7b0] transition text-center md:text-left"
              >
                Terms of Service
              </NextLink>

              <NextLink
                href="/cookies-policy"
                className="hover:text-[#12b7b0] transition text-center md:text-left"
              >
                Cookies Policy
              </NextLink>

            </div>

          </div>

          {/* DISCLAIMER */}
          <p className="text-center text-gray-500 text-xs leading-6 md:leading-7 mt-8 md:mt-10 max-w-4xl mx-auto">
            Disclaimer: Images are for representational purposes only.
            Actual amenities, layouts, pricing, and property availability
            may vary. Please contact Golden Nest Holiday Homes directly
            for the latest accommodation availability and booking details.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;