import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
return (
    <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white text-2xl font-bold mb-4">DeshiCart</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        Your trusted source for fresh, organic vegetables and fruits.
                        Quality products delivered right to your doorstep.
                    </p>

                    <div className="flex gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="DeshiCart on Facebook"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                        >
                            <FaFacebook className="w-5 h-5 text-white" aria-hidden="true" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="DeshiCart on Twitter"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                        >
                            <FaTwitter className="w-5 h-5 text-white" aria-hidden="true" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="DeshiCart on Instagram"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                        >
                            <FaInstagram className="w-5 h-5 text-white" aria-hidden="true" />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="DeshiCart on LinkedIn"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                        >
                            <FaLinkedin className="w-5 h-5 text-white" aria-hidden="true" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white text-lg font-semibold mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-lg font-semibold mb-4">
                        Customer Service
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/faq"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/shipping"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Shipping Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/returns"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Returns & Refunds
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/privacy"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-lg font-semibold mb-4">
                        Contact Us
                    </h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
                            <span>
                                123 Mirpur, Dhaka-1205
                                <br />
                                Bangladesh
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                            <a
                                href="tel:+8801712345678"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                +880 1744-546898
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                            <a
                                href="mailto:info@deshicart.com"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                info@deshicart.com
                            </a>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <h5 className="text-white text-sm font-semibold mb-2">
                            Subscribe Newsletter
                        </h5>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                aria-label="Your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary text-white text-sm"
                            />
                            <button
                                type="button"
                                className="btn bg-primary text-white hover:bg-primary/90 px-4 py-2 text-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-800">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        <FaRegCopyright></FaRegCopyright> 2025 DeshiCart. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <Link
                            href="/privacy"
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/sitemap"
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
};

export default Footer;
