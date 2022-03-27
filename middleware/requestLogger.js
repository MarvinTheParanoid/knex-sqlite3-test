function requestLogger(req, res, next) {
  const date = new Date();
  console.log(`${req.method} to ${req.url} at ${date.toLocaleTimeString()}`);
  next();
}

module.exports = requestLogger;
