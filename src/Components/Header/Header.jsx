"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Header = () => {
  const slides = [
    {
      id: 1,
      title: "Fresh Vegetables & Fruits",
      subtitle: "Get Up to 50% Off",
      description:
        "Fresh organic vegetables and fruits delivered to your doorstep",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop",
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      title: "Daily Fresh Products",
      subtitle: "Special Offer Today",
      description: "Best quality products at the best prices",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&h=600&fit=crop",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      title: "Organic Food Collection",
      subtitle: "Healthy & Natural",
      description: "100% organic and chemical-free products",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&h=600&fit=crop",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`relative w-full h-full ${slide.bgColor}`}>
              <div className="container mx-auto px-4 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                  <div className="text-center md:text-left space-y-4 z-10">
                    <h3 className="text-primary text-lg md:text-xl font-semibold">
                      {slide.subtitle}
                    </h3>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg">
                      {slide.description}
                    </p>
                    <button className="btn bg-primary text-white hover:bg-primary/90 mt-4">
                      Shop Now
                    </button>
                  </div>

                  <div className="relative h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden rounded-2xl">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={slide.id === 1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
