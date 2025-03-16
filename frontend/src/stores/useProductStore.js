import { create } from "zustand"
import { axiosUrl } from "../utils/axios"
import toast from "react-hot-toast";

export const useProductStore = create ((set, get) => ({
    products: [],
    orders: [],
    isCreatingProducts: false,
    isGettingProducts: false,

    getProducts: async (category) => {
        set({isGettingProducts: true})
        try {
            const res = await axiosUrl.get(`/product/${category}`);
            set({products: res.data.products});
        } catch (error) {
            console.log(error.response.data.message);
        } finally {
            set({isGettingProducts: false})
        }
    },

    createProduct: async (product) => {
        try {
            const res = await axiosUrl.post('/product', product);
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    },

    deleteProduct: async (productId) => {
        try {
            const res = await axiosUrl.delete(`/product/${productId}`);
            if (res.data.success) {
                set((state) => ({
                    products: state.products.filter((product) => product._id !== productId)
                }))
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    },

    getAllOrders: async () => {
        try {
            const res = await axiosUrl.get('/product');
            set({orders: res.data})
        } catch (error) {
            console.log(error.response.data.message)
        }
    },

    updateOrderStatus: async (orderId, orderStatus) => {
        try {
            const res = await axiosUrl.put(`/product/${orderId}`, { orderStatus })
            if (res.data.success) {
                set((state) => ({
                    orders: state.orders.map(order => order._id === orderId ? {...order, orderStatus: orderStatus} : order)
                }))
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
}))