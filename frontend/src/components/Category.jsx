import React, { useEffect, useState } from 'react'
import { useProductStore } from '../stores/useProductStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';

const Category = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const categories = [
            "All",
            "Smartphones",
            "Laptops",
            "Fashion",         
            "Kitchen",
            "Personal Care", 
            "Sports",
            "Books",
            "Toys",
            "Automotive", 
            "Health",
            "Groceries",         
            "Jewelry", 
            "Furniture",
            "Musical Instruments",
            "Luggage",
            "Industrial Tools",
            "Gaming",
            "Art & Crafts",
        ];

    const { getProducts, products, isGettingProducts } = useProductStore();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(location.state?.category || 'All');
    
    useEffect(() => {
        getProducts(selectedCategory);
    }, [selectedCategory])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedCategory])

    return (
        <>
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <h2 className="text-lg font-semibold border-b p-3 pt-20">Categories</h2>
                <div className="p-4 space-y-2">
                    {categories?.map((category) => (
                        <label key={category} className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={selectedCategory === category}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-4 h-4 text-blue-500"
                            />
                            <span className="text-gray-700">{category}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-1/2 left-5 transform -translate-y-1/2 rounded-full bg-blue-500 text-white p-2 focus:outline-none shadow-md transition-transform duration-300 ${isOpen ? "left-[235px]" : "left-5"
                    }`}
            >
                {isOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </button>


            <div className='py-8 px-6 max-w-7xl mx-auto'>
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-8">
                    Shop Our Latest Products
                </h1>

                {/* Loader (when isGettingProducts is true) */}
                {isGettingProducts ? (
                    <div className="flex justify-center items-center min-h-[300px]">
                        <Loader className='animate-spin size-12 text-blue-500'/>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products?.map((product, index) => (
                            <div
                                onClick={() => navigate(`/shop/${product._id}`, { state: { product } })}
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <h2 className="text-base font-semibold text-gray-700 mt-4">
                                    {product.name}
                                </h2>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>
    )
}

export default Category