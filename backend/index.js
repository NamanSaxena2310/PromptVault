const express = require("express")
const { userRouter } = require("./routes/userRoutes")
const { connectDB } = require("./config/mongoDB")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config();

const app =  express()
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


app.use("/user",userRouter)

app.listen(3000,()=>{
  console.log("App running at port 3000")
 
})