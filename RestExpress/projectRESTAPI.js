var exp= require('express');
var ms= require('mysql2');
var cors = require("cors");
var bp = require("body-parser");

var app= exp();

app.listen(8500, function() {
	console.log("started rest api at 8500..");
})
var con = ms.createConnection({
	host:"localhost",
	user:"root",
	password:"saruna",
	database:"dac_project"
});
con.connect(function(err){
	if(!err)
	{
		console.log("db connected!!");
	}else{
		console.log("db not connected!!!");
	}
})
app.use(cors());
app.use(bp.json());


app.get("/userinfo", function(req, res){
	email= req.query.email;
	con.query("select * from users where email='"+email+"'", function(err, data){
		res.json(data);
	})
})



app.post("/insertUserData",function(req,res){
	console.log(req.body.name,req.body.email,req.body.password,req.body.date,req.body.gender,req.body.height,req.body.weight,req.body.role);
	console.log((req.body.date).toString());
    let qry = "insert into users(username,email,pass,dob,gender,height,weight,rolee) values('"+req.body.name+"','"+req.body.email+"','"+req.body.password+"','"+req.body.date+"','"+req.body.gender+"',"+req.body.height+","+req.body.weight+","+req.body.role+")";
	//[req.body.name,req.body.email,req.body.password,(req.body.date).toString(),req.body.gender,req.body.height,req.body.weight,req.body.role]
    con.query(qry,function(err){
        if(!err){
            res.send("Success!!!");
            console.log("Success!!!")
        }else{
            res.send("Error in Post query!!!");
            console.log("Error in Post query!!!")
        }
    });
})

app.get("/getusername", function(req, res){
	var uname = req.query.uname;
	con.query("select * from users where username= '"+uname+"'"  , function(err, data){
		res.json(data);
	})
})

app.get("/getemailidreg", function(req, res){
	var email = req.query.email;
	con.query("select * from users where email= '"+email+"'" , function(err, data){
		res.json(data);
	})
})

app.get("/getpassword",function(req, res){
	var email = req.query.email;
	con.query("select pass from users where email= '"+email+"'", function(err, data){
		if(!err)
			res.json(data);
		else
			console.log("errorr in pass")
	})
})


app.all("*", function(req,res){
	res.send("check url");
})