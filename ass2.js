var fs = require ('fs');
var randomword = require ("random-words");
fs.appendFile('hello1.txt',randomword()+'\n', function(err)  

{ 
	if (err) {
		
    console.log(err);
	          }
	else { 
		fs.readFile('hello1.txt','utf-8',function (err,data) {
    if (err)  {
    return console.log(err);
          		}
          else {
          	console.log(data);
          	var lines = data.toString().split('\n').length - 1;
                console.log(lines);
          	} 
        });  
      
         
        console.log("Random word successfully written to the file.");
    }
});
