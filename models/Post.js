const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  slug: {
    type: String,
    default: "no-slug",
    set: function () {
      // return this.title.toLowerCase().trim().replace(/ +/gm, "-");
      this.title;
    },
  },
});

module.exports = model("Post", PostSchema);
