const express = require("express");
const router = express.Router();
const knex = require("../db");


router.get("/", function (req, res, next) {
  knex("quiz")
    .select("*")
    .then((hikes) => res.json(hikes))
    .catch((err) => next(err));
});

