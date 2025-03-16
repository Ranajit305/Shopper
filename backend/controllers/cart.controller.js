import Product from "../models/product.model.js"
import User from "../models/user.model.js"

export const getCart = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('cartItems.product');
        res.json(user.cartItems);
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const addToCart = async (req, res) => {
    try {
        const user = req.user;
        const { productId } = req.params;

        const cartItem = user.cartItems.find(item => item.product.toString() === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            user.cartItems.push({product: productId})
        }

        await user.save();
        res.status(200).json({success: true, message: 'Product added to Cart'})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const removeFromCart = async (req, res) => {
    try {
        const user = req.user;
        const { productId } = req.params;
        user.cartItems = user.cartItems.filter((item) => item.product._id.toString() !== productId);
        await user.save();
        res.status(200).json({success: true, message: 'Removed from Cart'});
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const updateQuantity = async (req, res) => {
    try {
        const user = req.user;
        const { action } = req.body;
        const { productId } = req.params;
        const cartItem = user.cartItems.find(item => item.product._id.toString() === productId);

        if (action === 'increase') {
            if (cartItem) {
                cartItem.quantity += 1;
            }
        } else if (action === 'decrease') {
            if (cartItem) {
                if (cartItem.quantity === 1) {
                    return res.status(400).json({success: false, message: 'Item cannot be decreased after 1'})
                } else {
                    cartItem.quantity -= 1;
                }
            }
        } else {
            res.status(400).json({success: false, message: 'Invalid Action'})
        }
        await user.save();
        res.status(200).json({success: true, message: 'Quantity Updated'})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}