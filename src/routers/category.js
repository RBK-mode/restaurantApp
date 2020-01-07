const express = require("express");
const router = express.Router();
const auth = require("../middleware/adminAuth");

const Category = require("../models/category");

router.get('/',auth, async (req, res) => {
    try {
        const doc = await Category.find();
         res.json(doc)

    } catch(error){
        res.status(400).send();
    }
})

router.post('/',auth, async (req, res) => {
    try {
        const {name,img} = req.body;
        var category = new Category({name,img});
        const doc = await category.save();
        res.status(201).json(doc);

    } catch(error){
        res.status(400).send();
    }
})

router.post('/edit/:id',auth, async (req, res) => {
    try {
        const data  = req.body;
        const doc = await Category.findOneAndUpdate({_id: req.params.id},data);
        res.status(204).json(doc);

    } catch(error){
        res.status(400).send();
    }
})

module.exports = router