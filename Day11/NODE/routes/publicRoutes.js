const { Router } = require("express");
const router = Router();
const productSchema = require("../modals/productSchema");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { imageUploader } = require("../middlewares/s3");

const { uploadFile, getFileStream } = require("../middlewares/s3");
const { AppSync } = require("aws-sdk");

router.get("/images/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

// router.post("/uploadphoto", upload.single("image"), async (req, res) => {
//   console.log(req.body);
//   console.log(req.file);
//   const file = req.file;

//   const result = await uploadFile(file);
//   console.log(result);
//   res.send({ imagePath: `image/${result.Key}` });
// });

// router.get("/products", async (req, res) => {
//   const products = await productSchema.find({});
//   res.send(products);
// });

router.post("/uploadphoto", imageUploader, (req, res) => {
  console.log(req.result);
  res.send("File uploaded successfully!");
});

module.exports = router;
