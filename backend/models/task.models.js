import mongoose from "mongoose";

const taskschema = mongoose.Schema({
    title:{
        type:String,
        reuired:true
    },
    description:{
        type:String,
        reuired:true
    },
});

export default mongoose.model("Task",taskschema);