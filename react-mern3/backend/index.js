let express=require("express");
let app=express();
let mongoose=require("mongoose");
const cors=require("cors");
app.use(cors());
const bodyParser=require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/janvi");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const stuController=require("./controllers/employeeController");

app.post("/insertData",stuController.InsertData);
app.get("/salary",stuController.Salary);
app.get("/displayData",stuController.DisplayData);
app.get("/updateData",stuController.Update);
app.post("/delete",stuController.Delete);
app.post("/editsave",stuController.upData)
app.post("/editData",stuController.EditData)
app.post("/search",stuController.empSearch)
app.post("/LoginData",stuController.Logindata)


app.listen(8000);