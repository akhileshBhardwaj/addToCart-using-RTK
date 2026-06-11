import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  selectCartTotalPrice,
  selectedCartItems,
  clearCart,
  removeItem,
} from "../redux/cartSlice/CartSlice";
import { useDispatch, useSelector } from "react-redux";

//Tostify Notification
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const cartItemTotalPrice = useSelector(selectCartTotalPrice);
  const cartItem = useSelector(selectedCartItems);

  const dispatch = useDispatch();

  const removeItems = (item) => {
    dispatch(removeItem(item));

    toast.success("Item Removed", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className="min-h-screen bg-gray-500 py-10">
      {/* Tostify Notification */}
      <ToastContainer />
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Shopping Cart 🛒
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {/* Cart Item */}

            {cartItem.map((item) => (
              <div
                className="bg-gray-900 rounded-2xl shadow-md p-5 flex flex-col md:flex-row gap-5"
                key={item.id}
              >
                <img
                  src={item.imgSrc}
                  alt="product"
                  className="w-40 h-40 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-semibold">{item.title} </h2>

                  <p className="text-white mt-2">{item.description}</p>

                  <h3 className="text-3xl font-bold text-green-600 mt-4">
                    ₹{item.price}
                  </h3>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button
                      onClick={() => removeItems(item)}
                      className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Remove Cart
                    </button>

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-gray-900 rounded-2xl shadow-md p-6 h-fit sticky top-5">
            <h2 className="text-2xl font-bold mb-6">Cart Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span>{cartItem.length} </span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{cartItemTotalPrice} </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{cartItemTotalPrice} </span>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedItem(item);
                toast.success("Cart Cleared", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce,
                });
              }}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Buy Now
            </button>

            <button
              onClick={() => dispatch(clearCart())}
              className="w-full mt-3 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Clear Cart
            </button>

            <Link
              to="/"
              className="block text-center mt-4 text-blue-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* Popup model */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-2xl font-bold text-black">
                Checkout Product
              </h2>

              <button
                onClick={() => setSelectedItem(null)}
                className="text-3xl text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Product */}
              <div>
                <img
                  src={selectedItem.imgSrc}
                  alt={selectedItem.title}
                  className="w-full h-80 object-contain"
                />

                <h3 className="text-2xl font-bold mt-4 text-black">
                  {selectedItem.title}
                </h3>

                <p className="text-gray-600 mt-2">{selectedItem.description}</p>

                <h4 className="text-3xl font-bold text-green-600 mt-4">
                  ₹{selectedItem.price}
                </h4>
              </div>

              {/* Form */}
              <div>
                <h3 className="text-xl font-semibold mb-5 text-black">
                  Delivery Details
                </h3>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded-xl p-3 text-black"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border rounded-xl p-3 text-black"
                  />

                  <textarea
                    placeholder="Delivery Address"
                    rows="4"
                    className="w-full border rounded-xl p-3 text-black"
                  />

                  <button
                    onClick={() => {
                      alert("Order Placed Successfully 🎉");
                      setSelectedItem(null);
                    }}
                    className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700"
                  >
                    Confirm Order ₹{selectedItem.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
