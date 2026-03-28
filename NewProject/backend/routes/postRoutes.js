const router = require("express").Router();
const {
    createPost,
    getPosts,
    likePost,
} = require("../controllers/postController");

router.post("/", createPost);
router.get("/", getPosts);
router.put("/like/:id", likePost);

module.exports = router;