import { create } from "zustand"
import { axiosUrl } from "../utils/axios";
import toast from "react-hot-toast";

export const useOrderStore = create((set, get) => ({
    orders: [],
    currentOrder: [],
    isGettingOrders: false,
    sessionUrl: null,
    loading: false,
    orderSuccess: false,

    getOrders: async () => {
        set({isGettingOrders: true})
        try {
            const res = await axiosUrl.get('/order');
            if (res.data.success) {
                set({orders: res.data.orders})
            }
        } catch (error) {
            console.log(error.response.data.message);
        } finally {
            set({isGettingOrders: false})
        }
    },

    placeOrder: async (cart, address) => {
        set({ loading: true });
        try {
            if (cart.length === 0) {
                set({ loading: false });
                return;
            }
            const res = await axiosUrl.post("/order/place-order", { cart });
            if (res.data.success) {
                localStorage.setItem('order', JSON.stringify(cart));
                localStorage.setItem('address', JSON.stringify(address));
                set({ sessionUrl: res.data.session_url });
                window.location.href = res.data.session_url;
            }
        } catch (error) {
            console.error("Checkout error:", error.response.data.message);
        } finally {
            set({ loading: false });
        }
    },

    verifyOrder: async () => {
        set({ loading: true });
        try {       
            const product = JSON.parse(localStorage.getItem('order'))
            const address = JSON.parse(localStorage.getItem('address'))
            localStorage.removeItem('address')
            localStorage.removeItem('order')
            const res = await axiosUrl.post('/order/create-order', { product, address })
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error("Order verification failed:", error.response.data.message);
        } finally {
            set({ loading: false });
        }
    },

    selectOrder: (order) => {
        try {
            set({currentOrder: order})
        } catch (error) {
            console.log(error.message)
        }
    },

    cancelOrder: async (orderId) => {
        try {
            const res = await axiosUrl.put('/order/cancel-order/', { orderId })
            if (res.data.success) {
                set({ currentOrder: { ...get().currentOrder, orderStatus: 'Cancelled' } })
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    },

    orderLogout: () => {
        try {
            set({orders: []})
        } catch (error) {
            console.log(error.message)
        }
    }
}))
