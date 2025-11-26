"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FiStar, FiShoppingCart } from "react-icons/fi";

const Features = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Home & Kitchen"];

  // Map priority to categories
  const getCategoryFromPriority = (priority) => {
    const categoryMap = {
      high: "Electronics",
      medium: "Fashion",
      low: "Home & Kitchen",
    };
    return categoryMap[priority] || "Other";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:5000/api/products");
      const productData =
        response.data.products || response.data.data || response.data;
      const productsWithCategory = Array.isArray(productData)
        ? productData.map((p) => ({
            ...p,
            category: getCategoryFromPriority(p.priority),
            name: p.title,
          }))
        : [];

      setProducts(productsWithCategory);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            (product.category || "").toLowerCase() ===
            selectedCategory.toLowerCase()
        );

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header*/}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Products
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  selectedCategory === category
                    ? "text-primary bg-white border-2 border-primary"
                    : "text-gray-600 bg-white border border-gray-300 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {loading ? (
          <div className="text-center py-12">
            <span className="loading loading-bars loading-xl"></span>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredProducts.slice(0, 10).map((product, idx) => {
              return (
                <div
                  key={product.id || product._id || idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200"
                >
                  <div className="relative h-48 bg-gray-50">
                    <Image
                      src={
                        product.image ||
                        product.img ||
                        product.imageUrl ||
                        product.thumbnail
                      }
                      alt={product.name || product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    {product.category && (
                      <p className="text-xs text-gray-500 mb-1">
                        {product.category}
                      </p>
                    )}

                    <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/items/${product.id || product._id}`}>
                        {product.name || product.title}
                      </Link>
                    </h3>
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={`${product.id || product._id}-rating-${i}`}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          ({product.rating})
                        </span>
                      </div>
                    )}

                    {product.brand && (
                      <p className="text-xs text-gray-600 mb-3">
                        By {product.brand}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-primary">
                          ৳{product.price}
                        </span>
                      </div>
                      <button className="bg-secondary text-primary p-2 rounded-lg">
                        <FiShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
