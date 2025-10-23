import React from 'react';

// استيراد الصور من مجلد assets (إذا حطيتهم في src/assets/images/)
import manImage from '../assets/images/men.PNG';
import womenImage from '../assets/images/women.PNG';
import watchesImage from '../assets/images/watches.PNG';
import bagsImage from '../assets/images/bags.PNG';
import shoesImage from '../assets/images/shoes.PNG';
import accessoriseImage from '../assets/images/accessorise.PNG';
import kidsImage from '../assets/images/kids.PNG';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Man', image: manImage },
    { id: 2, name: 'Women', image: womenImage },
    { id: 4, name: 'Watches', image: watchesImage },
    { id: 5, name: 'Bags', image: bagsImage },
    { id: 6, name: 'Shoes', image: shoesImage },
    { id: 7, name: 'Accessorise', image: accessoriseImage },
    { id: 3, name: 'Kids', image: kidsImage }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
          {categories.map((category) => (
            <div key={category.id} className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto mb-3 rounded-full overflow-hidden border-4 border-[#049473] group-hover:border-[#00e2ae] transition-colors duration-300">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-[#049473] transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;