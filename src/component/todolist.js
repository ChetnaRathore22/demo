import { useRef, useState } from "react";
import data from "../component/todoData"
function ToDo(){
    let addtask=useRef(" ");
    let addpriority=useRef(" ");
 
     const [todolist,setToDoList]=useState(data);
     const [priorities,setPriorities]=useState([{id:1,priority:"Low"},{id:2,priority:"Normal"},{id:3,priority:"High"}]);
     const [isactive,setISActive]=useState(true);
     const [isDisable,setIsDisable]=useState(false);
     const [taskStatus,setTaskStatus]=useState('active')

      
      
   const  addTask=()=>{
        let title=addtask.current.value;
        let pid=addpriority.current.value;
        let date = new Date();
        date = date.getDate()+ "/"+date.getMonth()+"/"+date.getFullYear();
        let status='active';
        let id = todolist.length+2
        let newtodo = {title,pid,date,status,id,};
        setToDoList([...todolist,newtodo]);

    }

    const changestate=(taskStatus)=>{
       setTaskStatus(taskStatus)
       setISActive(!isactive);
       setIsDisable(!isDisable);
    }
        
    const moveTask=(status,id)=>{
      let task = todolist.find((todo)=>todo.id==id);
      task.status=status;
      

    }   
      
      
        
      
      
         
        return <div className='container mt-2'>
          <div className='row bg-danger mt-2'>
            <div className='col-12 p-2  text-center text-white font-weight-bold'>To Do List</div>
          </div>
          <div className='row form-group'>
            <div className='col-6 mt-2'>
              <input ref={addtask}  type='text' placeholder='Enter Task' className='form-control' />
            </div>
            <div className='col-6 mt-2'>
                <select ref={addpriority} className='form-control'>
                  {priorities.map((obj,index)=> <option value={obj.id}>{obj.priority}</option>)}
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col-2'>
            <button className='btn btn-outline-danger' onClick={addTask}>Add Task</button>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-2'>
            <button  disabled={isactive}  onClick={()=>changestate('active')} className='btn btn-primary form-control'>Active:({todolist.filter((task)=>task.status=='active').length})</button>
            </div>
            <div className='col-2 ml-1'>
            <button    disabled={isDisable} onClick={()=>changestate('deactive')} className='btn btn-success form-control'>Deactive :({todolist.filter((task)=>task.status=='deactive').length})</button>
            </div>
      
      
           
          </div>
      
          <table className='table border mt-3'>
            <thead>
              <th>S.No    </th>
              <th>Title   </th>
              <th>Date    </th>
              <th>Priority</th>
              <th>Operation</th>
            </thead>
            <tbody>
                  {todolist.filter((task)=>task.status==taskStatus).sort((o1,o2)=>{return o2.pid-o1.pid}).map((task,index)=><tr style={{backgroundColor:task.pid==3?'#f08080' :task.pid==2?'#04aa6d':'orange'}}>
                    <td>{index+1}</td>
                    <td>{task.title}</td>
                    <td>{task.date}</td>
                    <td>{priorities.find((priorityObject)=>task.pid==priorityObject.id).priority}</td>
                    <td> {task.status == 'active' ?<button  onClick={()=>moveTask('active',task.id)} className='btn btn-primary'>Active</button>:<button onClick={()=>{moveTask('deactive',task.id)}} className='btn btn-danger'>DeActive</button>}</td>
                  </tr>)}
            </tbody>
          </table>
      
        </div>
      
       
      
       
}

export default ToDo;