import React from 'react'
import { useOrderStore } from '../stores/useOrderStore'
import { useNavigate } from 'react-router-dom';

const Orders = () => {

    const navigate = useNavigate();
    const { orders, selectOrder } = useOrderStore();

    const handleSelectOrder = (order) => {
        selectOrder(order);
        navigate(`/profile/${order._id}`);
    }
    
    return (
        <div className="w-full mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Your Orders</h1>
            {orders.length === 0 ? (
                <p className="text-gray-600 font-semibold">No orders found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex flex-col justify-between">
                            <img
                                src={order.image}
                                alt={order.name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-lg font-semibold text-gray-800">{order.name}</h2>
                            <button onClick={() => handleSelectOrder(order)} className='bg-green-500 hover:bg-green-600 cursor-pointer transition py-1.5 mt-1.5 rounded-lg text-white'>
                                Track Package
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Orders