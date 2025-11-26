"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiStar,
  FiShoppingCart,
  FiHeart,
  FiTruck,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

export default function ItemDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const products = response.data;
        const currentProduct = products.find(
          (p) => (p._id || p.id) === params.id
        );

        if (currentProduct) {
          setProduct(currentProduct);
          const related = products
            .filter(
              (p) =>
                p.category === currentProduct.category &&
                (p._id || p.id) !== params.id
            )
            .slice(0, 4);
          setRelatedProducts(related);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Product Not Found
        </h2>
        <Link href="/items" className="btn bg-primary text-white">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <FiArrowLeft className="text-xl" />
          <span className="font-medium">Back to Products</span>
        </button>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative h-96 md:h-full min-h-[400px] rounded-xl overflow-hidden">
              <Image
                src={
                  product.image ||
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                }
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.discount && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                  -{product.discount}% OFF
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-3">
                <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`text-lg ${
                        i < (product.rating || 4)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({product.rating || 4.0}) • 156 Reviews
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <p className="text-green-600 font-medium mt-2">
                    You save ${(product.oldPrice - product.price).toFixed(2)} (
                    {product.discount}%)
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description ||
                    "Fresh and organic product sourced directly from local farms. Perfect for your daily needs with guaranteed quality and freshness."}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x border-gray-300 font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Total: ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 mb-6">
                <button className="flex-1 btn bg-primary text-white hover:bg-primary/90 py-4 text-lg">
                  <FiShoppingCart className="text-xl" />
                  Add to Cart
                </button>
                <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white p-4">
                  <FiHeart className="text-xl" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <FiTruck className="text-3xl text-primary mb-2" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FiShield className="text-3xl text-primary mb-2" />
                  <span className="text-sm font-medium">Quality Assured</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FiCheckCircle className="text-3xl text-primary mb-2" />
                  <span className="text-sm font-medium">100% Organic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  href={`/items/${related._id || related.id}`}
                  key={related._id || related.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={
                        related.image ||
                        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                      }
                      alt={related.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {related.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        ${related.price}
                      </span>
                      <button className="btn btn-sm bg-primary text-white">
                        View
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
