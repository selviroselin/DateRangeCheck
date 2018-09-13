var fs=require('fs');
var options ={encoding :'utf8', flag:'r'};
fs.readFile('./data.txt', options, function(err,fileData){
if(err) { 
	console.log('File not found');
}else {
	console.log(fileData);
};
});
console.log("Program ends");