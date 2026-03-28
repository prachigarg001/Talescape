const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.json(post);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getPosts = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
};

exports.likePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();
    res.json(post);
};