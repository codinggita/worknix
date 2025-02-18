// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const passport = require("passport");
// const { OAuth2Client } = require("google-auth-library");
// const GitHubStrategy = require("passport-github").Strategy;
// const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(passport.initialize());

// // MongoDB connection
// mongoose
//   .connect("mongodb+srv://TAJ:T7Dr9Q70tUgnen2e@cluster0.3y5sd.mongodb.net/worknix")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((error) => {
//     console.log("Failed to connect to MongoDB:", error.message);
//   });

// // Define Schema and Model
// const newSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String },
//   username: { type: String, required: true },
//   mobile: { type: String },
//   provider: { type: String, default: "local" }, // Added provider field to handle social logins
// });

// const collection = mongoose.model("Login_Signup", newSchema);

// // JWT Secret Key
// const JWT_SECRET = process.env.JWT_SECRET;
// if (!JWT_SECRET) {
//   console.error("JWT_SECRET is not defined in your .env file!");
//   process.exit(1);
// }

// // Routes
// app.get("/", cors(), (req, res) => {
//   res.send("Welcome to the API!");
// });

// // Google OAuth Configuration
// const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // Google OAuth Route
// app.post("/auth/google", async (req, res) => {
//   const { token } = req.body;

//   try {
//     const ticket = await googleClient.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const { email, name } = ticket.getPayload();
//     let user = await collection.findOne({ email });

//     if (!user) {
//       user = new collection({ email, username: name, provider: "google" });
//       await user.save();
//     }

//     const jwtToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
//     res.status(200).json({ token: jwtToken, user });
//   } catch (error) {
//     console.error("Google OAuth Error:", error);
//     res.status(400).json({ message: "Google OAuth failed" });
//   }
// });

// // GitHub OAuth Configuration
// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: "http://localhost:8000/auth/github/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const email = profile.emails?.[0]?.value || profile.username + "@github.com";
//       let user = await collection.findOne({ email });

//       if (!user) {
//         user = new collection({ email, username: profile.username, provider: "github" });
//         await user.save();
//       }

//       done(null, user);
//     }
//   )
// );

// app.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

// app.get(
//   "/auth/github/callback",
//   passport.authenticate("github", { failureRedirect: "/" }),
//   (req, res) => {
//     const jwtToken = jwt.sign({ id: req.user._id }, JWT_SECRET, { expiresIn: "1h" });
//     res.redirect(`http://localhost:3000/home?token=${jwtToken}`);
//   }
// );

// // LinkedIn OAuth Configuration
// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: process.env.LINKEDIN_CLIENT_ID,
//       clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
//       callbackURL: "http://localhost:8000/auth/linkedin/callback",
//       scope: ["r_emailaddress", "r_liteprofile"],
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const email = profile.emails?.[0]?.value;
//       let user = await collection.findOne({ email });

//       if (!user) {
//         user = new collection({ email, username: profile.displayName, provider: "linkedin" });
//         await user.save();
//       }

//       done(null, user);
//     }
//   )
// );

// app.get("/auth/linkedin", passport.authenticate("linkedin"));

// app.get(
//   "/auth/linkedin/callback",
//   passport.authenticate("linkedin", { failureRedirect: "/" }),
//   (req, res) => {
//     const jwtToken = jwt.sign({ id: req.user._id }, JWT_SECRET, { expiresIn: "1h" });
//     res.redirect(`http://localhost:3000/home?token=${jwtToken}`);
//   }
// );

// // Signup Route
// app.post("/signup", async (req, res) => {
//   const { email, password, username, mobile } = req.body;

//   try {
//     const userExists = await collection.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new collection({
//       email,
//       password: hashedPassword,
//       username,
//       mobile,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Error during signup:", error);
//     res.status(500).json({ message: "Error occurred during signup" });
//   }
// });

// // Login Route
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await collection.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
//     res.status(200).json({ token, user: { username: user.username, mobile: user.mobile } });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Error occurred during login" });
//   }
// });

// // Start Server
// app.listen(8000, () => {
//   console.log("Server running on port 8000");
// });



// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { OAuth2Client } = require("google-auth-library");
const GitHubStrategy = require("passport-github").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
require("dotenv").config(); // Load environment variables from .env

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());

// MongoDB connection
mongoose
  .connect("mongodb+srv://TAJ:T7Dr9Q70tUgnen2e@cluster0.3y5sd.mongodb.net/worknix")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB:", error.message);
  });

// Define Schema and Model
const newSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  username: { type: String, required: true },
  mobile: { type: String },
  provider: { type: String, default: "local" }, // Added provider field to handle social logins
});

const collection = mongoose.model("Login_Signup", newSchema);

// JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined in your .env file!");
  process.exit(1);
}

// Routes
app.get("/", cors(), (req, res) => {
  res.send("Welcome to the API!");
});

// Google OAuth Configuration
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google OAuth Route
app.post("/auth/google", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name } = ticket.getPayload();
    let user = await collection.findOne({ email });

    if (!user) {
      user = new collection({ email, username: name, provider: "google" });
      await user.save();
    }

    const jwtToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token: jwtToken, user });
  } catch (error) {
    console.error("Google OAuth Error:", error);
    res.status(400).json({ message: "Google OAuth failed" });
  }
});

// GitHub OAuth Configuration
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails?.[0]?.value || profile.username + "@github.com";
      let user = await collection.findOne({ email });

      if (!user) {
        user = new collection({ email, username: profile.username, provider: "github" });
        await user.save();
      }

      done(null, user);
    }
  )
);

app.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    const jwtToken = jwt.sign({ id: req.user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.redirect(`http://localhost:3000/home?token=${jwtToken}`);
  }
);

// LinkedIn OAuth Configuration
passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails?.[0]?.value;
      let user = await collection.findOne({ email });

      if (!user) {
        user = new collection({ email, username: profile.displayName, provider: "linkedin" });
        await user.save();
      }

      done(null, user);
    }
  )
);

app.get("/auth/linkedin", passport.authenticate("linkedin"));

app.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", { failureRedirect: "/" }),
  (req, res) => {
    const jwtToken = jwt.sign({ id: req.user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.redirect(`http://localhost:3000/home?token=${jwtToken}`);
  }
);

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password, username, mobile } = req.body;

  try {
    const userExists = await collection.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new collection({
      email,
      password: hashedPassword,
      username,
      mobile,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error occurred during signup" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token, user: { username: user.username, mobile: user.mobile } });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error occurred during login" });
  }
});

// Middleware to authenticate JWT token
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Example of a protected route using JWT authentication
app.get('/protected', authenticateJWT, (req, res) => {
  res.status(200).json({ message: 'You have access to this protected route', user: req.user });
});

// Start Server
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
