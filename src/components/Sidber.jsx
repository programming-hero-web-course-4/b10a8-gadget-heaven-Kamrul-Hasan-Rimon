import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidber({ categories }) {
    return (
        <div>
            <ul>
                <li className='flex flex-col space-y-4'>
                    {categories.map((category) => (
                        <Link to={`/products/${category.category}` }
                            key={category.product_id}
                            className={`  text-lg font-medium p-3 rounded-lg text-center ${category.product_id === 0
                                ? "bg-purple-500 text-white"
                                : "bg-gray-200 text-gray-700"
                                } hover:bg-purple-500 hover:text-white transition`}
                        >
                            {category.category}
                        </Link>
                    ))}
                </li>
            </ul>
        </div>
    )
}
