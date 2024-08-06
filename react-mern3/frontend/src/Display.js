import axios from "axios";
import { useEffect, useState } from "react";

const Display=()=>{
    const [mydata,setMydata]=useState([]);

    const loaddata=()=>{
     let api ="http://localhost:8000/displayData";
     axios.get(api).then((res)=>{
        setMydata(res.data);
        //console.log(mydata);
     })
    }
    useEffect(()=>{
        loaddata();
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empnumber}</td>
                <td>{key.empname}</td>
                <td>{key.empdep}</td>
                <td>{key.empcity}</td>
                <td>{key.empsallary}</td>

            </tr>
            </>
        )
    })
    return(
        <><center>
        <h1>Display Employee Record</h1>
       <table align="center" border="2px solid black" >
         <tr>
           <th>Empno</th>
           <th>Empname</th>
           <th>EmpDep</th>
           <th>Empcity</th>
           <th>Empsallry</th>

         </tr>
         {ans}
       </table>
       </center>
        </>
    )
}
export default Display;