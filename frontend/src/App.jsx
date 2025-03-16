import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import { useAuthStore } from './stores/useAuthStore'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import Product from './pages/Product'
import OrderStatus from './pages/OrderStatus'
import OrderProduct from './pages/OrderProduct'

const App = () => {

  const { checkAuth, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop/:productId' element={<Product />} />
        <Route path='/profile' element={user ? <Profile /> : <Navigate to='/'/>} />
        <Route path='/cart' element={user ? <Cart /> : <Navigate to='/'/>} />
        <Route path='/admin' element={user?.role === 'admin' ? <Admin /> : <Navigate to='/'/>} />
        <Route path='/order/:status' element={user ? <OrderStatus /> : <Navigate to='/'/>} />
        <Route path='/profile/:productId' element={user ? <OrderProduct /> : <Navigate to='/'/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App