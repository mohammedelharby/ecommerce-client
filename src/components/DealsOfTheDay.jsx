import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const DealsOfTheDay = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const dealsProducts = [
    {
      id: 11,
      name: "Wireless Headphones",
      price: "$299",
      originalPrice: "$399",
      discount: "25% OFF",
      image: "/images/product/bags.PNG",
      category: "Electronics",
    },
    {
      id: 12,
      name: "Smart Watch",
      price: "$199",
      originalPrice: "$299",
      discount: "33% OFF",
      image: "/images/product/shoes.PNG",
      category: "Electronics",
    },
    {
      id: 13,
      name: "Running Shoes",
      price: "$89",
      originalPrice: "$129",
      discount: "31% OFF",
      image: "/images/product/waches.PNG",
      category: "Sports",
    },
    {
      id: 14,
      name: "Backpack",
      price: "$49",
      originalPrice: "$79",
      discount: "38% OFF",
      image: "/images/product/belts.PNG",
      category: "Accessories",
    },
    {
      id: 15,
      name: "Camera",
      price: "$599",
      originalPrice: "$799",
      discount: "25% OFF",
      image: "/images/product/drees.PNG",
      category: "Electronics",
    },
  ];

  // صور بديلة من الإنترنت
  const fallbackImages = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* العنوان مع الخط العلوي */}
        <div className="border-t-2 border-gray-300 pt-8 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 inline-block">
            Deals Of The Day
          </h2>
          {/* الخط السفلي بطول الكلمة كلها */}
          <div className="h-1 bg-[#049473] w-full mt-2"></div>
        </div>

        {/* شبكة المنتجات - 5 منتجات جنب بعض */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {dealsProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* صورة المنتج */}
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = fallbackImages[index];
                    }}
                  />
                  {/* خصم */}
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    {product.discount}
                  </div>
                </div>
              </Link>

              {/* محتوى المنتج */}
              <div className="p-4">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {product.category}
                </span>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold mt-2 text-gray-800 line-clamp-2 hover:text-[#049473] transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>

                {/* الأسعار */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xl font-bold text-[#049473]">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* زر الإضافة للسلة */}
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full bg-[#049473] text-white py-2 rounded-lg mt-4 hover:bg-[#037a61] transition-colors font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* الخط السفلي */}
        <hr className="border-t-2 border-gray-300 mt-12" />

        {/* Login Modal */}
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      </div>
    </section>
  );
};

export default DealsOfTheDay;
