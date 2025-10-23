import React, { useState } from 'react';

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <nav className="bg-[#049473] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          {/* Shopping by Categories for Desktop */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-2 px-6 py-3 bg-[#00e2ae] text-[#049473] font-semibold rounded-lg mr-4">
              <span>☰</span>
              Shopping by Categories
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <a href="#" className="hover:text-[#00e2ae] transition-colors py-4">Home</a>
            <a href="#" className="hover:text-[#00e2ae] transition-colors py-4">Products</a>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="hover:text-[#00e2ae] transition-colors py-4 flex items-center gap-1">
                Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Man</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</a>
              </div>
            </div>

            <a href="#" className="hover:text-[#00e2ae] transition-colors py-4">Offers</a>
            <a href="#" className="hover:text-[#00e2ae] transition-colors py-4">Elements</a>
          </div>

          {/* Shopping by Categories + Menu Button for Mobile */}
          <div className="lg:hidden flex-1">
            <button 
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-2 px-4 py-3 bg-[#00e2ae] text-[#049473] font-semibold rounded-lg w-full justify-center"
            >
              <span>☰</span>
              Shopping by Categories
            </button>
          </div>
        </div>

        {/* Mobile Categories Menu */}
        {isCategoriesOpen && (
          <div className="lg:hidden bg-[#00e2ae] text-[#049473] rounded-lg mt-2 py-2">
            <a href="#" className="block px-4 py-2 font-semibold hover:bg-[#049473] hover:text-white text-center">Home</a>
            <a href="#" className="block px-4 py-2 font-semibold hover:bg-[#049473] hover:text-white text-center">Products</a>
            <div className="border-t border-[#049473] mt-2 pt-2">
              <div className="px-4 py-2 font-bold text-center">Categories</div>
              <a href="#" className="block px-6 py-2 hover:bg-[#049473] hover:text-white text-center">Man</a>
              <a href="#" className="block px-6 py-2 hover:bg-[#049473] hover:text-white text-center">Women</a>
              <a href="#" className="block px-6 py-2 hover:bg-[#049473] hover:text-white text-center">Kids</a>
            </div>
            <a href="#" className="block px-4 py-2 font-semibold hover:bg-[#049473] hover:text-white text-center">Offers</a>
            <a href="#" className="block px-4 py-2 font-semibold hover:bg-[#049473] hover:text-white text-center">Elements</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;