const express = require("express");
const router = express.Router();
const PlayerController = require("./controllers/players");

router.get("/", PlayerController.index);
router.post("/search", PlayerController.search);

module.exports = router;