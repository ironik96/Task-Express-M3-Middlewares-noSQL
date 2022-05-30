const Post = require("../../models/Post");

exports.postsCreate = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.postsDelete = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const foundPost = await Post.findById(+postId);
    if (foundPost) {
      await foundPost.remove();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.postsUpdate = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const foundPost = Post.findById(+postId);
    if (foundPost) {
      await foundPost.findByIdAndUpdate(postId, req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.fetchPost = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    post
      ? res.json(post)
      : res.status(404).json({ message: "Post Not Found!" });
  } catch (error) {
    next(error);
  }
};
