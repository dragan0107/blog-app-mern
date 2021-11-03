const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//Get user 
router.get('/:id', async(req, res) => {

    const { userId } = req.body;

    if (userId === req.params.id) {

        try {
            const user = await User.findById(req.params.id).select("-password");
            res.status(200).json({
                user: user
            })

        } catch (err) {
            res.status(404).json("User not found!");
        }

    } else {
        res.status(500).json("Wrong information or user doesn't exist!");
    }

});



//User update handler.
router.put('/:id', async(req, res) => {

    const { userId } = req.body;

    if (userId === req.params.id) {

        if (req.body.password) { // If we update password too, we have to re-hash it.
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });

            res.status(200).json({
                message: "Successfully updated your account!"
            });

        } catch (err) {
            res.status(500).json(err);
        }
    } else {

        res.status(401).json("You can update only your account.");
    }

});

//Delete user handler.
router.delete('/:id', async(req, res) => {

    const { userId } = req.body;

    if (userId === req.params.id) {

        try {
            const user = User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username }); // We delete every post by this user before deleting the user itself.
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json({
                    mesage: "successfully deleted the user"
                });

            } catch (err) {
                res.status(500).json(err);
            }

        } catch (err) {
            res.status(404).json("User not found!");
        }

    } else {

        res.status(401).json("You can delete only your account.");
    }

});



//Login



module.exports = router;