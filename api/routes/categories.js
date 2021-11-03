const router = require('express').Router();
const Category = require('../models/Category');


// Adding new category 
router.post("/", async(req, res) => {

    try {
        const newCat = await Category.create(req.body);
        res.status(200).json(newCat);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Getting categories
router.get("/", async(req, res) => {

    try {
        const categs = await Category.find();
        res.status(200).json(categs);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;