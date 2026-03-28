const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        type: String,
        authorId: String,
        likes: { type: Number, default: 0 },
        comments: [{ text: String }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);