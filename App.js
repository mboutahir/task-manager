import AddTask from "./AddTask";
import { useState } from "react";

function App() {
  const [tasklist, setTasklist]=useState([])
  return (
<div> 
<h1>TASK TRACKER</h1>
<p>add </p>
<AddTask tasklist={tasklist} setTasklist={setTasklist}/>
<p>task</p>
{tasklist.map((task, i)=>
<>
  <p>{task.projectname}</p>
  <p>{task.projectdis}</p>
</>
 
)}
 </div>
  );
}

export default App;
