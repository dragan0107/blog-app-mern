const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Register
router.post('/register', async(req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        });

        const user = await newUser.save();

        res.status(200).json({
            message: "success!",
            user: user
        })
    } catch (err) {
        res.status(500).json(err)
    }

});

//Login
router.post("/login", async(req, res) => {
    const { username, password } = req.body;
    try {

        const user = await User.findOne({ username })
        if (!user) res.status(400).json("Wrong credentials!");

        const validate = await bcrypt.compare(password, user.password);
        if (!validate) res.status(400).json("Wrong credentials!");

        res.status(200).json({
            user: user
        });

    } catch (err) {
        res.status(500).json({
            error: err
        })
    }

})






module.exports = router;