const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    }
})

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;