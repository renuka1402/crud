import axios from "axios";
import { useState } from "react";

const Login=()=>{
    const [myinput,setMyinput]=useState({});

    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setMyinput(values=>({...values,[name]:value}));

    }
    const handleSubmit=()=>{
       let api="http://localhost:8000/LoginData";
       axios.post(api,myinput).then((res)=>{
       console.log(res.data);
       localStorage.setItem("token",res.data.token)
       alert("data insert!!")
       })
    }
    return(
        <>
        <center>
        <h1>Insert Employee Record</h1>
        <div className="insert">
      
        Enter Email:<input type="text" name="email" id="sal" onChange={handleInput}/>
        Enter pass:<input type="password" name="pass" id="sal" onChange={handleInput}/>
        <button  onClick={handleSubmit}>Save!!</button>
      
        </div>
        </center>

        </>
    );
}
export default Login;