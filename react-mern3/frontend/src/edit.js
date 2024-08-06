import axios from "axios";
import { useState ,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom"


const Edit=()=>{
    const {id}=useParams();
    const [mydata,setMydata]=useState({});
    let mynav=useNavigate();

    const loadData=()=>{
        let url="http://localhost:8000/editData";
        axios.post(url,{id:id}).then((res)=>{
            setMydata(res.data);
    

        })

    }
 
    useEffect(()=>{
        loadData();
    },[])
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}));
 
     }
   
    const handleSubmit=()=>{
 let url="http://localhost:8000/editsave";
        axios.post(url,mydata).then((res)=>{
            alert("update ");
        
       
        
        });
        mynav("/display/");
    }
    return(<>
    

    <center>
        <h1>Edit Employee Record</h1>
        <div className="insert">
            
        Enter ENumber:<input type="text"  value={mydata.empnumber} name="empnumber"  onChange={handleInput}/>
        <br/>
        Enter EmpName:<input type="text"  value={mydata.empname}  name="empname"  onChange={handleInput}/>
        <br/>
        Enter Department:<input type="text"  value={mydata.empdep}  name="empdep"  onChange={handleInput}/><br/>
        Enter Emp_City:<input type="text" value={mydata.empcity}  name="empcity"  onChange={handleInput}/>
        <br/>
        Enter EmSallary:<input type="text" value={mydata.empsallary}  name="empsallary" onChange={handleInput}/>
        <br/>   <br/>
        <button  onClick={handleSubmit}>Updata Data!!</button>
      
        </div>
        </center>
    
    </>)
}
export default Edit;