const express = require("express");
const app = express();
const userRoutes = require("./routes/user"); // Link to your specialist file

// Middleware: Converts incoming JSON into req.body
app.use(express.json()); 

// Use the user routes. All paths in user.js will now start with /user
app.use("/user", userRoutes);

// Root path
app.get("/", (req, res) => {
  res.send("Home Page is Live!");
});

app.listen(3000, () => {
  console.log("Server active at http://localhost:3000");
});