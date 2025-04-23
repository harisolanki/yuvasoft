import express from "express"
import connectdb from "./config/db.js";
import router from "./routers/task.routers.js";
import cors from "cors";

connectdb();
const app=express();
app.use(express.json());
app.use(cors());
app.use("/task",router);
app.listen(5000,()=>{
    console.log("server started at port no 5000")
});