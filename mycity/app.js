var exp=require("express");
var app=exp();
app.set('view engine', 'ejs');

app.get ('/',function(req, res){
   res.render('home.ejs',{title:'I Love my city',
						  headline:'Every city has its own personality'});	
});

app.get ('/:city',function(req, res){
   var cityname = req.params.city;
   var titleValue;
   var headlineValue;
   if (cityname === 'newyork') {
   	titleValue = "New York";
    headlineValue = "Busines Capital of the World";  
   } else if (cityname === 'london') {
   	titleValue = "London";
    headlineValue = "City of the Thames";  
   } else if (cityname === 'newdelhi') {
   	titleValue = "New Delhi";
    headlineValue = "Capital City of India";  
   } else if (cityname === 'paris') {
   	titleValue = "Paris";
    headlineValue = "Fashion captial of the world";  
   }
   res.render('city.ejs',{title:titleValue,
                          headline:headlineValue});	
});

var port = process.env.PORT || 4000;
app.listen(port,function() {
console.log("listening to the port 4000");
});