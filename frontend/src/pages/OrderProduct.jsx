import React from 'react'
import { useOrderStore } from '../stores/useOrderStore';

const OrderProduct = () => {

    const { cancelOrder, currentOrder } = useOrderStore();

    return (
        <div className="w-[90%] md:w-[60%] lg:w-[35%] mx-auto p-6 m-10 bg-white rounded-lg shadow-lg border">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Details</h1>
            <img src={currentOrder.image} alt={currentOrder.name} className="w-full h-60 object-cover rounded-lg mb-4" />
            <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                    <p className="font-semibold">Product Name:</p>
                    <p>{currentOrder.name}</p>
                </div>
                <div>
                    <p className="font-semibold">Price:</p>
                    <p>₹{currentOrder.price}</p>
                </div>
                <div>
                    <p className="font-semibold">Quantity:</p>
                    <p>{currentOrder.quantity}</p>
                </div>
                <div>
                    <p className="font-semibold">Payment Status:</p>
                    <p className="text-green-500 font-bold">{currentOrder.paymentStatus}</p>
                </div>
                <div>
                    <p className="font-semibold">Order Status:</p>
                    <p className="text-blue-500 font-bold">{currentOrder.orderStatus}</p>
                </div>
                <div>
                    <p className="font-semibold">Total Amount:</p>
                    <p className="text-gray-900 font-bold">₹{currentOrder.price * currentOrder.quantity}</p>
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-6">Shipping Address</h2>
            <div className="mt-2 text-gray-700">
                <p><span className="font-semibold">Full Name:</span> {currentOrder.shippingAddress?.fullName}</p>
                <p><span className="font-semibold">Address:</span> {currentOrder.shippingAddress?.address}, {currentOrder.shippingAddress?.city}, {currentOrder.shippingAddress?.state} - {currentOrder.shippingAddress?.postalCode}</p>
                <p><span className="font-semibold">Country:</span> {currentOrder.shippingAddress?.country}</p>
                <p><span className="font-semibold">Phone:</span> {currentOrder.shippingAddress?.phone}</p>
            </div>
            {currentOrder.orderStatus !== 'Delivered' && currentOrder.orderStatus !== 'Cancelled' &&
                <button onClick={() => cancelOrder(currentOrder._id)} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-2 mt-3 shadow-md transition cursor-pointer">
                    Cancel Order
                </button>}
            {currentOrder.orderStatus === 'Cancelled' && <p className='text-center text-gray-500 font-semibold pt-4'>You have cancelled the order</p>}
        </div>
    )
}

export default OrderProduct