
const stuModel=require("../models/employeeModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const key="renu123"

const InsertData=async(req,res)=>{
    let empNo=req.body.empno;
    let empNm=req.body.empnm;
    let empDp=req.body.empdp
    let empCt =req.body.empct;
    let empSell=req.body.empsell;
    let email =req.body.email;
    let pass=req.body.pass;
const hashpass =await bcrypt.hash(pass,10)

    const mydata=new stuModel({
        empnumber:empNo,
        empname:empNm,
        empdep:empDp,
        empcity:empCt,
         empsallary:empSell,
         email:email,
         pass:hashpass
    })
    mydata.save();
   // let myData=({rollno:roll,name:name,city:city,fees:fees})
   // console.log(myData);
    res.json(mydata);
}

const Logindata=async(req,res)=>{

    const {email,pass}=req.body;
  const user = await stuModel.findOne({email})

const invailpass= await bcrypt.compare(pass,user.pass)

    if(invailpass){
        const token =await jwt.sign({id:user._id,email:user.email,pass:user.pass},key)
        res.json({token:token,email:user.email,name:user.empnumber})
    }
else{
    res.send("djahfjhfs")
}



}



const Salary=async(req,res)=>{
    stuModel.find().then((data)=>{
        res.send(data);
    });
}

const DisplayData=async(req,res)=>{
    stuModel.find().then((mydata)=>{
        res.json(mydata);
    })
}


const Update=async(req,res)=>{
    stuModel.find().then((mydata)=>{
        res.json(mydata);
    })
}


const Delete= async(req,res)=>{
    let id= req.body.id;
    stuModel.findByIdAndDelete(id).then((myData)=>{
        res.json(myData);
    })
}
const EditData=async(req,res)=>{
    let id= req.body.id;
    stuModel.findById(id).then((myData)=>{
        res.json(myData)
    })
}
const upData=async(req,res)=>{
    let Emid=req.body._id;
    let empNo=req.body.empnumber;
    let empNm=req.body.empname;
    let empCt =req.body.empcity;
    let empSell=req.body.empsallary;
    stuModel.findByIdAndUpdate(Emid,{
        empnumber:empNo,
        empname:empNm,
        empcity:empCt,
         empsallary:empSell
    }).then((mydata)=>{

   res.send("save")
    })

}
const empSearch=async(req,res)=>{
    let emno=req.body.empno;
    stuModel.find({empnumber:emno}).then((mydata)=>{
        res.json(mydata)
    })
}

module.exports={
    InsertData,
    DisplayData,
    Salary,
    Update,
    Delete,
    EditData,
    upData,
    empSearch,
    Logindata
}