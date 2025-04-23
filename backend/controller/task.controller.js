import Task from "../models/task.models.js"


export const createtask = async(req,res)=>{
    const{title,description}=req.body;

    try{
        const user = await Task.create({title,description});
        return res.status(200).json({message:"task created ",user});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
}



export const gettask = async(req,res)=>{
    try{
        const task = await Task.find();
        return res.json(task);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
}

export const updatetask = async(req,res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,{$:req.body},{new:true})
        return res.status(200).json({message:"task updated successfully"})
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:"internal server error"});
    }
}

export const deletetask  = async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:"task deleted successfully"})
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:"internal server error"})
    }
} 