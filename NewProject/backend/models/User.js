const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, default: "AnonymousUser" },
    email: String,
    password: String,
    avatar: String,
});

module.exports = mongoose.model("User", userSchema);