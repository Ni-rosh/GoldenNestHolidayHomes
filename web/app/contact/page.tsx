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

import { useState } from "react";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const subject = encodeURIComponent(
      "New Inquiry - Golden Nest Holiday Homes"
    );

    const body = encodeURIComponent(`
Full Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Interested Property: ${formData.property}

Message:
${formData.message}
    `);

    window.location.href =
      `mailto:infogoldennestholidayhomes@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#f8fbfb] min-h-screen">
      <Header />

      {/* HERO */}
      <section className="bg-[#eef8f7] py-8 md:py-12 border-b border-[#e4f0ef]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">

          <p className="text-[#11b5ae] font-semibold uppercase tracking-[2px] md:tracking-[3px] text-xs mb-2 md:mb-3">
            CONTACT GOLDEN NEST
          </p>

          <h1 className="text-2xl md:text-4xl font-bold text-[#0d0d3f] leading-tight">
            Get In Touch With Us
          </h1>

          <p className="text-[#5b6475] text-sm md:text-base mt-3 md:mt-4 leading-7 max-w-2xl mx-auto px-2">
            Looking for premium holiday homes, family rooms, studios,
            or bedspaces in Dubai & Sharjah? Our team is here to help you.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-7 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-4 md:space-y-5">

            {/* EMAIL */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm border border-[#edf3f3]">

              <div className="flex items-start gap-3 md:gap-4">

                <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-[#eef8f7] flex items-center justify-center shrink-0">
                  <Mail className="w-5 md:w-6 h-5 md:h-6 text-[#11b5ae]" />
                </div>

                <div className="min-w-0">
                  <p className="text-[#11b5ae] text-xs font-semibold uppercase tracking-[2px] md:tracking-[3px] mb-1 md:mb-2">
                    EMAIL
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-[#0d0d3f] break-words">
                    infogoldennestholidayhomes@gmail.com
                  </h3>

                  <p className="text-[#5b6475] mt-2 md:mt-3 text-xs md:text-sm leading-6 md:leading-7">
                    Reach out for bookings, property inquiries, and accommodation availability.
                  </p>
                </div>

              </div>
            </div>

            {/* PHONE */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm border border-[#edf3f3]">

              <div className="flex items-start gap-3 md:gap-4">

                <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-[#eef8f7] flex items-center justify-center shrink-0">
                  <Phone className="w-5 md:w-6 h-5 md:h-6 text-[#11b5ae]" />
                </div>

                <div>
                  <p className="text-[#11b5ae] text-xs font-semibold uppercase tracking-[2px] md:tracking-[3px] mb-1 md:mb-2">
                    PHONE
                  </p>

                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-base md:text-lg font-bold text-[#0d0d3f]">
                      +971 58 119 2956
                    </h3>

                    <h3 className="text-base md:text-lg font-bold text-[#0d0d3f]">
                      +971 50 182 9564
                    </h3>
                  </div>

                  <p className="text-[#5b6475] mt-2 md:mt-3 text-xs md:text-sm">
                    Available daily for quick support and bookings.
                  </p>
                </div>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm border border-[#edf3f3]">

              <div className="flex items-start gap-3 md:gap-4">

                <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-[#eef8f7] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 md:w-6 h-5 md:h-6 text-[#11b5ae]" />
                </div>

                <div>
                  <p className="text-[#11b5ae] text-xs font-semibold uppercase tracking-[2px] md:tracking-[3px] mb-1 md:mb-2">
                    WHATSAPP
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-[#0d0d3f]">
                    Chat on WhatsApp
                  </h3>

                  <p className="text-[#5b6475] mt-2 md:mt-3 text-xs md:text-sm leading-6 md:leading-7">
                    Usually the fastest way to reach our team for real-time availability.
                  </p>
                </div>

              </div>
            </div>

            {/* OFFICE */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm border border-[#edf3f3]">

              <div className="flex items-start gap-3 md:gap-4">

                <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-[#eef8f7] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-[#11b5ae]" />
                </div>

                <div>
                  <p className="text-[#11b5ae] text-xs font-semibold uppercase tracking-[2px] md:tracking-[3px] mb-1 md:mb-2">
                    OFFICE
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-[#0d0d3f]">
                    Golden Nest Holiday Homes
                  </h3>

                  <p className="text-[#5b6475] mt-2 md:mt-3 text-xs md:text-sm leading-6 md:leading-7">
                    Office No. 372-ST, Port Saeed, Dubai, UAE
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-7 shadow-sm border border-[#edf3f3]">

            <h2 className="text-2xl md:text-3xl font-bold text-[#0d0d3f] mb-2 md:mb-3">
              Send us a message
            </h2>

            <p className="text-[#5b6475] text-xs md:text-sm leading-6 md:leading-7 mb-6 md:mb-8">
              Fill out the form below and your email app will open automatically.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-5"
            >

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

                <div>
                  <label className="block text-[#0d0d3f] font-medium mb-2 text-xs md:text-sm">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-[#dfeaea] rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 outline-none focus:border-[#11b5ae] bg-white text-[#0d0d3f] placeholder:text-gray-400 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-[#0d0d3f] font-medium mb-2 text-xs md:text-sm">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-[#dfeaea] rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 outline-none focus:border-[#11b5ae] bg-white text-[#0d0d3f] placeholder:text-gray-400 text-sm md:text-base"
                  />
                </div>

              </div>

              {/* PHONE */}
              <div>
                <label className="block text-[#0d0d3f] font-medium mb-2 text-xs md:text-sm">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971..."
                  className="w-full border border-[#dfeaea] rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 outline-none focus:border-[#11b5ae] bg-white text-[#0d0d3f] placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>

              {/* PROPERTY */}
              <div>
                <label className="block text-[#0d0d3f] font-medium mb-2 text-xs md:text-sm">
                  Interested Property
                </label>

                <input
                  type="text"
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  placeholder="Family room, studio, bedspace..."
                  className="w-full border border-[#dfeaea] rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 outline-none focus:border-[#11b5ae] bg-white text-[#0d0d3f] placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-[#0d0d3f] font-medium mb-2 text-xs md:text-sm">
                  Message
                </label>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  className="w-full border border-[#dfeaea] rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 outline-none focus:border-[#11b5ae] bg-white text-[#0d0d3f] placeholder:text-gray-400 text-sm md:text-base resize-none"
                ></textarea>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-3 md:pt-5">

                <button
                  type="submit"
                  className="bg-[#11b5ae] hover:bg-[#0e9c96] text-white px-5 md:px-7 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-semibold flex items-center justify-center gap-2 transition text-sm md:text-base"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/971581192956"
                  target="_blank"
                  className="bg-[#10d463] hover:bg-[#0fc45c] text-white px-5 md:px-7 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-semibold flex items-center justify-center gap-2 transition text-sm md:text-base"
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