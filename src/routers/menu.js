const express = require("express");
const auth = require("../middleware/adminAuth");
const Menu = require("../models/Menu");
const Category = require('../models/category');

const router = express.Router();

router.get('/', auth, async(req, res) => {
    try {
        const doc = await Menu.find().populate('itemId').exec();
        res.status(200).json(doc);
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
});

router.post('/', auth, async(req, res) => {
    try {
        const { itemId } = req.body;
        var menu = new Menu({ itemId });
        const doc = await menu.save();
        res.status(201).json(doc);
    } catch (err) {
        console.log(err)
        res.status(400).send();
    }

});

router.delete('/delete/:id', auth, async(req, res) => {
    try {
        await Menu.findByIdAndDelete(req.params.id);
        res.status(200).json('removed');
    } catch {
        res.status(400).send();
    }
});

module.exports = router;