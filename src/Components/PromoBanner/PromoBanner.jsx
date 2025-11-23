import React from "react";
import Link from "next/link";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="bg-linear-to-r from-primary to-green-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-16 text-white">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Limited Time Offer
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Get Up to 50% Off
              </h2>

              <p className="text-xl mb-2 font-semibold">On Your First Order</p>

              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Sign up today and enjoy exclusive discounts on fresh organic
                vegetables, fruits, and groceries. Free delivery on orders above
                ৳500!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Sign Up Now
                </Link>
                <Link
                  href="/products"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  Browse Products
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white/90 text-sm">
                    Offer ends soon!
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop"
                alt="Fresh Products"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <div className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  Free Delivery
                </h3>
                <p className="text-gray-600 mb-4">On all orders above ৳500</p>
                <Link
                  href="/products"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Shop Now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
              <div className="text-primary text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                🚚
              </div>
            </div>
          </div>
          <div className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  100% Organic
                </h3>
                <p className="text-gray-600 mb-4">Certified organic products</p>
                <Link
                  href="/about"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
              <div className="text-primary text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                🌿
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
