import mongoose from "mongoose";

const connectdb = async()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/yuvasoft")
    console.log("database is connected");
    }
    catch(err){
        console.log(err);
    }
}

export default connectdb;


 
num=[1,2,3,4]

let num1 = num.map(n=>n%2==0)
console.log(null)

let promise =new promise("api")
.then(res.data)
.catch(err)



