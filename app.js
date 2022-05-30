const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const PORT = 8000;

connectDb();

// middlewares
const { pathNotFound, handleError } = require("./middlewares");
app.use(express.json());
app.use("/api/posts", postsRoutes);
app.use(pathNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log("The application is running on localhost: " + PORT);
});
