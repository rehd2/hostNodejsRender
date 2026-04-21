require("dotenv").config({ quiet: true });
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());
app.use(
    cors({
        origin: ["*"],
    }),
);

app.get("/", (req, res) => {
    res.send("Hello from my Express App Home Page");
});

app.get("/about", (req, res) => {
    res.send("This is the abot route!");
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
