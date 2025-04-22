const express = require("express");
const router = express.Router();
const { me } = require("../controllers/meController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, me);

module.exports = router;  
