const express = require("express");
const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/userController");

const router = express.Router();

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

module.exports = router;
