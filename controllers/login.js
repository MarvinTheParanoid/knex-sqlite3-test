// Imports
const { getUserByUsername, addUser } = require("../models/user");

// add user to user DB if doesn't exist and set cookie
async function handleLogin(req, res) {
  try {
    const userName = req.body.userName;
    const inDB = await getUserByUsername(userName).then(
      (user) => user.length !== 0
    );
    !inDB && (await addUser(userName)); //add user if not in db
    // handle this with current session id - have as field on db
    res.cookie("userName", userName, { maxAge: 120000 }).redirect("/"); // cookie last 2min
  } catch (error) {
    // res error page when created....
    console.log(error);
    res.send("Login failed.");
  }
}

// Exports
module.exports = {
  handleLogin,
};
