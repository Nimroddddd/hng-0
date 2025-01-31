import bodyParser from "body-parser";
import express from "express";
import cors from "cors"

const app = express();
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())



app.get("/", (req, res) => {
  const now = new Date()
  console.log(req.body);
  res.status(200).json({
    "email": "min123kabir@gmail.com",
    "currrent_datetime": now,
    "guthub_url": "blablabla"
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})