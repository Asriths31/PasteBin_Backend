import express from "express"
import dotenv from "dotenv"
import { apiRouter } from "./routes/apiRoutes.js";
import { pasteRouter } from "./routes/pasteRoutes.js";
import mongoose from "mongoose";
import cors from "cors"
dotenv.config()

const PORT=process.env.PORT;

const app=express();

app.use(cors({
    origin:["http://localhost:5173"]
}))

app.use(express.json())

const connectToDb=()=>{
    const mongo_uri=process.env.MONGO_URI
    if(mongo_uri){
        mongoose.connect(mongo_uri)
        .then(res=>console.log("Db Connected Successfully"))
        .catch(err=>{
            console.error("db connection failed",err)
            process.exit(1);
        })
    }
    else{
        console.log("Db Connection string not found")
    }
}

connectToDb()

app.use("/api",apiRouter)
app.use("/p",pasteRouter)


app.listen(PORT,console.log("Server Started"))