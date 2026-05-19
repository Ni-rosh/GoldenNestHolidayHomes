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
      className="bg-[#07122a] text-white pt-6 pb-6 px-6 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-14 border-b border-white/10 pb-14 items-start">

          {/* LEFT */}
          <div>

            {/* LOGO */}
            {/* LOGO + BRAND */}
<div className="flex items-center gap-4 mb-8">

  {/* LOGO */}
  <Image
    src="/logo.png"
    alt="Golden Nest Holiday Homes"
    width={70}
    height={70}
    priority
    className="object-contain opacity-95"
  />

  {/* TEXT */}
<div className="flex flex-col">

  <h2
    className="text-[32px] tracking-[4px] text-white uppercase leading-none"
    style={{ fontFamily: "serif" }}
  >
    Golden Nest
  </h2>

  <p
    className="text-[12px] tracking-[8px] text-[#c8a55a] uppercase leading-none text-center mt-4"
    style={{ fontFamily: "serif" }}
  >
    Holiday Homes
  </p>

</div>
</div>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-[17px] leading-9 max-w-md">
              Premium holiday homes and co-living spaces in
              Dubai and Sharjah. Experience the perfect blend
              of affordability, comfort, and modern luxury living.
            </p>

          </div>

          {/* CENTER */}
<div className="flex flex-col items-center">

            <h3 className="text-[32px] font-bold mb-8">
              Quick Links
            </h3>

           <div className="flex flex-col gap-5 text-[17px] text-gray-300 items-center">

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
          <div>

            <h3 className="text-[32px] font-bold mb-8">
              Contact Us
            </h3>

            <div className="space-y-7 text-gray-300">

              {/* ADDRESS */}
              <div className="flex items-start gap-4">

                <MapPin className="w-5 h-5 text-[#12b7b0] mt-1 shrink-0" />

                <p className="text-[17px] leading-8">
                  Office No. 372-ST,
                  Port Saeed,
                  Dubai, UAE
                </p>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <Phone className="w-5 h-5 text-[#12b7b0] mt-1 shrink-0" />

                <div className="text-[17px] leading-8">
                  <p>+971 58 119 2956</p>
                  <p>+971 50 182 9564</p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <Mail className="w-5 h-5 text-[#12b7b0] mt-1 shrink-0" />

                <p className="text-[17px] break-all leading-8">
                  infogoldennestholidayhomes@gmail.com
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* LOCATIONS */}
        <div className="py-10 border-b border-white/10">

          <div className="flex flex-wrap items-center justify-center gap-4">

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
                className="bg-white/5 border border-white/5 text-gray-300 text-sm px-5 py-2 rounded-full hover:bg-[#12b7b0]/10 hover:text-[#12b7b0] transition"
              >
                {location}
              </span>

            ))}

          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* COPYRIGHT */}
            <div className="text-gray-500 text-sm text-center lg:text-left">
              © 2026 Golden Nest Holiday Homes. All Rights Reserved.
            </div>

            {/* POLICY LINKS */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">

              <NextLink
                href="/privacy-policy"
                className="hover:text-[#12b7b0] transition"
              >
                Privacy Policy
              </NextLink>

              <NextLink
                href="/terms-of-service"
                className="hover:text-[#12b7b0] transition"
              >
                Terms of Service
              </NextLink>

              <NextLink
                href="/cookies-policy"
                className="hover:text-[#12b7b0] transition"
              >
                Cookies Policy
              </NextLink>

            </div>

          </div>

          {/* DISCLAIMER */}
          <p className="text-center text-gray-500 text-xs leading-7 mt-10 max-w-4xl mx-auto">
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