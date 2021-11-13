const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//Create a new post.
router.post('/', async(req, res) => {

    try {
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost);

    } catch (err) {
        res.status(500).json(err);
    }

});


//Get one post 
router.get('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    } catch (err) {
        res.status(500).json(err);
    }


});

//Get all posts.
router.get('/', async(req, res) => { // This route will accept a query. If there is one, it will find posts based on the query.
    const username = req.query.username;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            });
        } else { // If no query, it will list all the posts.
            posts = await Post.find();
        }
        res.status(200).json(posts);

    } catch (err) {
        res.status(500).json(err);
    }


});

//Uppdate a post.
router.put('/:id', async(req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {

            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                res.status(200).json(updatedPost);

            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your posts.");
        }

    } catch (err) {
        res.status(500).json(err);
    }

});

//Delete a post.
router.delete('/:id', async(req, res) => {

    try {
        const post = await Post.findById(req.params.id);

        if (post.username === req.body.username) {

            try {
                await post.delete();
                res.status(200).json("Post has been deleted");

            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your posts.");
        }

    } catch (err) {
        res.status(500).json(err);
    }

});





module.exports = router;