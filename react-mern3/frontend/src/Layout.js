import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
           <div>
    
    <div className="mainclass1">
      
    <ul>
        <li> <Link to="home">Home</Link></li> 
     
        <li><Link to="insert">Insert Data</Link></li>
       
        <li><Link to="display">Display Data</Link></li>
        <li><Link to="salary">Salary Summery</Link></li>
        <li><Link to="update">Update Data</Link></li>
        <li><Link to="login">login</Link></li>
        
      
       <li> <Link to ="search">Search Employee</Link></li>
        
    </ul>


    </div>
</div>
<div id="showdata">
<Outlet/> 
</div>

        </>
    )
}
export default Layout;