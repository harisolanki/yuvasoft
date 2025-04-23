import React from "react";
// import React from "react-router-dom"
import Taskfrom from "./components/taskform"
import Tasklist from "./components/tasklist";


function App(){
  return(
    <div className="container">
      <Taskfrom/>
      <Tasklist/>
    </div>
  );
}

export default App;