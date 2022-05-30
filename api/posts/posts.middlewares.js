const Post = require("../../models/Post");

const getPostById = async (postId, next) => {
  try {
    const post = await Post.findById(postId);
    const error = new Error("No post found");
    error.status = 404;
    return post ?? error;
  } catch (error) {
    next(error);
  }
};
