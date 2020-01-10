const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
    itemID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;