const express = require("express");
const cors = require("cors"); // Import the 'cors' middleware
const app = express();
require("dotenv").config();

const jsonParser = express.json(); // Middleware for JSON parsing
const urlEncodedParser = express.urlencoded({ extended: true }); // Middleware for URL-encoded data parsing

app.use(jsonParser);
app.use(urlEncodedParser);

// Enable CORS for all routes
app.use(cors());

const port = process.env.PORT || 3000;

// Your routes remain unchanged
app.get("/", async (req, res) => {
    return res.status(200).json({ message : "this is a log" });
});


app.get("/add", async (req, res) => {
    const { num1, num2 } = req.query;
    return res.status(200).json({ result: parseFloat(num1) + parseFloat(num2) });
});

app.get("/sub", async (req, res) => {
    const { num1, num2 } = req.query;
    return res.status(200).json({ result: parseFloat(num1) - parseFloat(num2) });
});

app.get("/mul", async (req, res) => {
    const { num1, num2 } = req.query;
    return res.status(200).json({ result: parseFloat(num1) * parseFloat(num2) });
});

app.get("/div", async (req, res) => {
    const { num1, num2 } = req.query;
    return res.status(200).json({ result: parseFloat(num1) / parseFloat(num2) });
});

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

exports.calcServerless = (req, res) => {
    app(req,res)
}