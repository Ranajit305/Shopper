import React, { useEffect, useState } from "react";
import { Plus, Minus, Trash, Loader } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";
import { useNavigate } from "react-router-dom";
import { useOrderStore } from "../stores/useOrderStore";
import { useAuthStore } from "../stores/useAuthStore";
import toast from "react-hot-toast";

const Cart = () => {

    const navigate = useNavigate();

    const { shippingAddress } = useAuthStore();
    const { cart, getCart, isGettingCart, removeFromCart, updateQuantity } = useCartStore();
    const { placeOrder } = useOrderStore();

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item?.product?.price * item?.quantity, 0);
    }

    const handleOrder = () => {
        if (!shippingAddress.fullName || !shippingAddress.address || !shippingAddress.city || !shippingAddress.state ||
            !shippingAddress.postalCode || !shippingAddress.country || !shippingAddress.phone) {
                toast.dismiss();
                toast.error('Update your Address');
                return;
            }
        placeOrder(cart, shippingAddress);
    }

    useEffect(() => {
        getCart();
    }, [])

    return (
        <div className="min-h-screen py-8 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-semibold text-gray-800 text-center mb-6">Shopping Cart</h1>
            {isGettingCart === true ? (<Loader className="animate-spin text-blue-500 mx-auto size-10"/>) : (
                <div className = "bg-white p-6 rounded-lg shadow-md">
                {cart.length > 0 ? (
                    cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-4">
                <div onClick={() => navigate(`/shop/${item?.product?._id}`, { state: { product: item.product } })} className="flex flex-col sm:flex-row items-center gap-4 cursor-pointer">
                    <div>
                        <img className="w-24 h-full" src={item?.product?.image} alt="product.image" />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-sm sm:text-lg font-semibold text-gray-700">{item?.product?.name}</h2>
                        <p className="text-gray-600 text-sm sm:text-base">₹{item?.product?.price}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => updateQuantity(item?.product?._id, "decrease")}
                        className={`p-2 rounded-lg transition ${item?.quantity === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        disabled={item.quantity === 1}
                    >
                        <Minus className="w-4 h-4 text-gray-700" />
                    </button>

                    <span className="text-gray-800 font-medium">{item?.quantity}</span>
                    <button
                        onClick={() => updateQuantity(item?.product?._id, "increase")}
                        className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                        <Plus className="w-4 h-4 text-gray-700" />
                    </button>
                    <button onClick={() => removeFromCart(item?.product?._id)} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        <Trash className="w-4 h-4" />
                    </button>

                </div>
            </div>
            ))
            ) : (
            <p className="text-2xl font-semibold font-sans text-gray-600 text-center">Your cart is empty.</p>
                )}
            <div className="mt-6 flex justify-between items-center">
                <h2 className="sm:text-xl font-bold text-gray-700">Total: ₹{getTotalPrice()}</h2>
                <button onClick={() => handleOrder()} disabled={cart.length === 0} className="p-2.5 bg-blue-600 text-sm sm:text-base text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer">
                    Proceed to Checkout
                </button>
            </div>
        </div>
            )}
        </div>
    );
};

export default Cart;
