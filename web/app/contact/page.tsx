"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#f8fbfb] min-h-screen">
      <Header />

      {/* HERO */}
      <section className="bg-[#eef8f7] py-10 border-b border-[#e4f0ef]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-[#11b5ae] font-semibold uppercase tracking-[3px] text-xs mb-3">
            CONTACT GOLDEN NEST
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0d0d3f] leading-tight">
            Get In Touch With Us
          </h1>

          <p className="text-[#5b6475] text-sm md:text-base mt-4 leading-7 max-w-2xl mx-auto">
            Looking for premium holiday homes, family rooms, studios,
            or bedspaces in Dubai & Sharjah? Our team is here to help you.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 gap-7 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {/* EMAIL */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#edf3f3]">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-[#eef8f7] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#11b5ae]" />
                </div>

                <div>
                  <p className="text-[#11b5ae] text-xs font-semibold uppercase tracking-[3px] mb-2">
                    EMAIL
                  </p>

                  <h3 className="text-xl font-bold text-[#0d0d3f] break-words">
                    infogoldennestholidayhomes@gmail.com
                  </h3>

                  <p className="text-[#5b6475] mt-3 text-sm leading-7">
                    Reach out for bookings, property inquiries, and accommodation availability.
                  </p>
                </div>

              </div>
            </div>

            {/* PHONE */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#edf3f3]">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-[#eef8f7] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#11b5ae]" />
                </div>

                <div>
                  <p className="text-[#11b5ae] text-xs font-semibold uppercase tracking-[3px] mb-2">
                    PHONE
                  </p>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0d0d3f]">
                      +971 58 119 2956
                    </h3>

                    <h3 className="text-lg font-bold text-[#0d0d3f]">
                      +971 50 182 9564
                    </h3>
                  </div>

                  <p className="text-[#5b6475] mt-3 text-sm">
                    Available daily for quick support and bookings.
                  </p>
                </div>

              </div>
            </div>

            {/* WHATSAPP */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#edf3f3]">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-[#eef8f7] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#11b5ae]" />
                </div>

                <div>
                  <p className="text-[#11b5ae] text-xs font-semibold uppercase tracking-[3px] mb-2">
                    WHATSAPP
                  </p>

                  <h3 className="text-xl font-bold text-[#0d0d3f]">
                    Chat on WhatsApp
                  </h3>

                  <p className="text-[#5b6475] mt-3 text-sm leading-7">
                    Usually the fastest way to reach our team for real-time availability.
                  </p>
                </div>

              </div>
            </div>

            {/* OFFICE */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#edf3f3]">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-[#eef8f7] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#11b5ae]" />
                </div>

                <div>
                  <p className="text-[#11b5ae] text-xs font-semibold uppercase tracking-[3px] mb-2">
                    OFFICE
                  </p>

                  <h3 className="text-xl font-bold text-[#0d0d3f]">
                    Golden Nest Holiday Homes
                  </h3>

                  <p className="text-[#5b6475] mt-3 text-sm leading-7">
                    Office No. 372-ST, Port Saeed, Dubai, UAE
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-[#edf3f3]">

            <h2 className="text-3xl font-bold text-[#0d0d3f] mb-3">
              Send us a message
            </h2>

            <p className="text-[#5b6475] text-sm leading-7 mb-8">
              Fill out the form below and your email app will open automatically.
            </p>

            {/* FORM */}
            <form
              action="mailto:infogoldennestholidayhomes@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >

              {/* NAME + EMAIL */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-[#0d0d3f] font-medium mb-2 text-sm">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="Name"
                    placeholder="Your full name"
                    className="w-full border border-[#dfeaea] rounded-2xl px-4 py-3 outline-none focus:border-[#11b5ae]"
                  />
                </div>

                <div>
                  <label className="block text-[#0d0d3f] font-medium mb-2 text-sm">
                    Email
                  </label>

                  <input
                    type="email"
                    name="Email"
                    placeholder="you@example.com"
                    className="w-full border border-[#dfeaea] rounded-2xl px-4 py-3 outline-none focus:border-[#11b5ae]"
                  />
                </div>

              </div>

              {/* PHONE */}
              <div>
                <label className="block text-[#0d0d3f] font-medium mb-2 text-sm">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="Phone"
                  placeholder="+971..."
                  className="w-full border border-[#dfeaea] rounded-2xl px-4 py-3 outline-none focus:border-[#11b5ae]"
                />
              </div>

              {/* PROPERTY */}
              <div>
                <label className="block text-[#0d0d3f] font-medium mb-2 text-sm">
                  Interested Property
                </label>

                <input
                  type="text"
                  name="Property"
                  placeholder="Family room, studio, bedspace..."
                  className="w-full border border-[#dfeaea] rounded-2xl px-4 py-3 outline-none focus:border-[#11b5ae]"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-[#0d0d3f] font-medium mb-2 text-sm">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="Message"
                  placeholder="Tell us about your requirement..."
                  className="w-full border border-[#dfeaea] rounded-2xl px-4 py-3 outline-none focus:border-[#11b5ae]"
                ></textarea>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-5">

                <button
                  type="submit"
                  className="bg-[#11b5ae] hover:bg-[#0e9c96] text-white px-7 py-3 rounded-2xl font-semibold flex items-center gap-3 transition"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/971581192956"
                  target="_blank"
                  className="bg-[#10d463] hover:bg-[#0fc45c] text-white px-7 py-3 rounded-2xl font-semibold flex items-center gap-3 transition"
                >
                  WhatsApp Us
                  <MessageCircle className="w-4 h-4" />
                </a>

              </div>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}