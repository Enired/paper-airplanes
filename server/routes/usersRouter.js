const { response } = require("../app");

const router = require("express").Router();

module.exports = (db) => {
  // GET all users
  router.get("/", (req, res) => {
    const queryString = "SELECT * FROM users";
    db.query(queryString).then((data) => {
      res.json(data.rows);
    });
  });

  // GET new user form
  router.get("/register", (req, res) => {
    userID = req.session.user_id

    if (!userID) {
      res.redirect("/register")
    }
    res.redirect("/")
  });

  //POST create a new user
  router.post("/register", (req, res) => {

  });

  // GET login form
  router.get("/login/success", (req, res) => {
    const queryString = "SELECT * FROM users where email=$1";
    db.query(queryString, [req.query.email])
      .then((data) => {
        res.json(data.rows);
      })
  });

  // POST logout
  router.post("/logout", (req, res) => { });

  /*************SECONDARY FEATURES ***********/

  // GET a user info
  router.get("/info", (req, res) => { });

  // GET edit form
  router.get("/edit", (req, res) => { });

  // POST edit form
  router.post("/edit", (req, res) => { });

  return router;
};
