const express = require("express");
const auth = require("../middleware/adminAuth");
const Item = require("../models/Item");

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const doc = await Item.find();
    res.json(doc);
  } catch (error) {
    res.status(400).send();
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { name, img, price, categoryId } = req.body;
    var item = new Item({ name, img, price, categoryId });
    const doc = await item.save();
    res.status(201).json(doc);
  } catch (err) {
    console.log(err)
    res.status(400).send();
  }
});

router.post('/edit/:id', auth, async (req, res) => {
  try {
    const data = req.body;
    await Item.findOneAndUpdate({ _id: req.params.id }, data);
    // send the body with the id to payload
    const doc = {
      _id: req.params.id,
      ...req.body
    }
    res.status(200).json(doc);
  } catch {
    res.status(400).send();
  }
});

module.exports = router;