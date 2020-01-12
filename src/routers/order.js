const express = require("express");
const router = express.Router();
const auth = require("../middleware/userAuth");
const authAdmin = require('../middleware/adminAuth');

const Order = require("../models/Order");

router.get('/', authAdmin, async (req, res) => {
    try {
        const doc = await Order.find().populate('customerId').exec();
        res.json(doc)
    } catch (error) {
        res.status(400).send();
    }
});

router.post('/', auth, async (req, res) => {
    try {
        var order = new Order(req.body);
        const doc = await order.save();
        res.status(201).json(doc);

    } catch (error) {
        res.status(400).send();
    }
})

router.post('/edit/:id', auth, async (req, res) => {
    try {

        const data = req.body;
        await Order.findOneAndUpdate({ _id: req.params.id }, data);
        const doc = {
            _id: req.params.id,
            ...req.body
        }
        res.status(200).json(doc);

    } catch (error) {
        res.status(400).send();
    }
})

module.exports = router