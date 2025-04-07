const express=require("express")
const app=express()
const http=require("http")
const cors=require("cors")
const server=http.createServer(app)
const controller=require("./controller")
app.use(express.json())
app.use(cors())

app.post("/submit",controller.form)
app.get("/msg",controller.msg)


server.listen(8001,()=>{console.log('server started')})