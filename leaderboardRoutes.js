const express = require("express");
const { getScores, updateScore } = require("../controllers/leaderboardController");

const router = express.Router();

router.get("/scores", getScores);
router.post("/update", updateScore);

module.exports = router;
