"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://deshicart-server.vercel.app/api/products"
        );
        const data = await response.json();
        const productData = data.products || data.data || data;
        setProducts(Array.isArray(productData) ? productData.slice(0, 8) : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts(fallbackProducts);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Sale":
        return "bg-red-500";
      case "Hot":
        return "bg-orange-500";
      case "New":
        return "bg-green-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our fresh and organic products at the best prices
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <span className="loading loading-bars loading-xl"></span>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No products available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div
                key={product.id || product._id || idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={
                      product.image ||
                      product.img ||
                      product.imageUrl ||
                      product.thumbnail
                    }
                    alt={product.name || product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 ${getBadgeColor(
                        product.badge
                      )} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute bottom-4 right-4 bg-white text-primary p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white transform translate-y-2 group-hover:translate-y-0">
                    <FaShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-5">
                  {product.category && (
                    <p className="text-sm text-gray-500 mb-2">
                      {product.category}
                    </p>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    <Link href={`/products/${product.id || product._id}`}>
                      {product.name || product.title}
                    </Link>
                  </h3>
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={`${product.id || product._id}-star-${index}`}
                          className={`w-4 h-4 ${
                            index < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        ({product.rating})
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">
                        ৳{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ৳{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="text-primary hover:text-primary/80 transition-colors duration-300">
                      <FaShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="btn bg-primary text-white hover:bg-primary/90 px-8 py-4"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
