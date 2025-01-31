import express from "express";
import cors from "cors"

const app = express();
const port = 3000
app.use(cors())



app.get("/", (req, res) => {
  const now = new Date()
  res.status(200).json({
    "email": "min123kabir@gmail.com",
    "current_datetime": now,
    "github_url": "https://github.com/Nimroddddd/hng-0.git"
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})