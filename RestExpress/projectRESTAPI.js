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


/*

app.get("/checkUser",function(req,res){
    let user = req.query.email;
    console.log(req.query.email);
    let qry = "select * from customers where email = ?";
    con.query(qry,[user],function(err,data){
        if(!err){
            res.json(data);
        }else{
            console.log("error in query!!!")
        }
    })
})*/

app.post("/insertUserData",function(req,res){
	console.log(req.body.name,req.body.email,req.body.password,req.body.dob,req.body.gender,req.body.height,req.body.weight,req.body.role);
    let qry = "insert into users(username,email,password,dob,gender,height,weight,role) values(?,?,?,?,?,?,?,?)";

    con.query(qry,[req.body.name,req.body.email,req.body.password,req.body.dob,req.body.gender,req.body.height,req.body.weight,req.body.role],function(err){
        if(!err){
            res.send("Success!!!");
            console.log("Success!!!")
        }else{
            res.send("Error in Post query!!!");
            console.log("Error in Post query!!!")
        }
    });
})

app.get("/getemailid", function(req, res){
	var email = req.query.email;
	con.query("select * from users where email= '"+email+"' and role="+req.query.role  , function(err, data){
		res.json(data);
	})
})

app.get("/getpassword",function(req, res){
	var email = req.query.email;
	con.query("select password from users where email= '"+email+"'", function(err, data){

		res.json(data);
	})
})


app.all("*", function(req,res){
	res.send("check url");
})