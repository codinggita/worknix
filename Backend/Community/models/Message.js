import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  community: { type: mongoose.Schema.Types.ObjectId, ref: 'Community', required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String },
  attachments: [{ type: String }],
  voiceNote: { type: String },
}, { timestamps: true });

export default mongoose.model('Message', MessageSchema);
