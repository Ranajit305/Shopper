import Order from "../models/order.model.js"
import Stripe from "stripe"
import User from "../models/user.model.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const url = process.env.MODE === 'development' ? 'http://localhost:5173' : '/'

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user._id });
        res.status(200).json({success: true, orders})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const placeOrder = async (req, res) => {
    try {
        const { cart } = req.body;
        const line_items = cart.map((item) => ({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: item.product.name,
                    images: [item.product.image],
                },
                unit_amount: item.product.price * 100,
            },
            quantity: item.quantity,
        }))

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${url}/order/${'success'}`,
            cancel_url: `${url}/order/${'failed'}`,
        })

        res.status(200).json({success: true, session_url: session.url});
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const createOrder = async (req, res) => {
    try {
        const { product, address } = req.body;

        const orderItems = product.map(item => ({
            userId: req.user._id,
            productId: item.product._id,
            name: item.product.name,
            image: item.product.image,
            price: item.product.price,
            quantity: item.quantity,
            paymentStatus: "Paid",
            orderStatus: "Processing",
            shippingAddress: address,
        }));
        await Order.insertMany(orderItems);
        await User.findByIdAndUpdate(req.user._id, { $set: { cartItems: [] } });
        res.status(200).json({ success: true, message: "Order Successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.body;
        const order = await Order.findById(orderId);
        if (order.orderStatus === "Delivered") {
            return res.status(400).json({ success: false, message: "Cannot cancel a delivered order" });
        }

        await Order.findByIdAndUpdate(orderId, { orderStatus: 'Cancelled' }, { new: true })
        res.status(200).json({success: true, message: 'Order Cancelled'})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}