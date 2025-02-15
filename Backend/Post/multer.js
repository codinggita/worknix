const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

// Configure Multer with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'socialmedia_posts', // Folder name in Cloudinary
    resource_type: 'auto',      // Automatically detect file type (image/video)
  },
});

const upload = multer({ storage });

module.exports = upload;
