// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");
const res = require("express/lib/response");


router.route("/celebrities/create")
.get((req, res, next) => res.render("celebrities/new-celebrity"))
.post((req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => res.render("celebrities/new-celebrity"));
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/celebrities", { celebrities });
    })
    .catch((err) =>
      console.log(`Error while listing celebrities from the DB: ${err}`)
    );
});// Iteration 4 :: Listing our Celebrities


module.exports = router;
    