import React from "react";
import { Products } from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice/CartSlice";
import { ShoppingCart, Star } from "lucide-react";

const Product = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-14">
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-black text-white text-sm font-medium">
            New Collection 2026
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-slate-900">
            Discover Amazing Products
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500 text-lg">
            Explore premium quality products with modern design,
            unbeatable prices and fast delivery.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-12 gap-8">
          {Products.map((item) => (
            <div
              key={item.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <div className="group h-full overflow-hidden rounded-[30px] bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500">

                {/* Image Area */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200">

                  {/* Category */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black text-white">
                      {item.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-md">
                      <Star size={14} fill="gold" color="gold" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>

                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between">

                  <div>
                    <h2 className="text-xl font-bold text-slate-900 line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm text-slate-500">
                      Premium quality product crafted for modern lifestyle and everyday use.
                    </p>
                  </div>

                  <div className="mt-6">

                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-sm text-slate-500">Price</p>
                        <h3 className="text-3xl font-extrabold text-slate-900">
                          ₹{item.price}
                        </h3>
                      </div>

                      <span className="text-green-600 font-semibold">
                        In Stock
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <ShoppingCart size={18} />
                      Add To Cart
                    </button>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
