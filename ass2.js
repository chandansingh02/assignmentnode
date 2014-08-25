var fs = require ('fs');
var randomword = require ('random-words');
fs.appendFile('hello1.txt',"randomword()+='\n'", function(print)
{if(print) {
	console.log(print);
}
	else{
	console.log("the content is save");
	}
});