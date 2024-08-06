import axios from "axios";
import { useState } from "react";

const Insert=()=>{
    const [myinput,setMyinput]=useState({});

    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setMyinput(values=>({...values,[name]:value}));

    }
    const handleSubmit=()=>{
       let api="http://localhost:8000/insertData";
       axios.post(api,myinput).then((res)=>{
       // console.log(res.data);
       alert("data insert!!")
       })
    }
    return(
        <>
        <center>
        <h1>Insert Employee Record</h1>
        <div className="insert">
            
        Enter ENumber:<input type="text" name="empno" id="no" onChange={handleInput}/>
        <br/>
        Enter EmpName:<input type="text" name="empnm" id="nm" onChange={handleInput}/>
        <br/>
        Enter Department:<input type="text" name="empdp" id="dp" onChange={handleInput}/>
         <br/>
        Enter Emp_City:<input type="text" name="empct" id="ct" onChange={handleInput}/>
        <br/>
        Enter EmSallary:<input type="text" name="empsell" id="sal" onChange={handleInput}/>
        <br/>   <br/>
        Enter Email:<input type="text" name="email" id="sal" onChange={handleInput}/>
        Enter pass:<input type="password" name="pass" id="sal" onChange={handleInput}/>
        <button  onClick={handleSubmit}>Save!!</button>
      
        </div>
        </center>

        </>
    );
}
export default Insert;