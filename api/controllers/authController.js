const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Register
router.post('/register', async(req, res) => {

    try {
        const salt = await bcrypt.genSalt(10); // Firstly we create a salt and then hash the input password.
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = await new User({ // Then we create a new user 
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        });

        const user = await newUser.save(); // Now we save it and send response back with the user.
        user.password = undefined; // Removing the password field before sending it back.
        res.status(200).json({
            message: user
        })
    } catch (err) {
        res.status(500).json(err)
    }

});

//Login
router.post("/login", async(req, res) => {
    const { username, password } = req.body;
    try {

        const user = await User.findOne({ username });
        if (!user) res.status(400).json("Wrong credentials!");

        const validate = await bcrypt.compare(password, user.password);
        if (!validate) res.status(400).json("Wrong credentials!");

        user.password = undefined; // Removing password field from the user object before sending;

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