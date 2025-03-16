import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen py-8 px-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                Need assistance? Our team is here to help. Reach out to us for customer support, technical issues, or general inquiries.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Customer Care */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-700">Customer Care</h2>
                    <p className="text-gray-500 mt-2">For order inquiries, returns, or refunds.</p>
                    <p className="text-gray-700 font-semibold mt-4">📞 +1 234 567 890</p>
                    <p className="text-gray-700 font-semibold">✉️ support@shopease.com</p>
                </div>

                {/* Technical Support */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-700">Technical Support</h2>
                    <p className="text-gray-500 mt-2">For website issues, login problems, or technical help.</p>
                    <p className="text-gray-700 font-semibold mt-4">📞 +1 987 654 321</p>
                    <p className="text-gray-700 font-semibold">✉️ tech@shopease.com</p>
                </div>

                {/* Chat Support */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-700">Chat Support</h2>
                    <p className="text-gray-500 mt-2">Chat with us for instant assistance.</p>
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        Start Chat
                    </button>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Frequently Asked Questions</h2>
                <div className="mt-6 space-y-4">
                    <details className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                        <summary className="font-semibold text-gray-700">How do I track my order?</summary>
                        <p className="mt-2 text-gray-600">You can track your order by logging into your account and navigating to the "Orders" section.</p>
                    </details>
                    <details className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                        <summary className="font-semibold text-gray-700">What is your refund policy?</summary>
                        <p className="mt-2 text-gray-600">We offer a 30-day return policy. Items must be in original condition.</p>
                    </details>
                    <details className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                        <summary className="font-semibold text-gray-700">Do you offer international shipping?</summary>
                        <p className="mt-2 text-gray-600">Yes, we ship to select international locations. Shipping rates apply.</p>
                    </details>
                </div>
            </div>

            {/* Address & Working Hours */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-semibold text-gray-700">Our Office</h2>
                <p className="text-gray-600 mt-2">123 Old Calcutta Rd, Kolkata, WB 70001</p>
                <p className="text-gray-600">📍 <a href="#" className="text-blue-600 hover:underline">View on Map</a></p>
                <h3 className="mt-6 text-xl font-semibold text-gray-700">Working Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
            </div>
        </div>
    );
};

export default Contact;
