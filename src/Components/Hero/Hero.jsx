import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-linear-to-r from-green-50 to-blue-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fresh & Organic Products
            <span className="text-primary block mt-2">
              Delivered to Your Door
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the best quality organic vegetables, fruits, and groceries at
            unbeatable prices. Shop from the comfort of your home and enjoy free
            delivery on orders above ৳500.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="btn bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-gray-600 mt-2">Products</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">10K+</h3>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">100%</h3>
              <p className="text-gray-600 mt-2">Organic</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
