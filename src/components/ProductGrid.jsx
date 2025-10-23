import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const ProductGrid = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const products = [
    {
      id: 1,
      name: "Dell Laptop",
      price: "$2,500",
      image: "/images/product1.jpg",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Samsung Phone",
      price: "$1,200",
      image: "/images/product2.jpg",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: "$300",
      image: "/images/product3.jpg",
      category: "Electronics",
    },
    {
      id: 4,
      name: "Sports T-Shirt",
      price: "$150",
      image: "/images/product4.jpg",
      category: "Clothing",
    },
    {
      id: 5,
      name: "Programming Book",
      price: "$80",
      image: "/images/product5.jpg",
      category: "Books",
    },
    {
      id: 6,
      name: "Smart Watch",
      price: "$800",
      image: "/images/product6.jpg",
      category: "Electronics",
    },
    {
      id: 7,
      name: "Gaming Mouse",
      price: "$120",
      image: "/images/product7.jpg",
      category: "Electronics",
    },
    {
      id: 8,
      name: "Desk Lamp",
      price: "$45",
      image: "/images/product8.jpg",
      category: "Home",
    },
    {
      id: 9,
      name: "Water Bottle",
      price: "$25",
      image: "/images/product9.jpg",
      category: "Sports",
    },
    {
      id: 10,
      name: "Backpack",
      price: "$90",
      image: "/images/product10.jpg",
      category: "Accessories",
    },
  ];

  // صور بديلة
  const fallbackImages = [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1584735175097-719d848f8449?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h2>

      {/* 5 منتجات في الصف في الشاشات الكبيرة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link to={`/product/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  e.target.src = fallbackImages[index];
                }}
              />
            </Link>
            <div className="p-4">
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {product.category}
              </span>
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-semibold mt-2 text-gray-800 hover:text-[#049473] transition-colors cursor-pointer">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-[#049473]">
                  {product.price}
                </span>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-[#049473] text-white px-4 py-2 rounded-lg hover:bg-[#037a61] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};

export default ProductGrid;
