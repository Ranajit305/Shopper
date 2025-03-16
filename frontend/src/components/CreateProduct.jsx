import React, { useState } from 'react'
import { useProductStore } from '../stores/useProductStore';

const CreateProduct = () => {

    const { createProduct } = useProductStore();

    const categories = [
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

    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProduct({ ...newProduct, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        createProduct(newProduct);
        setNewProduct({
            name: "",
            description: "",
            price: "",
            category: "",
            image: "",
        });
    };

    return (
        <div className="flex justify-center items-center text-black text-left">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                <h2 className="text-xl font-bold text-center text-gray-700">
                    Create Product
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={newProduct.name}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, name: e.target.value })
                            }
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter product name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={newProduct.description}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, description: e.target.value })
                            }
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter product description"
                            rows="4"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Price (₹)
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={newProduct.price}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, price: e.target.value })
                            }
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter price"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            name="category"
                            value={newProduct.category}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, category: e.target.value })
                            }
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                            required
                        >
                            <option value="">Select category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="cursor-pointer w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct