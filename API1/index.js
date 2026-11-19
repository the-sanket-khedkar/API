// BASICS OF API DEFINING AND ALL

// #1 imports the express framework
const express = require("express");

// 2. create an express application
const app = express();

// 3. Middleware
app.use(express.json())

app.get("/",(req,res) => {
    res.status(200).json({
        name:"sanket",
        role: "developer"
    });
});

app.listen(3000, () => {
    console.log("Server is active on 3000")
})