"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiStar } from "react-icons/fi";

export default function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getCategoryFromPriority = (priority) => {
    const categoryMap = {
      high: "Electronics",
      medium: "Fashion",
      low: "Home & Kitchen",
    };
    return categoryMap[priority] || "Other";
  };

  const productsWithCategory = products.map((p) => ({
    ...p,
    category: getCategoryFromPriority(p.priority),
    name: p.title,
  }));

  const categories = [
    "All",
    ...new Set(productsWithCategory.map((p) => p.category).filter(Boolean)),
  ];

  const filteredProducts = productsWithCategory.filter((product) => {
    const matchesSearch =
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDesc?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.fullDesc?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-linear-to-r from-primary to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-lg md:text-xl opacity-90">
            Browse our complete collection of fresh products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-gray-600">
            Showing{" "}
            <span className="font-semibold text-primary">
              {filteredProducts.length}
            </span>{" "}
            products
          </div>
        </div>

        {/* Products */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                href={`/items/${product._id || product.id}`}
                key={product._id || product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <div className="relative h-56 bg-gray-50">
                  <Image
                    src={
                      product.image ||
                      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                    }
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.shortDesc}
                  </p>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => {
                      const rating =
                        product.priority === "high"
                          ? 5
                          : product.priority === "medium"
                          ? 4
                          : 3;
                      return (
                        <FiStar
                          key={i}
                          className={`text-sm ${
                            i < rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      );
                    })}
                    <span className="text-sm text-gray-600 ml-1">
                      (
                      {product.priority === "high"
                        ? "5.0"
                        : product.priority === "medium"
                        ? "4.0"
                        : "3.0"}
                      )
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary">
                        ৳{product.price}
                      </span>
                    </div>
                    <button className="btn btn-sm bg-primary text-white">
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No products found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
