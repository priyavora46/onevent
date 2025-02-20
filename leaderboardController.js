const Leaderboard = require("../models/Leaderboard");

// Fetch Live Scores
exports.getScores = async (req, res) => {
  try {
    const scores = await Leaderboard.find().sort({ score: -1 });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: "Error fetching scores", error });
  }
};

// Update Score
exports.updateScore = async (req, res) => {
  try {
    const { username, score } = req.body;

    let user = await Leaderboard.findOne({ username });
    if (!user) {
      user = new Leaderboard({ username, score });
    } else {
      user.score = score;
    }

    await user.save();
    res.json({ message: "Score updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating score", error });
  }
};
