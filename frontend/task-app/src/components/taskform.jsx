import { useState } from "react";
import axios from "axios";


const Taskfrom = () =>{
    const [formdata,setformdata]= useState({title:"",description:""});

    const handleChange = (e) =>{
        setformdata({...formdata,[e.target.name]:e.target.value});
    };
    // Reduxx 
    // Context API
    // how to fetch api render 
    // useCallbac
    // useMemo
    // hoc

    // what is hoisting
    // what hoF
    // WHAT ARE CLOSURE
    // FIND , FILTER AND SPLICE
    // LET VAR CONST
    





    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!formdata.title || !formdata.description){
            alert("pls fill all the fields");
            return;
        }

        try{
            await axios.post("http://localhost:5000/task/create",formdata);
            alert("task created");
            setformdata({title:"",description:""});
        }
        catch(err){
            console.log(err);
            alert("error creating task");
        }
    };


    return(
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="enter title"
                value={formdata.title}
                onChange={handleChange}
            />

            <input
                name="description"
                placeholder="enter description"
                value={formdata.description}
                onChange={handleChange}
            />

            <button type="submit">Add task</button>
        </form>
    )
}

export default Taskfrom;