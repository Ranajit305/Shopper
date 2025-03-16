import React, { useState } from 'react'
import { useAuthStore } from '../stores/useAuthStore'

const Address = () => {

    const { shippingAddress, updateAddress } = useAuthStore();

    const [address, setAddress] = useState({
        fullName: shippingAddress?.fullName || "",
        address: shippingAddress?.address || "",
        city: shippingAddress?.city || "",
        state: shippingAddress?.state || "",
        postalCode: shippingAddress?.postalCode || "",
        country: shippingAddress?.country || "",
        phone: shippingAddress?.phone || ""
    })

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAddress(address)
    }

    return (
        <div className="w-[100%] mx-auto bg-white shadow-2xl rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Address</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 text-sm font-medium">Full Name</label>
                    <input type="text" name='fullName' value={address.fullName} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-500 rounded-lg outline-blue-500" placeholder="Enter full name" required/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">Address</label>
                    <input type="text" name='address' value={address.address} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-500 rounded-lg outline-blue-500" placeholder="Enter address" required/>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">City</label>
                        <input type="text" name='city' value={address.city} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-500 rounded-lg outline-blue-500" placeholder="Enter city" required/>
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">State</label>
                        <input type="text" name='state' value={address.state} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-500 rounded-lg outline-blue-500" placeholder="Enter state" required/>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Postal Code</label>
                        <input type="text" name='postalCode' value={address.postalCode} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-500 rounded-lg outline-blue-500" placeholder="Enter postal code" required/>
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Country</label>
                        <input type="text" name='country' value={address.country} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-500 rounded-lg outline-blue-500" placeholder="Enter country" required/>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">Phone</label>
                    <input type="text" name='phone' value={address.phone} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-500 rounded-lg outline-blue-500" placeholder="Enter phone number" required/>
                </div>

                <button type='submit' className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg mt-4 cursor-pointer transition">
                    Save Address
                </button>
            </form>
        </div>
    )
}

export default Address