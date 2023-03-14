require("dotenv").config()
const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postsRoute = require("./routes/posts")
const uploadRoute = require("./routes/upload")

const app = express()
const PORT = 5000

// connect db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBと接続中")
  }).catch((err) => {
    console.log(err)
  })

// middleware
app.use("/images", express.static(path.join(__dirname, "public/images")))
app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postsRoute)
app.use("/api/upload", uploadRoute)

app.get("/", (req, res) => {
  res.send("hello express")
})

app.listen(PORT, () => console.log("サーバが起動しました"))