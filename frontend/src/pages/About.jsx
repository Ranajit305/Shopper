import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen py-8 px-6 max-w-5xl mx-auto">
            {/* About ShopEase Section */}
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r text-blue-500 bg-clip-text text-center">
                    About ShopEase
                </h1>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                    ShopEase is an innovative e-commerce platform designed to provide a seamless, user-friendly, and affordable shopping experience. From **fashion and electronics** to **home essentials** and **beauty products**, we offer a wide selection of high-quality items at unbeatable prices.
                    <br />
                    Our platform ensures **secure transactions, fast shipping, and excellent customer service**, making shopping easy and enjoyable. We frequently update our inventory with the latest trends and best deals to provide great value.
                </p>
            </div>

            {/* Our Mission Section */}
            <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center">Our Mission</h2>
                <ul className="mt-6 space-y-4 text-gray-700 text-lg">
                    {[
                        "Provide a diverse selection of high-quality products at affordable prices.",
                        "Ensure a smooth and secure shopping experience.",
                        "Offer quick and reliable delivery services.",
                        "Maintain top-notch customer support.",
                        "Create a trusted marketplace with the best deals.",
                    ].map((mission, index) => (
                        <li key={index} className="flex items-center space-x-3">
                            <span className="text-green-500 text-2xl">✔</span>
                            <span>{mission}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Why Choose Us?</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { title: '⭐ Quality Products', description: 'We ensure top-notch quality in every item we sell.' },
                        { title: '🚀 Fast Shipping', description: 'Quick and reliable delivery to your doorstep.' },
                        { title: '🔒 Secure Payments', description: 'Safe and hassle-free transactions every time.' },
                        { title: '🎁 Best Deals', description: 'Exciting discounts and exclusive offers.' },
                        { title: '📞 24/7 Support', description: 'We are here for you anytime, anywhere.' },
                        { title: '✅ Easy Returns', description: 'Hassle-free return policies for customer satisfaction.' },
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
                            <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
                            <p className="text-gray-500 mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default About;
