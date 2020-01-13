const express = require("express");
const auth = require("../middleware/adminAuth");
const Menu = require("../models/Menu");
const Category = require('../models/category');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const doc = await Menu.find().populate('itemId').exec();
        res.status(200).json(doc);
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const { itemId } = req.body;
        console.log(itemId)
        var menu = new Menu({ itemId: itemId });
        const doc = await menu.save();
        const doc2 = await Menu.find({ itemId: itemId }).populate('itemId').exec();
        res.status(201).json(doc2);
    } catch (err) {
        console.log(err)
        res.status(400).send();
    }

});

router.post('/delete/:id', auth, async (req, res) => {
    try {
        await Menu.find({ itemId: req.params.id }).remove().exec();
        res.status(200).json();
    } catch {
        res.status(400).send();
    }
});

module.exports = router;