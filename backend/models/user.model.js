import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    shippingAddress: {
        fullName: {
            type: String,
            default: ''
        },
        address: {
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        state: {
            type: String,
            default: ''
        },
        postalCode: {
            type: String,
            default: ''
        },
        country: {
            type: String,
            default: ''
        },
        phone: {
            type: String,
            default: ''
        },
    },
    cartItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    }
}, {timestamps: true})

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User