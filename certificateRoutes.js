const express = require("express");
const { generateCertificate } = require("../cControllers/certificateController");
const router = express.Router();

router.post("/generate", generateCertificate);

module.exports = router;
