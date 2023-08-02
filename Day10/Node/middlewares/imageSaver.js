const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Function to ensure the "uploads/" directory exists
const ensureUploadsDirectory = () => {
  const uploadDir = path.join(__dirname, "uploads/");
  console.log(uploadDir);

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    ensureUploadsDirectory();
    cb(null, "/home/shahrukh/Desktop/JS/ProjectMongoose/routes/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const imageSaver = multer({ storage: storage });

module.exports = imageSaver;
