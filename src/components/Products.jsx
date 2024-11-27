import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

export default function Products() {
    const productsdata = useLoaderData()
    const { products: categoryParam } = useParams()
    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        if (categoryParam) {
            const filterbycategory = [...productsdata].filter((product) => product.category.toLowerCase() === categoryParam)
            setGadgets(filterbycategory);
        }
        else {
            setGadgets(productsdata.slice(0, 9))
        }

    }, [categoryParam, productsdata]);
    console.log(categoryParam)
    return (
        <div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-4/4">
                {gadgets
                    .map(product => (
                        <div
                            key={product.product_id}
                            className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center text-center"
                        >
                            <img
                                className="bg-gray-300 object-cover h-56 w-full rounded-lg mb-4"
                                src={product.product_image}
                                alt={product.product_title || 'Product'}
                            />
                            <h3 className="font-bold text-lg">{product.product_title}</h3>
                            <p className="text-gray-500 mb-4">Price: {product.price}</p>
                            <Link to={`/product/${product.product_id}`}>
                                <button className="btn btn-outline btn-primary">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}
