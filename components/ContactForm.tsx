"use client";

import { useState } from "react";

import { toast } from "react-toastify";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });
      setLoading(false);
      if (res.ok) {
        toast.success("Žinutė išsiųsta sėkmingai!");
      } else {
        toast.error("Nepavyko išsiųsti žinutės. Bandykite dar kartą.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h3 className="text-2xl font-semibold text-[#000f29]">
        Send us a message
      </h3>

      <div className="flex flex-col">
        <label htmlFor="fullName" className="mb-2 font-medium text-[#000f29]">
          Full Name
        </label>
        <input
          name="fullName"
          required
          placeholder="Full name"
          className="rounded-lg p-3 bg-white border border-gray-300 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-medium text-[#000f29]">
          Email
        </label>
        <input
          type="email"
          name="email"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^a-zA-Z0-9._%+-@]/g,
              ""
            );
          }}
          required
          placeholder="Email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          className="rounded-lg p-3 border bg-white border-gray-300 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="mb-2 font-medium text-[#000f29]">
          Phone
        </label>
        <input
          name="phone"
          placeholder="Phone"
          pattern="[+]?[\d\s()-]{7,20}"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9+()\s-]/g,
              ""
            );
          }}
          required
          className="rounded-lg p-3 border bg-white border-gray-300 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 font-medium text-[#000f29]">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="rounded-lg p-3 border bg-white border-gray-300 focus:outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-fit border cursor-pointer border-[#ff7d46] bg-[#ff7d46] text-white px-7 py-3 rounded-3xl text-lg font-medium hover:bg-white hover:text-[#ff7d46] transition duration-400"
      >
        {loading ? "Sending..." : "Send Message"}
        <span className="ml-3 hover:translate-x-1 transition-transform">→</span>
      </button>
    </form>
  );
}
