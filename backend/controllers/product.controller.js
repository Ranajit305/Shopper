import cloudinary from "../db/cloudinary.js"
import Order from "../models/order.model.js";
import Product from "../models/product.model.js"

export const getProducts = async (req, res) => {
    const { category } = req.params;
    let products = [];
    try {
        if (category === 'All') {
            products = await Product.find({});
        } else {
            products = await Product.find({ category });
        }
        res.status(200).json({ success: true, products })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const addProduct = async (req, res) => {
    try {
        const { name, description, price, image, category } = req.body;
        if (!name || !description || !price || !image || !category) {
            return res.status(400).json({success: false, message: 'Fields Missing'})
        }

        let cloudinaryResponse = null;
        if (image) {
            cloudinaryResponse = await cloudinary.uploader.upload(image, {folder: 'products'});
        }

        const newProduct = new Product({
            name,
            description,
            price,
            image: cloudinaryResponse?.secure_url ? cloudinaryResponse?.secure_url : '',
            category,
        })
        await newProduct.save();
        res.status(200).json({success: true, newProduct, message: 'Product Created'})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({success: false, message: 'Product not Found'})
        }

        if (product.image) {
            const publicId = product.image.split('/').pop().split('.')[0];
            try {
                await cloudinary.uploader.destroy(`products/${publicId}`);
            } catch (error) {
                console.log(error.message);
            }
        }
        await Product.findByIdAndDelete(productId);
        res.status(200).json({success: true, message: 'Product Deleted'})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('userId', 'name email').sort({createdAt: -1});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { orderStatus } = req.body;

        const validStatuses = ["Processing", "Shipped", "Delivered", "Cancelled"];
        if (!validStatuses.includes(orderStatus)) {
            return res.status(400).json({ success: false, message: "Invalid order status" });
        }

        await Order.findByIdAndUpdate(
            orderId,
            { orderStatus },
            { new: true }
        )
        res.status(200).json({success: true, message: 'Status Updated'})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}