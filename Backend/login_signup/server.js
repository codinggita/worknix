const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://TAJ:T7Dr9Q70tUgnen2e@cluster0.3y5sd.mongodb.net/worknix")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(() => {
        console.log('Failed to connect to MongoDB');
    });

// Define Schema and Model
const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("Login_Signup", newSchema);

// Routes
app.get("/", cors(), (req, res) => {
    res.send("Welcome to the API!");
});

// Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            if (check.password === password) {
                res.json({ status: "success", user: { username: check.username, mobile: check.mobile } });
            } else {
                res.json("wrongpassword");
            }
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

// Signup Route
app.post("/signup", async (req, res) => {
    const { email, password, username, mobile } = req.body;

    const data = {
        email: email,
        password: password,
        username: username,
        mobile: mobile
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await collection.insertMany([data]);
        }
    } catch (e) {
        res.json("fail");
    }
});

// Start Server
app.listen(8000, () => {
    console.log("Server running on port 8000");
});
