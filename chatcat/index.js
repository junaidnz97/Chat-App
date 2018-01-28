var express=require("express");
var app=express();
var socket=require("socket.io");

var server=app.listen("9090",function(){
	console.log("working");
});

app.use("/public",express.static("public"));

app.set("view engine","ejs");

app.get("/",function(req,res){

	res.render("index");
});

var io=socket(server);

io.on("connection",function(socket){

	console.log("made connection",socket.id);
	socket.on("chat",function(data){
		
		io.sockets.emit("chat",data);
		console.log(data.handle);
		console.log(data.message);
	});

	socket.on("type",function(data){
		socket.broadcast.emit("type",data);
	});
});