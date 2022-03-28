// Check for cookie, if exists, treat as logged in, else redirect to login
function handleSession(req, res, next) {
  const userName = req.cookies?.userName;
  if (!userName && req.url != "/login") {
    res.redirect("/login");
    return;
  }
  req.userName = userName;
  next();
}

// Export
module.exports = handleSession;
