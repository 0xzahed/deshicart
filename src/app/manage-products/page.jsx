"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { FiEdit2, FiTrash2, FiPlus, FiEye, FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

export default function ManageProductsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [fetchingProducts, setFetchingProducts] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
        setFetchingProducts(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setFetchingProducts(false);
      }
    };

    if (user) {
      fetchProducts();
    }
  }, [user]);

  const handleDelete = async (productId) => {
    const loadingToast = toast.loading("Deleting product...");

    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);

      setProducts(products.filter((p) => (p._id || p.id) !== productId));
      setDeleteConfirm(null);
      toast.success("Product deleted successfully!", { id: loadingToast });
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error(error.response?.data?.message || "Failed to delete product", {
        id: loadingToast,
      });
    }
  };

  const getCategoryFromPriority = (priority) => {
    const categoryMap = {
      high: "Electronics",
      medium: "Fashion",
      low: "Home & Kitchen",
    };
    return categoryMap[priority] || "Other";
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getCategoryFromPriority(product.priority)
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  if (loading || fetchingProducts) {
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Manage Products</h1>
              <p className="text-lg opacity-90">
                View and manage all your products
              </p>
            </div>
            <Link
              href="/add-product"
              className="btn bg-white text-primary hover:bg-gray-100 border-none w-fit"
            >
              <FiPlus className="text-xl" />
              Add New Product
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
          <div className="mt-4 text-gray-600">
            Total Products:{" "}
            <span className="font-semibold text-primary">
              {filteredProducts.length}
            </span>
          </div>
        </div>

        {/* Products Table */}
        {filteredProducts.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Priority</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr
                      key={product._id || product.id}
                      className="hover:bg-gray-50 border-b border-gray-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={
                                product.image ||
                                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                              }
                              alt={product.title || "Product image"}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold">{product.title}</div>
                            <div className="text-sm text-gray-500 line-clamp-1">
                              {product.shortDesc || "No description"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="badge badge-lg bg-secondary text-primary border-none">
                          {getCategoryFromPriority(product.priority)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-primary">
                          ৳{product.price}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`badge ${
                            product.priority === "high"
                              ? "badge-error"
                              : product.priority === "medium"
                              ? "badge-warning"
                              : "badge-success"
                          }`}
                        >
                          {product.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/items/${product._id || product.id}`}
                            className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 border-none"
                            title="View"
                          >
                            <FiEye />
                          </Link>
                          <Link
                            href={`/edit-product/${product._id || product.id}`}
                            className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 border-none"
                            title="Edit"
                          >
                            <FiEdit2 />
                          </Link>
                          <button
                            onClick={() =>
                              setDeleteConfirm(product._id || product.id)
                            }
                            className="btn btn-sm bg-red-500 text-white hover:bg-red-600 border-none"
                            title="Delete"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg mb-6">No products found.</p>
            <Link
              href="/add-product"
              className="btn bg-primary text-white hover:bg-primary/90"
            >
              <FiPlus />
              Add Your First Product
            </Link>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Confirm Delete</h3>
            <p className="mb-6">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>
            <div className="modal-action">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="btn bg-red-500 text-white hover:bg-red-600 border-none"
              >
                Delete
              </button>
            </div>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => setDeleteConfirm(null)}
          ></div>
        </div>
      )}
    </div>
  );
}
