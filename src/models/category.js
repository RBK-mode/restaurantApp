const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
})

const Category = mongoose.model("Caregory",categorySchema);

module.exports = Category;

