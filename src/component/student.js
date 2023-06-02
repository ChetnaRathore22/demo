import { useRef, useState } from "react";
import data from "../component/data"
function Student(){
    


    let userroll = useRef(" ");
    let username = useRef(" ");
    let usermobile = useRef(" ");
    let userbranch = useRef(" ");


    const [dataList,setdata] = useState(data);
    const [branch,setBranch]= useState('all');
    const [rollstatus,setRollStatus] = useState(false);

     const addStudent=()=>{
        let roll = userroll.current.value;
        let name = username.current.value;
        let Mobile=usermobile.current.value;
        let branch=userbranch.current.value;
        let newstudent = {roll,name,Mobile,branch};
         setdata([...dataList,newstudent])
     }

     const countBranch=(branch)=>{
        setBranch(branch);
     }

     const checkStudent=()=>{
        let roll = userroll.current.value;
        let status= dataList.some((data)=>data.roll==roll);
        setRollStatus(status);
     }

     const removeStudent=(roll)=>{
      if(window.confirm("Are You Sure ?")){
       let index =  dataList.findIndex((student)=>student.roll==roll);
       console.log(dataList);
       dataList.splice(index,1);
       setdata([...dataList]);

     }  
    }

    

    return <div className="container">
        <div className="row bg-dark p-1 mt-5">
            <h3  className="text-white col-12 text-center">Student</h3>
        </div>

        <div className=" row form-group mt-3">
           <div className="col-6">
            <input ref={userroll} onBlur={checkStudent} className="form-control" placeholder="Enter Roll No" />
             { rollstatus && <small id="msg" className='text-danger'>Roll Number is already Taken </small>}
           </div>
           <div className="col-6">
            <input ref={username} className="form-control" placeholder="Enter Name" />
           </div>
        </div>
        <div className=" row form-group mt-3">
           <div className="col-6">
            <input ref={usermobile} className="form-control" placeholder="Enter Mobile " />
           </div>
           <div className="col-6">
             <select ref={userbranch} className="form-control">
                <option value='0' >Select Branch </option>
                <option value='CS'>CS </option>
                <option value='IT'>IT </option>
                <option value='CV'>CV </option>
                <option value='EC'>EC </option>
             </select>
           </div>
        </div>

        <div className='row'>
          <div className='col-2 mt-1 mb-2 '>
            <button onClick={addStudent} className='btn btn-dark'>Add Student</button>
          </div>
          <div className="col-10 text-right">
              <button onClick={()=>{countBranch('CS')}}  className="m-1 btn btn-danger form-control col-1">CS({dataList.filter((task)=>task.branch=="CS").length})</button>
              <button onClick={()=>{countBranch('CV')}}  className="m-1 btn btn-warning form-control col-1">CV({dataList.filter((task)=>task.branch=="CV").length})</button>
               <button onClick={()=>{countBranch('IT')}} className="m-1 btn btn-secondary  form-control col-1">IT({dataList.filter((task)=>task.branch=="IT").length})</button>
               <button onClick={()=>{countBranch('EC')}} className="m-1 btn btn-dark form-control col-1">EC({dataList.filter((task)=>task.branch=="EC").length})</button>
               <button onClick={()=>{countBranch('all')}} className="m-1 btn btn-primary form-control col-1">Total({dataList.length})</button>
          </div>
          </div>
          
        

         <table className="table border mt-5">
            <thead>
                <tr>
                    <th>S.No</th>
                   <th>Roll No</th> 
                   <th>Name</th> 
                   <th>Mobile</th> 
                   <th>Branch</th> 
                   <th>Remove</th> 
                </tr>
            </thead>
            <tbody>
                {dataList.filter((student)=>branch=='all'||student.branch==branch).map((student,index)=><tr>
                    <td>{index+1}</td>
                    <td>{student.roll}</td>
                    <td>{student.name}</td>
                    <td>{student.Mobile}</td>
                    <td>{student.branch}</td>
                    <td><button onClick={()=>{removeStudent(student.roll)}} className="btn btn-outline-danger">Remove</button></td>
                    </tr>)}
                
            </tbody>

         </table>

         </div>
}


export default Student;