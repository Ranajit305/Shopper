import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuthStore } from '../stores/useAuthStore';
import { useCartStore } from '../stores/useCartStore';

const Product = () => {

    const { user } = useAuthStore();
    const { addToCart } = useCartStore();

    const location = useLocation();
    const product = location.state?.product;

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when Product page loads
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center p-5 pt-10">
            <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">
                {/* Left: Product Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto md:h-full rounded-lg object-cover"
                    />
                </div>

                {/* Right: Product Details */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <h1 className="text-xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
                    <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">{product.description}</p>
                    <p className="text-2xl font-semibold text-blue-600 mt-4">₹{product.price}</p>

                    {user && <button
                        className="mt-6 w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out"
                        onClick={() => addToCart(product._id)}
                    >
                        Add to Cart
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Product