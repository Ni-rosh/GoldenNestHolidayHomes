"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { CheckCircle } from "lucide-react";


const benefits = [
  {
    title: "Career Growth",
    description:
      "Grow alongside a hospitality brand that values ambition, learning, and professional development.",
    icon: "📈",
  },
  {
    title: "Meaningful Impact",
    description:
      "Every role contributes directly to creating memorable experiences for our guests.",
    icon: "✨",
  },
  {
    title: "People First",
    description:
      "Work in a supportive and collaborative environment where your voice matters.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description:
      "Bring fresh ideas and help shape the future of modern holiday home experiences.",
    icon: "💡",
  },
  {
    title: "Work-Life Balance",
    description:
      "We believe great hospitality starts with happy, motivated people.",
    icon: "🌴",
  },
  {
    title: "Learning Opportunities",
    description:
      "Gain exposure across hospitality, marketing, operations, and technology.",
    icon: "🚀",
  },
];

const values = [
  {
    title: "Excellence",
    description:
      "We strive to exceed expectations in every guest interaction.",
  },
  {
    title: "Hospitality",
    description:
      "Warmth, care, and genuine service are at the heart of everything we do.",
  },
  {
    title: "Growth",
    description:
      "We encourage continuous learning, innovation, and personal development.",
  },
];

export default function CareersPage() {
  const [showResumeForm, setShowResumeForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleResumeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Don't prevent default - let the form submit naturally
    setShowSuccessModal(true);
  };
  return (
    <main className="bg-[#f5fbfb] text-gray-900 min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div
          className="h-[70vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000')",
          }}
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 md:px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
              Build Experiences.
              <br />
              Create Memories.
              <br />
              Grow With Us.
            </h1>

            <p className="text-lg md:text-xl text-white mb-8">
              Join a passionate team dedicated to creating exceptional holiday
              stays and unforgettable guest experiences.
            </p>

            <a
              href="#join-us"
              className="inline-block rounded-lg bg-[#11b5ae] px-8 py-4 text-white font-semibold transition hover:bg-[#0f9d97]"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#11b5ae]">
            Why Join Golden Nest?
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            Become part of a growing hospitality brand that values people,
            innovation, and memorable guest experiences.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#11b5ae]/20 bg-white p-8 hover:border-[#11b5ae] transition shadow-sm"
              >
                <div className="text-4xl mb-4">{item.icon}</div>

                <h3 className="text-xl font-semibold mb-3 text-[#11b5ae]">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#eef8f7] py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-[#11b5ae]">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#11b5ae]">
                  {value.title}
                </h3>

                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="join-us"
        className="bg-gradient-to-r from-[#eef8f7] via-white to-[#eef8f7] py-20 md:py-24 px-4 md:px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#11b5ae]">
            Ready to Start Your Journey?
          </h2>

          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Send us your resume and tell us why
            you'd be a great fit for Golden Nest Holiday Homes.
          </p>

          <button
            onClick={() => setShowResumeForm(true)}
            className="inline-block rounded-lg bg-[#11b5ae] px-8 py-4 text-white font-bold transition hover:bg-[#0f9d97]"
          >
            Send Your Resume
          </button>

          <p className="mt-6 text-gray-500">
            info@goldennestholidayhomes.com
          </p>
        </div>
        
      </section>
      {showResumeForm && (
  <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
  onClick={() => setShowResumeForm(false)}
>
    <div
  className="bg-white rounded-2xl w-full max-w-lg p-8 relative shadow-2xl"
  onClick={(e) => e.stopPropagation()}
>

      <button
        onClick={() => setShowResumeForm(false)}
        className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
      >
        ×
      </button>

      <h3 className="text-2xl font-bold text-[#11b5ae] mb-6">
        Submit Your Resume
      </h3>

      <form
        action="https://formsubmit.co/info@goldennestholidayhomes.com"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleResumeSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (e.g., +971 50 123 4567)"
          required
          pattern="[\d\s\-\+\(\)]{7,}"
          title="Please enter a valid phone number (Dubai/UAE format: +971 or local)"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="file"
          name="attachment"
          accept=".pdf,.doc,.docx"
          required
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about yourself..."
          className="w-full border rounded-lg p-3"
        />

        <input
          type="hidden"
          name="_subject"
          value="Career Application - Golden Nest Holiday Homes"
        />
<input
  type="hidden"
  name="_next"
  value="https://goldennestholidayhomes.com/careers?submitted=true"
/>

<input
  type="hidden"
  name="_captcha"
  value="false"
/>

<input
  type="hidden"
  name="_template"
  value="table"
/>
        <button
          type="submit"
          className="w-full bg-[#11b5ae] text-white py-3 rounded-lg font-semibold hover:bg-[#0f9d97]"
        >
          Submit Application
        </button>
      </form>

    </div>
  </div>
)}

{/* SUCCESS MODAL */}
{showSuccessModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div className="bg-white rounded-3xl w-full max-w-md p-8 text-center shadow-2xl animate-in fade-in scale-95">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#0d0d3f] mb-3">
        Application Sent! 🎉
      </h3>

      <p className="text-[#5b6475] mb-6 leading-7">
        Thank you for applying! We've received your resume and will review it carefully. We'll be in touch soon if there's a great fit for our team.
      </p>

      <div className="bg-[#eef8f7] rounded-xl p-4 mb-6">
        <p className="text-sm text-[#11b5ae] font-semibold">
          📧 Check your email for confirmation
        </p>
      </div>

      <button
        onClick={() => {
          setShowSuccessModal(false);
          setShowResumeForm(false);
        }}
        className="bg-[#11b5ae] hover:bg-[#0e9c96] text-white px-8 py-3 rounded-xl font-semibold transition w-full"
      >
        Got It!
      </button>
    </div>
  </div>
)}

      <Footer />
    </main>
  );
}