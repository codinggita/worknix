const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  profilePhoto: { type: String }, // Cloudinary URL
  isPrivate: { type: Boolean, default: false },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Community', CommunitySchema);