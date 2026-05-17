import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#07122a] text-white px-6 lg:px-12 py-14"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-full bg-[#12b7b0]" />

              <div>
                <h3 className="text-2xl font-bold">
                  Golden Nest
                </h3>

                <p className="text-gray-400 text-sm">
                  Holiday Homes
                </p>
              </div>

            </div>

            <p className="text-gray-300 text-base leading-8 max-w-sm">
              Premium holiday homes and co-living
              spaces in Dubai and Sharjah.
              Experience the perfect blend of
              affordability, comfort, and luxury living.
            </p>

          </div>

          {/* CENTER */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-base text-gray-300">

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
    href="/#amenities"
    className="hover:text-[#12b7b0] hover:translate-x-1 transition duration-300"
  >
    Amenities
  </a>

  <a
    href="/#contact"
    className="hover:text-[#12b7b0] hover:translate-x-1 transition duration-300"
  >
    Contact Us
  </a>

</div>

          </div>

          {/* RIGHT */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-6 text-gray-300">

              <div className="flex items-start gap-4">

                <MapPin className="w-5 h-5 text-[#12b7b0] mt-1" />

                <p className="text-base leading-7">
                  Office No. 372-ST,
                  Port Saeed, 
                  Dubai, UAE
                </p>

              </div>

              <div className="flex items-center gap-4">

                <Phone className="w-5 h-5 text-[#12b7b0]" />

                <p className="text-base">                  
                    +971 58 119 2956
                    +971 50 182 9564
                </p>

              </div>

              <div className="flex items-center gap-4">

                <Mail className="w-5 h-5 text-[#12b7b0]" />

                <p className="text-base">
                  infogoldennestholidayhomes@gmail.com
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-gray-400">

          <p>
            © 2026 Golden Nest Holiday Homes.
            All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

            <a href="#">
              Cookies Policy
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;