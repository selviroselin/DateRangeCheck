var app=require('express')();
app.get("/",function (req,res) {
	res.write("Hello Express");
	res.end();
});

//process.env.npm_package_config_port
var port = process.env.PORT || 1661;
app.listen(port,function(){
	console.log('server listeninig on port ' + port);
});