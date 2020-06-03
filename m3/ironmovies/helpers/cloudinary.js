const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDSECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ironmovies",
    use_filename: true,
  },
});

module.exports = multer({ storage });
