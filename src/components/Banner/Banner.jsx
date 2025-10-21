const Banner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6"> {/* container أكبر */}
      <div className="grid grid-flow-col grid-rows-3 gap-4"> {/* grid أكبر */}
        {/* العمود الأول - يمتد على 3 صفوف */}
        <div className="row-span-3">
          <img
            src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"}
            alt="Sunglasses"
            className="w-full h-full object-cover rounded-lg" /* يملأ المساحة */
          />
          <div className="mt-3 p-2"> {/* مسافة أكبر للنص */}
            <p className="text-lg font-semibold">Sunglasses Products</p>
            <p className="text-green-600 text-base font-medium">20% - 30% off</p>
          </div>
        </div>

        {/* العمود الثاني - به صورتين */}
        <div className="col-span-2 space-y-4">
          {/* الصورة الأولى */}
          <div>
            <img
              src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"}
              alt="Sunglasses"
              className="w-full h-48 object-cover rounded-lg" /* ارتفاع أكبر */
            />
            <div className="mt-3 p-2">
              <p className="text-lg font-semibold">Sunglasses Products</p>
              <p className="text-green-600 text-base font-medium">20% - 30% off</p>
            </div>
          </div>

          {/* الصورة الثانية */}
          <div>
            <img
              src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"}
              alt="Sunglasses"
              className="w-full h-48 object-cover rounded-lg" /* ارتفاع أكبر */
            />
            <div className="mt-3 p-2">
              <p className="text-lg font-semibold">Sunglasses Products</p>
              <p className="text-green-600 text-base font-medium">20% - 30% off</p>
            </div>
          </div>
        </div>

        {/* العمود الثالث - يمتد على عمودين وصفين */}
        <div className="col-span-2 row-span-2">
          <img
            src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"}
            alt="Sunglasses"
            className="w-full h-full object-cover rounded-lg" /* يملأ المساحة */
          />
          <div className="mt-3 p-2">
            <p className="text-lg font-semibold">Sunglasses Products</p>
            <p className="text-green-600 text-base font-medium">20% - 30% off</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;