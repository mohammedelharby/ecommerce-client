import React from 'react';

const Banner = () => {
  const bannerItems = [
    {
      id: 1,
      image: '/images/banner1.jpg',
      title: 'Summer Collection',
      discount: '30% - 50% OFF',
      description: 'New arrivals for the hot season'
    },
    {
      id: 2,
      image: '/images/banner2.jpg',
      title: 'Smartphones',
      discount: '25% OFF',
      description: 'Latest models & brands'
    },
    {
      id: 3,
      image: '/images/banner3.jpg',
      title: 'Home Decor',
      discount: '35% OFF',
      description: 'Modern furniture & accessories'
    },
    {
      id: 4,
      image: '/images/banner4.jpg',
      title: 'Fitness Gear',
      discount: '40% OFF',
      description: 'Workout equipment & apparel'
    }
  ];

  // صور بديلة من الإنترنت
  const fallbackImages = [
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* العمود الأول - Summer Collection بطول العمود الثاني كامل */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="flex-1">
              <img
                src={bannerItems[0].image}
                alt={bannerItems[0].title}
                className="w-full h-full min-h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = fallbackImages[0];
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{bannerItems[0].title}</h3>
              <p className="text-[#049473] text-xl font-semibold mb-3">{bannerItems[0].discount}</p>
              <p className="text-gray-600 text-lg">{bannerItems[0].description}</p>
              <button className="mt-4 bg-[#049473] text-white px-8 py-3 rounded-lg hover:bg-[#037a61] transition-colors font-semibold text-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* العمود الثاني - الصور الثلاثة */}
        <div className="lg:col-span-1">
          <div className="grid grid-rows-2 gap-6 h-full">
            
            {/* الصف العلوي - Smartphones و Home Decor */}
            <div className="grid grid-cols-2 gap-6">
              {/* Smartphones */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <img
                  src={bannerItems[1].image}
                  alt={bannerItems[1].title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = fallbackImages[1];
                  }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{bannerItems[1].title}</h3>
                  <p className="text-[#049473] text-base font-semibold mb-1">{bannerItems[1].discount}</p>
                  <p className="text-gray-600 text-sm">{bannerItems[1].description}</p>
                  <button className="mt-3 bg-[#049473] text-white px-4 py-2 rounded-lg hover:bg-[#037a61] transition-colors text-sm">
                    View Deals
                  </button>
                </div>
              </div>

              {/* Home Decor */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <img
                  src={bannerItems[2].image}
                  alt={bannerItems[2].title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = fallbackImages[2];
                  }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{bannerItems[2].title}</h3>
                  <p className="text-[#049473] text-base font-semibold mb-1">{bannerItems[2].discount}</p>
                  <p className="text-gray-600 text-sm">{bannerItems[2].description}</p>
                  <button className="mt-3 bg-[#049473] text-white px-4 py-2 rounded-lg hover:bg-[#037a61] transition-colors text-sm">
                    Explore
                  </button>
                </div>
              </div>
            </div>

            {/* الصف السفلي - Fitness Gear بعرض كامل */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <img
                src={bannerItems[3].image}
                alt={bannerItems[3].title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = fallbackImages[3];
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{bannerItems[3].title}</h3>
                <p className="text-[#049473] text-xl font-semibold mb-3">{bannerItems[3].discount}</p>
                <p className="text-gray-600 text-lg">{bannerItems[3].description}</p>
                <button className="mt-4 bg-[#049473] text-white px-8 py-3 rounded-lg hover:bg-[#037a61] transition-colors font-semibold text-lg">
                  Get Fit Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;