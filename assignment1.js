var fs = require ('fs');
fs.appendFile('hello.txt',"Hello World \n",function (print) {if(print) {
console.log(print);
}
else {"it is save"};
});
