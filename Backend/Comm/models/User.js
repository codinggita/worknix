// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, 'Please add a name'],
//         },
//         email: {
//             type: String,
//             required: [true, 'Please add an email'],
//             unique: true,
//         },
//         password: {
//             type: String,
//             required: [true, 'Please add a password'],
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// // Hash password before saving
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

// // Compare passwords for login
// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// module.exports = User;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" }, // Store Cloudinary URL
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
