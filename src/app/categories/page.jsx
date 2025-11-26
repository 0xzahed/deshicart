"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FiGrid, FiShoppingBag, FiPackage } from "react-icons/fi";

export default function CategoriesPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const data = response.data;
        setProducts(data);
        const getCategoryFromPriority = (priority) => {
          const categoryMap = {
            high: "Electronics",
            medium: "Fashion",
            low: "Home & Kitchen",
          };
          return categoryMap[priority] || "Other";
        };
        const categoryMap = {};
        data.forEach((product) => {
          const cat = getCategoryFromPriority(product.priority);
          categoryMap[cat] = (categoryMap[cat] || 0) + 1;
        });

        const categoryList = Object.entries(categoryMap).map(
          ([name, count]) => ({
            name,
            count,
            icon: FiPackage,
          })
        );

        setCategories(categoryList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categoryIcons = [FiShoppingBag, FiPackage, FiGrid];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-linear-to-r from-primary to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Product Categories
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Explore our wide range of product categories
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {categories.length}
                </div>
                <div className="text-gray-600">Total Categories</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {products.length}
                </div>
                <div className="text-gray-600">Total Products</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Fresh & Organic</div>
              </div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = categoryIcons[index % categoryIcons.length];
                return (
                  <Link
                    href={`/items?category=${encodeURIComponent(
                      category.name
                    )}`}
                    key={category.name}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <Icon className="text-4xl text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600">
                        {category.count}{" "}
                        {category.count === 1 ? "Product" : "Products"}
                      </p>
                      <div className="mt-4 text-primary font-medium group-hover:underline">
                        Browse Products →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-linear-to-r from-primary to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Contact us and we&apos;ll help you find the perfect product
              </p>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 border-none px-8"
              >
                Contact Us
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
