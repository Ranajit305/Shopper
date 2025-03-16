import React, { useEffect, useState } from "react";
import CreateProduct from "../components/CreateProduct";
import ListProducts from "../components/ListProducts";
import ManageOrders from "../components/ManageOrders";
import { useProductStore } from "../stores/useProductStore";

const Admin = () => {

    const { getProducts, getAllOrders } = useProductStore();
    
    const [active, setActive] = useState('create');

    useEffect(() => {
        getProducts('All');
        getAllOrders();
    }, [])

    return (
        <div className="min-h-screen max-w-4xl mx-auto pt-10">
            {/* Header */}
            <h1 className="text-gray-800 text-3xl font-sans text-center mb-6">Admin Dashboard</h1>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row w-[75%] sm:w-full mx-auto justify-center gap-6 mb-6">
                <button
                    onClick={() => setActive("create")}
                    className={`text-sm sm:text-lg cursor-pointer px-5 py-2 font-semibold rounded-lg transition ${active === "create" ? "bg-green-600 text-white shadow-lg" : "bg-green-500 text-white hover:bg-green-600"
                        }`}
                >
                    Create Product
                </button>
                <button
                    onClick={() => setActive("product")}
                    className={`text-sm sm:text-lg cursor-pointer px-5 py-2 font-semibold rounded-lg transition ${active === "product" ? "bg-blue-600 text-white shadow-lg" : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                >
                    All Products
                </button>
                <button
                    onClick={() => setActive("order")}
                    className={`text-sm sm:text-lg cursor-pointer px-5 py-2 font-semibold rounded-lg transition ${active === "order" ? "bg-orange-600 text-white shadow-lg" : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                >
                    Manage Orders
                </button>
            </div>

            {/* Content Section */}
            <div className="p-6 rounded-lg text-center text-gray-700">
                {active === "create" && <CreateProduct />}
                {active === "product" && <ListProducts />}
                {active === 'order' && <ManageOrders />}
            </div>
        </div>

    );
};

export default Admin;
