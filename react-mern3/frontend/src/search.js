import axios from "axios";
import {useState} from "react"
const Search=()=>{
    const [sdata,setSdata]=useState("")
    const[ mydata,setMydata]=useState([]);

    let ans;

    const handlesubmit=()=>{
        let url="http://localhost:8000/search";
       axios.post(url,{empno:sdata}).then((res)=>{
            setMydata(res.data)
        })
    }
  
        ans=mydata.map((key)=>{
            return(<>
            
            
            emp number:{key.empnumber}<br/>
            emp name:{key.empname}<br/>
            emp city:{key.empcity}<br/>
            salary:{key.empsallary}<br/>
            
            
            </>)
        })
    
    return(<>
    <center>
        <h1>Search Employee Record</h1>
        Enter employee number:<input type="text"  value={sdata}  onChange={(e)=>{setSdata(e.target.value)}}/>
       
        <button onClick={handlesubmit}>search</button>
        <br/>    <br/>    <br/>    <br/>    <br/>
        
        {ans}
    
        </center>
    
    
    </>)
}
export default Search
