import React, { useEffect } from 'react';
import { ArrowUp} from 'lucide-react'
import Category from '../components/Category';

const Shop = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
            window.scrollTo(0, 0); // Scroll to the top when Product page loads
        }, []);
    
    return (
        <div className="min-h-screen">
            <Category />
            <div>
                <button
                    onClick={scrollToTop}
                    className='fixed bottom-2 left-2 p-2.5 bg-blue-600 text-white rounded-full shadow-lg transition-opacity '
                >
                    <ArrowUp size={24} />
                </button>
            </div>
        </div>
    );
};

export default Shop;