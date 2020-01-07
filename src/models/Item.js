const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    deleted:{
        type: Boolean,
        default: false
    }

})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;