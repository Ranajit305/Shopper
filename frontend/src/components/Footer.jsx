import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#2a599b] text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-bold">ShopEase</h2>
                    <p className="mt-2 text-gray-300">Your one-stop shop for the best deals and latest trends.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-center">Quick Links</h3>
                    <ul className="mt-2 space-y-2 text-gray-300 flex gap-5 items-center justify-center md:flex-col md:gap-0">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Shop</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        <a href="#" className="hover:text-yellow-500 text-xl">📘</a>
                        <a href="#" className="hover:text-yellow-500 text-xl">🐦</a>
                        <a href="#" className="hover:text-yellow-500 text-xl">📷</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-sm">&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</div>
        </footer>
    )
}

export default Footer