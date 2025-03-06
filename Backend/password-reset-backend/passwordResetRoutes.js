const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Password Reset Route Working");
});

module.exports = router;
