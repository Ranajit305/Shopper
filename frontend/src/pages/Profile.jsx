import React, { useEffect, useState } from "react";
import { User, ShoppingCart, MapPin, LogOut } from "lucide-react";
import { useAuthStore } from "../stores/useAuthStore";
import { useOrderStore } from "../stores/useOrderStore";
import Orders from "../components/Orders";
import Address from "../components/Address";
import { useCartStore } from "../stores/useCartStore";


const Profile = () => {

    const { user, logout } = useAuthStore();
    const { cartLogout } = useCartStore();
    const { getOrders, orderLogout } = useOrderStore();

    const [state, setState] = useState('Orders');

    const handleLogout = () => {
        logout();
        cartLogout();
        orderLogout();
    }

    useEffect(() => {
        getOrders();
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="min-h-screen py-8 px-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">My Profile</h1>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start">
                {/* Profile Sidebar */}
                <div className="w-full md:w-1/3 border-b md:border-0 md:border-r border-gray-200 p-6">
                    <div className="flex items-center space-x-4">
                        <User className="w-16 h-16 text-gray-700" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">{user?.name}</h2>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <button onClick={() => setState('Orders')} className="flex items-center space-x-3 w-full px-4 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition cursor-pointer">
                            <ShoppingCart className="w-5 h-5 text-gray-700" />
                            <span className="text-gray-700">Orders</span>
                        </button>
                        <button onClick={() => setState('Address')} className="flex items-center space-x-3 w-full px-4 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition cursor-pointer">
                            <MapPin className="w-5 h-5 text-gray-700" />
                            <span className="text-gray-700">Address</span>
                        </button>
                        <button onClick={() => handleLogout()} className="flex items-center space-x-3 w-full px-4 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition cursor-pointer">
                            <LogOut className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="w-full md:w-2/3 pt-6 md:pl-6">
                    {state === 'Orders' ? <Orders /> : <Address />}
                </div>
            </div>
        </div>
    );
};

export default Profile;