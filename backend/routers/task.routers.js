import express from "express";
import { createtask,gettask,updatetask,deletetask } from "../controller/task.controller.js";

const router = express.Router();

router.post("/create",createtask);
router.get("/gettask",gettask);
router.put("/update/:id",updatetask);
router.delete("/deletetask/:id",deletetask);


export default router;