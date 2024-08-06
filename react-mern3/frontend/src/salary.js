import { useState,useEffect } from "react";
import axios from "axios";

const Salary=()=>{
    const[prodata,setProdata]=useState([]);

    var totalsalary=0;
   

    const loadData=()=>{
        axios.get("http://localhost:8000/salary").then((res)=>{
            setProdata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    const ans=prodata.map((key)=>{
        totalsalary=totalsalary + key.empsallary;
    

    })

    return(
        <>
        <center>
            <h1>Total salary: {totalsalary}</h1>
         
            </center>
        </>
    )
}

export default Salary;