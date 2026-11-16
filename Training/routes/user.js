const express = require("express");
const router = express.Router(); 

// 1. req.body (Data hidden in the request)
// Test with: POST http://localhost:3000/user/signup
router.post("/signup", (req, res) => {
  const { username } = req.body; 
  res.json({ status: "Success", user: username });
});

// 2. req.params (Variable in the URL path)
// Test with: GET http://localhost:3000/user/profile/99
router.get("/profile/:id", (req, res) => {
  res.send(`Viewing profile for ID: ${req.params.id}`);
});

// 3. req.query (Search terms after the ?)
// Test with: GET http://localhost:3000/user/search?name=Gemini
router.get("/search", (req, res) => {
  res.send(`Searching for user named: ${req.query.name}`);
});

module.exports = router;