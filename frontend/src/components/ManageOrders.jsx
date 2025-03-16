import React from 'react'
import { useProductStore } from '../stores/useProductStore'

const ManageOrders = () => {

    const { orders, updateOrderStatus } = useProductStore();

    const handleStatusChange = (orderId, orderStatus) => {
        updateOrderStatus(orderId, orderStatus)
    };

    return (
        <div className=" mx-auto rounded">
            {orders.length > 0 ? (
                <div className="space-y-6 bg-white p-5 shadow-2xl rounded-lg">
                    <h1 className="text-xl font-semibold text-center border-b pb-4">Order Management</h1>
                    {orders.map((order, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center sm:justify-between border-b last:border-none pb-4 gap-4">

                            {/* Product Image & Details */}
                            <div className="w-full flex items-center justify-around sm:justify-start sm:gap-5 sm:w-80">
                                <img src={order.image} alt={order.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div className="text-center sm:text-left text-sm sm:text-lg">
                                    <h2 className=" font-medium text-gray-800">{order.name}</h2>
                                    <p className="text-gray-600">₹{order.price} x {order.quantity} = ₹{order.price * order.quantity}</p>
                                </div>
                            </div>

                            {/* User Details (Fetched from populated userId) */}
                            <div className="text-center sm:text-left text-sm sm:text-base">
                                <p><span className="font-semibold">Name:</span> {order.userId?.name || "N/A"}</p>
                                <p><span className="font-semibold">Email:</span> {order.userId?.email || "N/A"}</p>
                            </div>

                            {/* Order Status Dropdown */}
                            <select
                                className="w-full sm:w-auto p-2 border rounded-lg text-gray-700 bg-gray-100"
                                value={order.orderStatus}
                                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                            >
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 text-center">No orders available.</p>
            )}
        </div>

    )
}

export default ManageOrders