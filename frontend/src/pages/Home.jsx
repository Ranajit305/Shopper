import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const categories = [
        { name: "Smartphones", image: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnRwaG9uZXN8ZW58MHx8MHx8fDA%3D" },
        { name: "Laptops", image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExhcHRvcHN8ZW58MHx8MHx8fDA%3D"},
        { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Kitchen", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Personal Care", image: "https://images.unsplash.com/photo-1610595433626-e45abdb5a88b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBlcnNvbmFsJTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Sports", image: "https://plus.unsplash.com/premium_photo-1682435566673-cedb75cd7459?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BvcnRzJTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Books", image: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm9va3N8ZW58MHx8MHx8fDA%3D" },
        { name: "Toys", image: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VG95cyUyMCUyNiUyMEdhbWVzfGVufDB8fDB8fHww" },
        { name: "Automotive", image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEF1dG9tb3RpdmV8ZW58MHx8MHx8fDA%3D" },
        { name: "Health", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RXhlcmNpc2UlMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww" },
        { name: "Groceries", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JvY2VyaWVzfGVufDB8fDB8fHww" },
        { name: "Jewelry", image: "https://media.istockphoto.com/id/1134957977/photo/gold.jpg?s=612x612&w=0&k=20&c=erMWwrQhkh_sfZtsBR5q_jqq6w9Zm9JL5BdOX2lKJZw=" },
        { name: "Furniture", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEZ1cm5pdHVyZXN8ZW58MHx8MHx8fDA%3D" },
        { name: "Musical Instruments", image: "https://images.unsplash.com/photo-1556379118-7034d926d258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TXVzaWNhbCUyMGluc3RydW1lbnRzfGVufDB8fDB8fHww" },
        { name: "Luggage", image: "https://images.unsplash.com/photo-1639598003276-8a70fcaaad6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEx1Z2dhZ2V8ZW58MHx8MHx8fDA%3D" },
        { name: "Industrial Tools", image: "https://images.unsplash.com/photo-1585569695919-db237e7cc455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbCUyMGJveHxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Gaming", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Art & Crafts", image: "https://plus.unsplash.com/premium_photo-1666670725548-8d738c133e00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwJTI2JTIwY3JhZnR8ZW58MHx8MHx8fDA%3D" },
    ];

    return (
        <div className="min-h-screen">
            {/* Categories Section */}
            <div className="py-8 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Shop by Category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div onClick={() => navigate('/shop', {state: { category: category.name }})} key={index} className="bg-white cursor-pointer shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;