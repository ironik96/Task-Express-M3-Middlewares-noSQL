exports.pathNotFound = (req, res, next) => {
  res.status(404).json({ message: "Path not found" });
};

exports.handleError = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
};
