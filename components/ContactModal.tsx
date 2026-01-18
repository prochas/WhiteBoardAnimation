import React, { useState } from "react";
import Image from "next/image";

import Close from "../public/images/close.svg";
import EmailIcon from "../public/images/email-icon.svg";

import Modal from "react-modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactModal({
  isOpen,
  onRequestClose,
}: ContactModalProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      if (res.ok) {
        toast.success("Žinutė išsiųsta sėkmingai!");
        setForm({ fullName: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Nepavyko išsiųsti žinutės. Bandykite dar kartą.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Įvyko klaida siunčiant žinutę.");
    } finally {
      setLoading(false);
      onRequestClose(); // Close the modal after submission
    }
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Registration Modal"
        ariaHideApp={false}
        overlayClassName="fixed inset-0 bg-black/40 z-[9999] flex items-center justify-center"
        className="bg-[#f7f6f4] w-full sm:w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-lg sm:rounded-lg shadow-lg outline-none relative"
      >
        <div className="flex align-start gap-10">
          <Image src={EmailIcon} alt="Email Icon" className="w-28 h-28" />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-[#000f29]">
              Contact Us
            </h2>
            <p className="text-[#52525a] mb-6">
              Have questions or need more information? Fill out the form below
            </p>
            <button
              onClick={onRequestClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              <Image src={Close} alt="Close" className="w-6 h-6" />
            </button>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="rounded-lg p-2.5 pl-4 bg-white border border-gray-300 focus:outline-none"
                placeholder="Vardas"
                type="text"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-lg p-2.5 pl-4 bg-white border border-gray-300 focus:outline-none"
                placeholder="El. paštas"
                type="email"
                required
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="rounded-lg p-2.5 pl-4 bg-white border border-gray-300 focus:outline-none"
                placeholder="Tel. numeris"
                type="tel"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="rounded-lg p-2.5 pl-4 bg-white border border-gray-300 focus:outline-none"
                placeholder="Žinutė"
                rows={6}
                style={{ resize: "none" }}
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-fit border cursor-pointer border-[#ff7d46] bg-[#ff7d46] text-white px-7 py-2.5 rounded-3xl text-lg font-medium hover:bg-white hover:text-[#ff7d46] transition duration-400"
              >
                {loading ? "Siunčiama..." : "Siųsti žinutę"}
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}
