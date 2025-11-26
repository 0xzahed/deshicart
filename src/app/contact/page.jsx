"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: "Phone",
      details: ["+880 1234-567890", "+880 9876-543210"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: FiMail,
      title: "Email",
      details: ["support@deshicart.com", "info@deshicart.com"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: FiMapPin,
      title: "Address",
      details: ["123 Market Street", "Dhaka, Bangladesh"],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: FiClock,
      title: "Working Hours",
      details: ["Mon - Sat: 8AM - 8PM", "Sunday: 10AM - 6PM"],
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-linear-to-r from-primary to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-90">
            We&apos;d love to hear from you. Get in touch!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-14 h-14 ${info.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

            {submitted && (
              <div className="alert alert-success mb-6">
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn bg-primary text-white hover:bg-primary/90 py-3 flex items-center justify-center gap-2"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9074604736784!2d90.39166931498163!3d23.750884394618648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1637582870896!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Visit our physical store to experience our products firsthand.
                Our friendly staff will be happy to assist you with your
                shopping needs.
              </p>
            </div>

            <div className="bg-linear-to-r from-primary to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="opacity-90 mb-6">
                Our customer support team is available to assist you with any
                questions or concerns.
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <FiPhone className="text-xl" />
                  <span>Call us: +880 1744-546898</span>
                </p>
                <p className="flex items-center gap-2">
                  <FiMail className="text-xl" />
                  <span>Email: support@deshicart.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
