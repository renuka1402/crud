import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata,setMydata]=useState([]);
   let myNav=useNavigate();

    const loaddata=()=>{
     let url="http://localhost:8000/updateData";
     axios.get(url).then((res)=>{
        setMydata(res.data);
        //console.log(mydata);
     })
    }
    useEffect(()=>{
        loaddata();
    },[])
    const recDelete=(id)=>{
        let url= ` http://localhost:8000/delete`;
      axios.post(url,{id:id}).then((res)=>{
        loaddata();
      })
        };
        const recEdit=(id)=>{
            myNav("/edit/"+id)
        }
   

    const ans=mydata.map((key)=>{
        return(
           
            <tr>
                <td>{key.empnumber}</td>
                <td>{key.empname}</td>
                <td>{key.empcity}</td>
                <td>{key.empsallary}</td>
         
                <td>
                <a href="#" onClick={()=>{recDelete(key._id)}}>
               <button >delete</button></a>
               <a href="#" onClick={()=>{recEdit(key._id)}}>
               <button >edit</button>
            
               

            </a>
            </td>
          
            </tr>
           
        )
    })
    return(
        <><center>
        <h1>Update Employee Record</h1>
       <table align="center" border="2px solid black">
         <tr >
           <th>Empno</th>
           <th>Empname</th>
           <th>Empcity</th>
           <th>Empsal</th>
           <th></th>


         </tr>
         {ans}
       </table>
       </center>
        </>
    )
}

export default Update;