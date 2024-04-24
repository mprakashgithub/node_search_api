const express = require('express');
const multer = require('multer');
const EventEmitter=require('events');
require('./config');
const userData = require("./user_data");
const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
res.send("API Called");
})

// app.get("/search/:key", async (req, res) => {
//     let data = await userData.find({
//         "$or": [{ "name": { $regex: req.params.key } },
//         { "email": { $regex: req.params.key } },]
//     })
//     console.log(req.params.key)
//     res.send(data)
// })


///File Upload
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, 'uploads')
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".png")
//         }
//     })
// }).single('file_name');

// app.post("/upload", upload, (req, resp) => {
//     resp.send("file upload")
// });

app.listen(1111)