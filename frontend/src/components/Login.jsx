import React, { useState } from 'react'
import { X } from 'lucide-react'
import { useAuthStore } from '../stores/useAuthStore';

const Login = ({ setModal }) => {

    const { login, signup } = useAuthStore();

    const [action, setAction] = useState('Login');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (action === 'Login') {
            login(email, password);
        } else {
            signup(name, email, password);
        }
        setModal(false);
    }

    return (
        <div>
            <div className='fixed inset-0 z-10 text-black bg-[rgba(0,0,0,0.3)] flex items-center justify-center'>
                <form onSubmit={handleLogin} className='bg-white w-96 rounded-lg p-5 m-5'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl uppercase'>{action}</h1>
                        <X onClick={() => setModal(false)} className='cursor-pointer' />
                    </div>
                    
                    <hr className='text-gray-300 mt-3 mb-3' />

                    {/* Name Input */}
                    {action === 'Sign Up' && <div className='mb-4'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>}

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 outline-none cursor-pointer"
                    >
                        {action}
                    </button>
                    {action === 'Login' ? (
                        <p className="text-center mt-5 text-gray-600 text-sm sm:text-base">
                            Don't have an account?
                            <span onClick={() => setAction('Sign Up')}
                                className="text-blue-500 font-medium cursor-pointer hover:underline ml-1 transition"
                            >
                                Click here
                            </span>
                        </p>
                    ) : (
                        <p className="text-center mt-5 text-gray-600 text-sm sm:text-base">
                            Already have an account?
                            <span onClick={() => setAction('Login')}
                                className="text-blue-500 font-medium cursor-pointer hover:underline ml-1 transition"
                            >
                                Click here
                            </span>
                        </p>
                    )}
                </form>

            </div>
        </div>
    )
}

export default Login