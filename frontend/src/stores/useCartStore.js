import { create } from "zustand"
import { axiosUrl } from "../utils/axios"
import toast from "react-hot-toast";

export const useCartStore = create ((set, get) => ({
    cart: [],
    isGettingCart: false,

    getCart: async () => {
        set({isGettingCart: true})
        try {
            const res = await axiosUrl.get('/cart');
            set({cart: res.data})
        } catch (error) {
            console.log(error.response.data.message);
        } finally {
            set({isGettingCart: false})
        }
    },

    addToCart: async (productId) => {
        try {
            const res = await axiosUrl.post(`/cart/${productId}`);
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    },

    removeFromCart: async (productId) => {
        try {
            const res = await axiosUrl.delete(`/cart/${productId}`);
            if (res.data.success) {
                set((state) => ({
                    cart: state.cart.filter(item => item.product._id !== productId)
                }))
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    },

    updateQuantity: async (productId, action) => {
        try {
            const res = await axiosUrl.put(`/cart/${productId}`, { action });

            if (res.data.success) {
                set((state) => ({
                    cart: state.cart.map(item =>
                        item.product._id === productId
                            ? { ...item, quantity: item.quantity + (action === 'increase' ? 1 : -1) }
                            : item // Keep other products unchanged
                    )
                }));
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    },

    cartLogout: () => {
        try {
            set({cart: []})
        } catch (error) {
            console.log(error.mesasge)
        }
    }
}))