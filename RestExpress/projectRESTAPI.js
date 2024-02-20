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
	password:"sql123",
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

app.get("/getfoodlist",function(req, res){
	con.query("select * from fooditems",function(err,data){
		res.json(data);
	})
})


app.get("/getsearchfoodlist",function(req, res){
	fname=req.query.fname;
	con.query("select * from fooditems where food_name like '%"+fname+"%'",function(err,data){
		if(!err){
			res.json(data);
		}
		else
			console.log("cannot send");
	})
})



app.get("/getusername", function(req, res){
	var uname = req.query.uname;
	con.query("select * from users where username= '"+uname+"'" , function(err, data){
		if(!err){
			res.json(data);
		}else{
			console.log("Error email");
		}
	})
})

app.get("/getemailidreg", function(req, res){
	var email = req.query.email;
	con.query("select * from customers where email='"+email+"'", function(err, data){
		if(!err){
			res.json(data);
		}else{
			res.send("hello");
			console.log("Error email");
		}
		
	})
})
app.get("/getemailidregT", function(req, res){
	var email = req.query.email;
	con.query("select * from trainers where email='"+email+"'", function(err, data){
		if(!err){
			res.json(data);
			console.log("Success email");
		}else{
			res.send("hello");
			console.log("Error email");
		}
		
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