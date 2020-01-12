const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    items_list: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    location: {
        latitude: Number,
        longitude: Number
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    deliveredAt: {
        type: Number
    },
    state: {
        type: String,
        default: 'requested'
    }
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

