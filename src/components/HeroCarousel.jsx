import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Electronics Sale",
      subtitle: "Up to 50% off on all gadgets",
      buttonText: "Explore Deals",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "New Arrivals",
      subtitle: "Fresh styles for every occasion",
      buttonText: "View Collection",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slides.length - 1) {
          return 0; // ارجع لأول صورة
        } else {
          return prev + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === slides.length - 1) {
        return 0; // ارجع لأول صورة
      } else {
        return prev + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return slides.length - 1; // اروح لآخر صورة
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <button className="bg-[#049473] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#037a61] transition-colors">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#049473] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#037a61] transition-colors"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#049473] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#037a61] transition-colors"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#049473]" : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
