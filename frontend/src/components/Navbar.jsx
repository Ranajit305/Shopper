import React from 'react';
import { Link } from 'react-router-dom';
import Account from './Account';

const Navbar = () => {
    return (
        <div className='pt-15'>
            <nav className="bg-[#2a599b] shadow-md py-4 fixed top-0 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                    {/* Logo */}
                    <Link to='/' className="text-2xl text-white font-bold">ShopEase</Link>

                    {/* Navigation Links */}
                    <ul className="hidden sm:flex space-x-6 font-medium text-white">
                        <Link to='/' className="hover:text-gray-300 cursor-pointer">Home</Link>
                        <Link to='/shop' className="hover:text-gray-300 cursor-pointer">Shop</Link>
                        <Link to='/about' className="hover:text-gray-300 cursor-pointer">About</Link>
                        <Link to='/contact' className="hover:text-gray-300 cursor-pointer">Contact</Link>
                    </ul>

                    {/* Account */}
                    <Account />
                </div>
            </nav>
            <div className={`text-black mt-5 sm:hidden`}>
                <ul className="flex justify-center sm:hidden space-x-3 font-medium text-black">
                    <Link to='/' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition">Home</Link>
                    <Link to='/shop' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition">Shop</Link>
                    <Link to='/about' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition">About</Link>
                    <Link to='/contact' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition">Contact</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
