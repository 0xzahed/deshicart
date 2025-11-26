"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { FiUpload, FiDollarSign, FiTag, FiFileText } from "react-icons/fi";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function EditProductPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const productId = params.id;

  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    priority: "medium",
    image: "",
    date: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [fetchingProduct, setFetchingProduct] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${productId}`
        );
        const product = response.data;

        setFormData({
          title: product.title || "",
          shortDesc: product.shortDesc || "",
          fullDesc: product.fullDesc || "",
          price: product.price || "",
          priority: product.priority || "medium",
          image: product.image || "",
          date: product.date
            ? product.date.split("T")[0]
            : new Date().toISOString().split("T")[0],
        });
        setFetchingProduct(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to load product");
        setFetchingProduct(false);
      }
    };

    if (productId && user) {
      fetchProduct();
    }
  }, [productId, user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const loadingToast = toast.loading("Updating product...");

    try {
      await axios.put(
        `http://localhost:5000/api/products/${productId}`,
        formData
      );

      toast.success("Product updated successfully!", { id: loadingToast });
      setTimeout(() => {
        router.push("/manage-products");
      }, 1500);
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error(error.response?.data?.message || "Failed to update product", {
        id: loadingToast,
      });
      setSubmitting(false);
    }
  };

  if (loading || fetchingProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      {/* Header */}
      <div className="bg-linear-to-r from-primary to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Edit Product</h1>
          <p className="text-lg opacity-90">Update the product details below</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Fresh Organic Tomatoes"
                />
              </div>
              <div>
                <label
                  htmlFor="shortDesc"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FiFileText className="inline mr-1" />
                  Short Description *
                </label>
                <input
                  type="text"
                  id="shortDesc"
                  name="shortDesc"
                  required
                  value={formData.shortDesc}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Brief product description (1-2 lines)"
                />
              </div>

              <div>
                <label
                  htmlFor="fullDesc"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Description *
                </label>
                <textarea
                  id="fullDesc"
                  name="fullDesc"
                  required
                  rows="4"
                  value={formData.fullDesc}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                  placeholder="Detailed product description..."
                ></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <FiDollarSign className="inline mr-1" />
                    Price (৳) *
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    required
                    step="1"
                    min="0"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="1500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="priority"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <FiTag className="inline mr-1" />
                    Priority *
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    required
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="high">High (Electronics)</option>
                    <option value="medium">Medium (Fashion)</option>
                    <option value="low">Low (Home & Kitchen)</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FiUpload className="inline mr-1" />
                  Image URL *
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  required
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="https://example.com/image.jpg"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter a valid image URL
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 btn bg-primary text-white hover:bg-primary/90 py-3 text-lg"
                >
                  {submitting ? "Updating Product..." : "Update Product"}
                </button>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 px-8"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
