import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { allAddToWishlist, removeWishlist } from "../utilities";

const Wishlist = () => {
  const [wishgadget, setWishgadget] = useState([])
  console.log(wishgadget)
  useEffect(() => {
    const addtowishlist = allAddToWishlist()
    setWishgadget(addtowishlist)
    console.log(addtowishlist)
  }, [])
  const handleremovewishlist = (id) => {
    removeWishlist(id)
    const addtowishlist = allAddToWishlist()
    setWishgadget(addtowishlist)

  }
  const addtocart = (id) => {
    allAddToWishlist(id)
  }
  return (
    <div className=" mx-40 mt-8 p-4">
      {/* Wishlist Header */}
      <h2 className="text-2xl font-bold mb-6">WishList</h2>
      {
        wishgadget.map((gad2) => (
          <div
            key={gad2.product_id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
          >
            {/* Product Details */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              {/* Product Image */}
              <img
                className="h-20 w-20 sm:w-auto bg-gray-200 rounded"
                src={gad2.product_image}
                alt={gad2.product_title}
              />
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold">{gad2.product_title}</h3>
                <p className="text-sm text-gray-600 mt-1">{gad2.description}</p>
                <p className="text-lg font-semibold mt-2">Price: ${gad2.price}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
              <button
                onClick={() => addtocart(gad2.product_id)}
                className="btn btn-primary w-full sm:w-auto"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleremovewishlist(gad2.product_id)}
                className="text-red-500 border-2 border-red-500 rounded-full p-1 hover:text-red-700 text-2xl"
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>


        ))
      }


    </div>
  );
};

export default Wishlist;






