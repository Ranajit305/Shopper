import toast from 'react-hot-toast';
import { create } from 'zustand'
import { axiosUrl } from '../utils/axios';

export const useAuthStore = create((set) => ({
    user: null,
    shippingAddress: null,
    isLogginIn: false,
    isSigningUp: false,
    isCheckingAuth: false,

    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const res = await axiosUrl.get("/user/check");
            set({ user: res.data });
            set({ shippingAddress: res.data.shippingAddress })
        } catch (error) {
            console.log(error.response);
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    login: async (email, password) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosUrl.post("/user/login", { email, password });
            if (res.data.success) {
                set({ user: res.data.user });
                set({ shippingAddress: res.data.user.shippingAddress })
            }
            toast.success(res.data.message);
        } catch (error) {
            toast.dismiss();
            toast.error(error.response.data.message);
        } finally {
            set({ isLoggingIn: false });
        }
    },

    signup: async (name, email, password) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosUrl.post("/user/signup", {
                name,
                email,
                password,
            });
            if (res.data.success) {
                set({ user: res.data.user });
                set({ shippingAddress: res.data.user.shippingAddress })
            }
            toast.success(res.data.message);
        } catch (error) {
            toast.dismiss();
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },

    logout: async () => {
        try {
            const res = await axiosUrl.post("/user/logout");
            if (res.data.success) {
                set({ user: null });
                set({ shippingAddress: null })
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateAddress: async (address) => {
        try {
            const res = await axiosUrl.put('/user/update', { address });
            if (res.data.success) {
                set({shippingAddress: address})
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
}))