
const express=require("express")

const multer  = require('multer');
const path = require("path");

const app=express();

app.set("view engine","ejs")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Images')
    },
    filename: function (req, file, cb) {
    console.log(file)
      cb(null, Date.now()+path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })




  app.get('/upload',(req, res) =>{
   res.send("Please Upload Image Here!!")
  })

  app.post('/upload',upload.single("image"), (req, res) =>{
    // req.file is the `avatar` file
    res.send("File uploaded!!")
    // req.body will hold the text fields, if there were any
  })


app.listen(3500)
    console.log("port on 3500!!")




