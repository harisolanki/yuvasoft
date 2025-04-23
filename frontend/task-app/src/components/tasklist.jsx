import { useState,useEffect } from "react";
import axios from "axios";


const Tasklist = () =>{
        const[task,settask] = useState([]);
        const[edittaskid,setedittaskid] = useState(null)
        const[editform,seteditform] = useState({title:"",description:""});

        const fetchtask = async() =>{
            try{
                const res = await axios.get("http://localhost:5000/task/gettask");
                settask(res.data);
            }
            catch(err){
                console.log(err);
                alert("error fetching task")
            }
        };

        useEffect(()=>{
            fetchtask();
        },[task]);

        const deletetask = async(id)=>{
            try{
                await axios.delete(`http://localhost:5000/task/deletetask/${id}`);
                fetchtask();
            }
            catch(err){
                console.log(err);
            }
        };

 
        const handlEditClick = (task)=>{
            setedittaskid(task._id);
            seteditform({title:task.title,description:task.description});
        };

        const handleEditChange = (e)=>{
            seteditform({...editform,[e.target.name]:e.target.value});
        };


        const handleUpdate = async (e) =>{
            e.preventDefault();
            try{
                await axios.put(`http://localhost:5000/task/update/${edittaskid}`,editform);
                setedittaskid(null);
                seteditform({title:"",description:""});
                fetchtask();

            }
            catch(err){
                console.log(err);
                alert("error updateing task");
            }
        };

        return(
            <div>
                <h2>All task</h2>
                {task.map((task)=>(
                    <div key={task._id} style={{marginBottom: "10px", border: "1px solid #ccc", padding: "10px"}}>
                        {edittaskid === task._id}
                            <form onSubmit={handleUpdate}>
                                <input  name="title" value={editform.title} onChange={handleEditChange}/>
                                <input  name="description" value={editform.description} onChange={handleEditChange}/>
                                <button type="submit">Update</button>
                                <button onClick={() => setedittaskid(null)}>cancel</button>
                            </form>
                        
                            <>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            
                            <button onClick={() => handlEditClick(task)}>edit</button>
                            <button onClick={() => deletetask(task._id)}>delete</button>
                            </>
                        
                    </div>
                ))}
            </div>
        )
}

export default Tasklist;