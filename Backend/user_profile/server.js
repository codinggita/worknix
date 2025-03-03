const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3000;

// MongoDB connection details
const uri = "mongodb+srv://TAJ:T7Dr9Q70tUgnen2e@cluster0.3y5sd.mongodb.net/";

const dbName = "worknix";

// Middleware
app.use(express.json());
app.use(cors());
let db, user_profile;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        user_profile = db.collection("user_profile");

        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// Routes

// GET: List all user profiles
app.get('/user_profiles', async (req, res) => {
    try {
        const allProfiles = await user_profile.find().toArray();
        res.status(200).json(allProfiles);
    } catch (err) {
        res.status(500).send("Error fetching user profiles: " + err.message);
    }
});

// POST: Add a new user profile
app.post('/user_profiles', async (req, res) => {
    try {
        const newUserProfile = req.body;
        const result = await user_profile.insertOne(newUserProfile);
        res.status(201).send(`User profile added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding user profile: " + err.message);
    }
});

app.put('/user_profiles/:employee_id', async (req, res) => {
    try {
        const employee_id = req.params.employee_id;  // Get the employee_id from the URL
        const updatedProfile = req.body;  // Get the updated user profile data from the request body

        console.log('Attempting to update profile with employee_id:', employee_id);
        console.log('Updated profile data:', updatedProfile);

        // Replace the existing user profile with the new data (replaceOne will update the entire document)
        const result = await user_profile.replaceOne({ employee_id }, updatedProfile);

        if (result.modifiedCount === 0) {
            res.status(404).send('No matching user profile found to update');
        } else {
            res.status(200).send(`User profile updated for employee_id: ${employee_id}`);
        }
    } catch (err) {
        res.status(500).send("Error updating user profile: " + err.message);
    }
});

// PATCH: Partially update a user profile
app.patch('/user_profiles/:employee_id', async (req, res) => {
    try {
        const employee_id = req.params.employee_id;
        const updates = req.body;

        console.log('Attempting to update employee with ID:', employee_id);
        console.log('Update data:', updates);

        const result = await user_profile.updateOne({ employee_id }, { $set: updates });

        if (result.modifiedCount === 0) {
            console.log('No document matched. Is the employee_id correct?');
        }

        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating user profile: " + err.message);
    }
});


app.delete('/user_profiles/:employee_id', async (req, res) => {
    try {
        const employee_id = req.params.employee_id;  // Get the employee_id from the URL

        console.log('Attempting to delete profile with employee_id:', employee_id);

        const result = await user_profile.deleteOne({ employee_id });

        if (result.deletedCount === 0) {
            res.status(404).send(`No profile found with employee_id: ${employee_id}`);
        } else {
            res.status(200).send(`Profile with employee_id: ${employee_id} deleted successfully`);
        }
    } catch (err) {
        res.status(500).send("Error deleting user profile: " + err.message);
    }
});