import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Pink");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // بيانات المنتجات مع صور متعددة
  const products = {
    1: {
      id: 1,
      name: "Dell Laptop",
      price: "$2,500",
      originalPrice: "$2,800",
      category: "Electronics",
      description:
        "High-performance Dell laptop with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for gaming, programming, and professional work.",
      features: [
        "Intel Core i7-11th Gen Processor",
        "16GB DDR4 RAM",
        "512GB NVMe SSD",
        '15.6" Full HD Display',
        "NVIDIA GeForce GTX 1650",
        "Windows 11 Pro",
        "Backlit Keyboard",
        "USB-C, HDMI, and multiple USB ports",
      ],
      rating: 4.5,
      reviews: 128,
      colors: ["Pink", "Black", "Silver", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      images: [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    2: {
      id: 2,
      name: "Samsung Phone",
      price: "$1,200",
      originalPrice: "$1,400",
      category: "Electronics",
      description:
        "Latest Samsung Galaxy smartphone with advanced camera system, 5G connectivity, and stunning AMOLED display.",
      features: [
        '6.7" Dynamic AMOLED Display',
        "Triple Camera System (108MP)",
        "5G Connectivity",
        "128GB Storage",
        "4500mAh Battery",
        "Android 13",
        "Wireless Charging",
        "IP68 Water Resistance",
      ],
      rating: 4.7,
      reviews: 89,
      colors: ["Black", "White", "Blue", "Green"],
      sizes: ["128GB", "256GB", "512GB", "1TB"],
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    3: {
      id: 3,
      name: "Desk Lamp",
      price: "$45",
      originalPrice: "$60",
      category: "Home",
      description:
        "Modern LED desk lamp with adjustable brightness and color temperature for comfortable working.",
      features: [
        "LED Technology",
        "Adjustable Brightness",
        "Color Temperature Control",
        "USB Charging Port",
        "Touch Control",
        "Flexible Arm Design",
      ],
      rating: 4.3,
      reviews: 156,
      colors: ["Black", "White", "Silver"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    4: {
      id: 4,
      name: "Sports T-Shirt",
      price: "$150",
      originalPrice: "$180",
      category: "Clothing",
      description:
        "Comfortable sports t-shirt made from breathable fabric, perfect for workouts and casual wear.",
      features: [
        "100% Cotton Material",
        "Moisture Wicking Technology",
        "Machine Washable",
        "Comfortable Fit",
        "Durable Construction",
        "Available in Multiple Colors",
      ],
      rating: 4.2,
      reviews: 67,
      colors: ["Pink", "Black", "White", "Blue", "Green"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    5: {
      id: 5,
      name: "Programming Book",
      price: "$80",
      originalPrice: "$100",
      category: "Books",
      description:
        "Comprehensive programming guide covering modern web development technologies and best practices.",
      features: [
        "500+ Pages",
        "Full-Color Illustrations",
        "Code Examples",
        "Exercises & Projects",
        "Digital Resources",
        "Beginner to Advanced",
      ],
      rating: 4.6,
      reviews: 234,
      colors: ["Blue", "Red", "Green"],
      sizes: ["Paperback", "Hardcover", "E-book"],
      images: [
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    6: {
      id: 6,
      name: "Smart Watch",
      price: "$800",
      originalPrice: "$950",
      category: "Electronics",
      description:
        "Advanced smartwatch with health monitoring, GPS tracking, and smartphone connectivity.",
      features: [
        "Heart Rate Monitor",
        "GPS Tracking",
        "Water Resistant",
        "7-Day Battery Life",
        "Smartphone Notifications",
        "Fitness Tracking",
      ],
      rating: 4.4,
      reviews: 189,
      colors: ["Black", "Silver", "Gold", "Blue"],
      sizes: ["38mm", "42mm", "44mm", "46mm"],
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    7: {
      id: 7,
      name: "Gaming Mouse",
      price: "$120",
      originalPrice: "$150",
      category: "Electronics",
      description:
        "High-precision gaming mouse with RGB lighting and customizable buttons for professional gaming.",
      features: [
        "High DPI Sensor (16000 DPI)",
        "RGB LED Lighting",
        "Programmable Buttons",
        "Ergonomic Design",
        "Wireless Connectivity",
        "Long Battery Life",
      ],
      rating: 4.1,
      reviews: 92,
      colors: ["Black", "White", "Red", "Blue"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605773527852-c546e8584d74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    8: {
      id: 8,
      name: "Wireless Headphones",
      price: "$300",
      originalPrice: "$350",
      category: "Electronics",
      description:
        "Premium wireless headphones with noise cancellation, superior sound quality, and comfortable design for long listening sessions.",
      features: [
        "Active Noise Cancellation",
        "30-hour Battery Life",
        "Quick Charge (5 min = 3 hours)",
        "Premium Sound Quality",
        "Comfortable Over-Ear Design",
        "Bluetooth 5.0",
        "Built-in Microphone",
        "Foldable Design",
      ],
      rating: 4.3,
      reviews: 156,
      colors: ["Black", "White", "Red", "Blue"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    9: {
      id: 9,
      name: "Water Bottle",
      price: "$25",
      originalPrice: "$35",
      category: "Sports",
      description:
        "Insulated stainless steel water bottle that keeps drinks cold for 24 hours and hot for 12 hours.",
      features: [
        "Stainless Steel Construction",
        "24-Hour Cold Retention",
        "12-Hour Hot Retention",
        "Leak-Proof Design",
        "BPA-Free",
        "Multiple Colors Available",
      ],
      rating: 4.4,
      reviews: 203,
      colors: ["Blue", "Black", "Pink", "Green", "Purple"],
      sizes: ["500ml", "750ml", "1L"],
      images: [
        "https://images.unsplash.com/photo-1584735175097-719d848f8449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    10: {
      id: 10,
      name: "Backpack",
      price: "$90",
      originalPrice: "$120",
      category: "Accessories",
      description:
        "Durable and spacious backpack perfect for travel, work, or outdoor adventures.",
      features: [
        "30L Capacity",
        "Multiple Compartments",
        "Laptop Compartment",
        "Water Resistant",
        "Ergonomic Straps",
        "USB Charging Port",
      ],
      rating: 4.5,
      reviews: 178,
      colors: ["Black", "Gray", "Blue", "Green"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    11: {
      id: 11,
      name: "Wireless Headphones",
      price: "$299",
      originalPrice: "$399",
      category: "Electronics",
      description:
        "Premium wireless headphones with noise cancellation, superior sound quality, and comfortable design for long listening sessions.",
      features: [
        "Active Noise Cancellation",
        "30-hour Battery Life",
        "Quick Charge (5 min = 3 hours)",
        "Premium Sound Quality",
        "Comfortable Over-Ear Design",
        "Bluetooth 5.0",
        "Built-in Microphone",
        "Foldable Design",
      ],
      rating: 4.3,
      reviews: 156,
      colors: ["Black", "White", "Red", "Blue"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    12: {
      id: 12,
      name: "Smart Watch",
      price: "$199",
      originalPrice: "$299",
      category: "Electronics",
      description:
        "Advanced smartwatch with health monitoring, GPS tracking, and smartphone connectivity.",
      features: [
        "Heart Rate Monitor",
        "GPS Tracking",
        "Water Resistant",
        "7-Day Battery Life",
        "Smartphone Notifications",
        "Fitness Tracking",
      ],
      rating: 4.4,
      reviews: 189,
      colors: ["Black", "Silver", "Gold", "Blue"],
      sizes: ["38mm", "42mm", "44mm", "46mm"],
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    13: {
      id: 13,
      name: "Running Shoes",
      price: "$89",
      originalPrice: "$129",
      category: "Sports",
      description:
        "High-performance running shoes designed for comfort and durability during long-distance runs.",
      features: [
        "Breathable Mesh Upper",
        "Cushioned Midsole",
        "Durable Rubber Outsole",
        "Lightweight Design",
        "Shock Absorption",
        "Available in Multiple Colors",
      ],
      rating: 4.2,
      reviews: 234,
      colors: ["Black", "White", "Blue", "Red"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    14: {
      id: 14,
      name: "Backpack",
      price: "$49",
      originalPrice: "$79",
      category: "Accessories",
      description:
        "Durable and spacious backpack perfect for travel, work, or outdoor adventures.",
      features: [
        "30L Capacity",
        "Multiple Compartments",
        "Laptop Compartment",
        "Water Resistant",
        "Ergonomic Straps",
        "USB Charging Port",
      ],
      rating: 4.5,
      reviews: 178,
      colors: ["Black", "Gray", "Blue", "Green"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    15: {
      id: 15,
      name: "Camera",
      price: "$599",
      originalPrice: "$799",
      category: "Electronics",
      description:
        "Professional DSLR camera with advanced features for photography enthusiasts and professionals.",
      features: [
        "24MP APS-C Sensor",
        "4K Video Recording",
        "WiFi & Bluetooth",
        "3-inch Touchscreen",
        "Built-in Flash",
        "Interchangeable Lenses",
      ],
      rating: 4.6,
      reviews: 312,
      colors: ["Black", "Silver"],
      sizes: ["Body Only", "With Kit Lens"],
      images: [
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <Link to="/" className="text-[#049473] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            fill="url(#half-fill)"
          />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 text-gray-300 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Title */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Product Details
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#049473]">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/" className="text-gray-500 hover:text-[#049473]">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-medium">
              {product.category}
            </span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* صور المنتج */}
          <div className="space-y-4">
            {/* الصورة الرئيسية مع تأثير الزوم */}
            <div
              className="relative overflow-hidden rounded-lg bg-white shadow-lg"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{ height: "500px" }}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isHovering ? "scale-150" : "scale-100"
                }`}
                style={{
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }}
              />

              {/* مؤشر الزوم */}
              {isHovering && (
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  🔍 Zoom
                </div>
              )}
            </div>

            {/* الصور المصغرة */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? "border-[#049473] shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-[#049473] bg-opacity-20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mt-3 mb-2">
                {product.name}
              </h1>

              {/* التقييم */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* السعر */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-[#049473]">
                  {product.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                  Save $
                  {parseInt(product.originalPrice.replace("$", "")) -
                    parseInt(product.price.replace("$", ""))}
                </span>
              </div>
            </div>

            {/* الوصف */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* خيارات المنتج */}
            <div className="space-y-6">
              {/* الألوان */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Color: {selectedColor}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color
                          ? "border-[#049473] bg-[#049473] text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* الأحجام */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Size: {selectedSize}
                  </h3>
                  <button className="text-[#049473] text-sm hover:underline">
                    View Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                        selectedSize === size
                          ? "border-[#049473] bg-[#049473] text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* الكمية */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Quantity
                </h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* الميزات */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-[#049473] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* أزرار الإجراءات */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex-1 bg-[#049473] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#037a61] transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Buy Now
                </button>
                <button className="px-6 py-3 border border-[#049473] text-[#049473] rounded-lg font-semibold hover:bg-[#049473] hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>30-Day Return</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                    />
                  </svg>
                  <span>2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* المنتجات المشابهة */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(products)
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Save $
                      {parseInt(relatedProduct.originalPrice.replace("$", "")) -
                        parseInt(relatedProduct.price.replace("$", ""))}
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {relatedProduct.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-2 text-gray-800 group-hover:text-[#049473] transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <span className="text-xl font-bold text-[#049473]">
                          {relatedProduct.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {relatedProduct.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(relatedProduct.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300 fill-current"
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          ({relatedProduct.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};

export default ProductDetails;
