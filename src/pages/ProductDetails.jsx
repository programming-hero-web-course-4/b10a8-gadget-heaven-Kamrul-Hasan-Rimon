import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const productDetailsData = useLoaderData()
  const { id } = useParams()
  console.log(id)
  // console.log(productDetails.id)
  const [proDe, setProDe] = useState({})
  useEffect(() => {
    const singleproDe = productDetailsData.find((sp) => sp.product_id === id)
    setProDe(singleproDe)
  }, [productDetailsData, id])
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="bg-purple-500 text-white text-center py-8">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="text-lg mt-2">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Details Section */}
      <div className="max-w-5xl mx-auto mt-8 bg-white rounded-xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img className="w-64 h-64 bg-gray-200 rounded-lg" src={proDe.product_image} alt="" />
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-bold">{proDe.product_title}</h2>
          <p className="text-xl font-semibold text-gray-700 mt-4">Price: ${proDe.price}</p>

          {/* Stock Status */}
          {
            <p className={` ${proDe.availability === 'In stock' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} rounded-full px-4 py-1 text-sm font-medium inline-block mt-2`}>
              {proDe.availability}
            </p>

          }

          {/* Description */}
          <p className="text-gray-600 mt-4">
            {proDe.description}
          </p>

          {/* Specifications */}
          <h3 className="text-lg font-bold mt-6">Specification:</h3>
          <ul className="list-decimal list-inside mt-2 space-y-1 text-gray-600">
            {
                  proDe.specification?.map((spec) => <li>{spec}</li>)
            }
            {/* <li>{proDe.specification}</li> */}
            {/* <li>16GB RAM</li>
            <li>512GB SSD</li>
            <li>Touchscreen</li> */}
          </ul>

          {/* Ratings */}
          <div className="mt-6">
            <h3 className="text-lg font-bold">Rating</h3>
            <div className="flex items-center mt-2">
              {/* Star Rating */}
              <div className="rating">
                <input type="radio" name="rating" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-gray-300" />
              </div>
              <span className="ml-2 text-gray-600 text-sm">{proDe.rating}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button className="btn btn-primary flex items-center gap-2">
              <AiOutlineShoppingCart className="text-lg" />
              Add To Cart
            </button>
            <button className="btn btn-outline flex items-center gap-2">
              <AiOutlineHeart className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
