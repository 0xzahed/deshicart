import React from "react";
import { FaTruck, FaLeaf, FaShieldAlt, FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaTruck className="w-12 h-12" />,
      title: "Free Delivery",
      description:
        "Free shipping on all orders above ৳500. Get your products delivered to your doorstep.",
    },
    {
      id: 2,
      icon: <FaLeaf className="w-12 h-12" />,
      title: "100% Organic",
      description:
        "All our products are certified organic and free from harmful chemicals.",
    },
    {
      id: 3,
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Secure Payment",
      description:
        "Your payments are safe with us. We use industry-standard security measures.",
    },
    {
      id: 4,
      icon: <FaHeadset className="w-12 h-12" />,
      title: "24/7 Support",
      description:
        "Our customer support team is always ready to help you with any questions.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary">DeshiCart?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide the best shopping experience with quality products and
            excellent service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white border border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-primary hover:-translate-y-2 cursor-pointer"
            >
        
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full mb-6 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
