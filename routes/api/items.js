const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    GET All items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create a item
// @access  Private
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(newItem));
});

// @route   DELETE api/items/:id
// @desc    Delete an item by id
// @access  Private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});

// TODO: fix PATCH

// @route   PATCH api/items/:id
// @desc    Update an item by id
// @access  Public
router.patch("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      const newItem = new Item({
        name: req.body.name
      });

      item = newItem;
      // item.patch().then(() => res.json({ success: true }));      
    })
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
