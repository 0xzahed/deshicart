import React from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fatima Rahman",
      role: "Regular Customer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 5,
      comment:
        "DeshiCart has been a game-changer for me! The quality of vegetables and fruits is always top-notch. I love the convenience of home delivery.",
    },
    {
      id: 2,
      name: "Karim Ahmed",
      role: "Food Blogger",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      rating: 5,
      comment:
        "As a food blogger, I need fresh ingredients daily. DeshiCart never disappoints! Their organic products are truly organic and reasonably priced.",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      role: "Home Chef",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      rating: 4.8,
      comment:
        "Excellent service and quality products. The customer support is very responsive. I've been ordering from DeshiCart for the past 6 months.",
    },
    {
      id: 4,
      name: "Rafiq Hassan",
      role: "Health Enthusiast",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      rating: 5,
      comment:
        "Finding organic products was difficult until I discovered DeshiCart. Their commitment to quality and freshness is commendable!",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-primary hover:-translate-y-2"
            >
              <div className="text-primary/20 mb-4 transition-all duration-300 group-hover:text-primary/40">
                <FaQuoteLeft className="w-10 h-10" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`w-4 h-4 transition-colors duration-300 ${
                      index < Math.floor(testimonial.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {testimonial.comment}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-secondary transition-all duration-300 group-hover:ring-primary">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Trusted by <span className="font-bold text-primary">10,000+</span>{" "}
            happy customers
          </p>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="w-6 h-6 text-yellow-400" />
            ))}
            <span className="text-xl font-bold text-gray-900 ml-2">4.9/5</span>
            <span className="text-gray-600 ml-2">(2,500+ reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
