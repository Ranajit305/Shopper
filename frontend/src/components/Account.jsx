import React, { useState } from 'react'
import { useAuthStore } from '../stores/useAuthStore'
import { User, ShoppingCart, LayoutDashboard } from 'lucide-react'
import Login from './Login';
import { Link } from 'react-router-dom';

const Account = () => {

    const { user } = useAuthStore();
    const [modal, setModal] = useState(false);
    
    return (
        <div>
            {modal && <Login setModal={setModal}/>}
            {!user ? (
                <div>
                    <button onClick={() => setModal(true)} className='px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 cursor-pointer'>Login</button>
                </div>
            ) : (
                <div className='text-white flex items-center gap-5'>
                        {user?.role === 'admin' && <Link to='/admin'><LayoutDashboard /></Link>}
                        <Link to='/cart'><ShoppingCart className='cursor-pointer hover:text-gray-300' /></Link>
                        <Link to='/profile'><User className='cursor-pointer hover:text-gray-300' /></Link>
                </div>
            )}
        </div>
    )
}

export default Account