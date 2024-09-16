import { useState } from "react"

const AddTask =({tasklist, setTasklist})=>{
    const [addmodel, setAddmodel]=useState(false)
    const [projectname, setProjectname]=useState("")
    const [projectdis, setProjectdis]=useState("")
    const handleAdd = (e)=>{
        e.preventDefault()
        setAddmodel(false)
        setTasklist(
            [...tasklist, {projectname, projectdis}]
        )
    setProjectdis('')
    setProjectname('')
    }
    const handlechange = e=>{
        const {name, value}=e.target
        if (name === "add project")
            setProjectname(value)
        if(name ==="project descrition")setProjectdis(value);
     
        
    }
    return(
        <div>
        <button onClick={()=>setAddmodel(true)}>+New</button>
        {addmodel?(
            <div>
            <h1>add task</h1>
            <button onClick={()=>setAddmodel(false)}>X</button>
            <label>
                <input  type="text" placeholder=" task name" name="add project" value={projectname} onChange={handlechange} required/>
               
            </label>
            <div>
            <label>
                <textarea placeholder="description" name="project descrition" value={projectdis} onChange={handlechange}/>
                </label>
               </div>
                <div>
           <button onClick={handleAdd}>add task</button>
            </div>
            </div>
        ): null}
        </div>
    )
}
export default AddTask