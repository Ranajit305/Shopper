import React, { useEffect } from 'react'
import { useProductStore } from '../stores/useProductStore'
import { Trash } from 'lucide-react';

const ListProducts = () => {

    const { products, deleteProduct } = useProductStore();

    return (
        <div className="p-4 bg-white mx-auto rounded">
            <h1 className="text-xl font-bold mb-4 text-center">
                Product Management
            </h1>
            <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs sm:text-sm text-gray-600">
                            PRODUCT
                        </th>
                        <th className="px-4 py-2 text-center hidden sm:table-cell sm:text-sm text-gray-600">
                            PRICE
                        </th>
                        <th className="px-4 py-2 text-center hidden sm:table-cell sm:text-sm text-gray-600">
                            CATEGORY
                        </th>
                        <th className="px-4 py-2 text-center text-xs sm:text-sm text-gray-600">
                            ACTIONS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="border-b last:border-none text-center">
                            <td className="px-4 py-2 flex items-center gap-4">
                                <img
                                    src={product?.image}
                                    alt={product?.name}
                                    className="w-12 h-12 object-cover rounded"
                                />
                                <span className="text-xs sm:text-base">{product?.name}</span>
                            </td>
                            <td className={`px-4 py-2 text-sm sm:text-base hidden sm:table-cell`}>₹{product?.price}</td>
                            <td className={`px-4 py-2 text-sm sm:text-base hidden sm:table-cell`}>{product?.category}</td>
                            <td className="px-4 py-2">
                                <button onClick={() => deleteProduct(product?._id)} className="text-red-500 hover:text-red-500 cursor-pointer">
                                    <Trash className='size-5 sm:size-6'/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListProducts