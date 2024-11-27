import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import modalimge from '../assets/images/Group.png'
export default function Cart({ setTotalCost, setGadgets, gadgets, handleremove, handlesort, totalCost }) {
    const [showModal, setShowModal] = useState(false)
    const navigateToHome = useNavigate()
    const handlePurchese = () => {
        setShowModal(true);
        setGadgets([]);
        setTotalCost(0);
    }


    const handleCloseModal = () => {
        setShowModal(false);
        navigateToHome('/')
    }
    return (
        <div>
            {/* Main Content */}
            <div className="max-w-5xl mx-auto mt-8 p-4">
                {/* Cart Section */}
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-xl font-bold">Cart</h2>
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg font-semibold">Total cost: ${totalCost.toFixed(2)}</h2>
                        <button onClick={() => handlesort('price')} className="btn btn-outline ">Sort by Price</button>
                        <button disabled={totalCost === 0 || gadgets.length === 0} onClick={() => handlePurchese()} className="btn btn-primary ">Purchase</button>
                    </div>
                </div>

                {/* Cart Item Example */}
                {
                    gadgets.map((gad) => (
                        <div key={gad.product_id} className="flex items-center justify-between mt-6 bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center gap-4">
                                {/* Placeholder for product image */}
                                <img className="w-16 h-16 bg-gray-200 rounded" src={gad.product_image} alt="" />
                                <div>
                                    <h3 className="text-lg font-semibold">{gad.product_title}</h3>
                                    <p className="text-sm text-gray-600">

                                        {gad.specification}
                                    </p>
                                    <p className="text-lg font-semibold mt-1">Price: ${gad.price}</p>
                                </div>
                            </div>
                            <button onClick={() => handleremove(gad.product_id)} className="text-red-500 border-2 border-red-500 rounded-full p-1 hover:text-red-700 text-2xl">
                                <AiOutlineClose />
                            </button>
                        </div>


                    ))
                }
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow-lg">
                        <img src={modalimge} alt="" />
                        <h2 className="text-2xl font-bold">Payment Successfully!</h2>
                        <p className="mt-2">Thanks for purchasing.</p>
                        <p>{totalCost.toFixed(2)}</p>
                        <button onClick={() => handleCloseModal()} className="mt-4 w-40 btn btn-primary">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
import PropTypes from 'prop-types';
