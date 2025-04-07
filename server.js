const express=require("express")
const app=express()
const http=require("http")
const cors=require("cors")
const server=http.createServer(app)
const controller=require("./controller")
app.use(express.json())

const allowedOrigins = [
  "http://127.0.0.1:5500",
  ];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // Deny the request
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.post("/submit",controller.form)
app.get("/msg",controller.msg)


server.listen(8001,()=>{console.log('server started')})