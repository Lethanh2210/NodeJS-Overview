let fs = require('fs');

fs.readFile('data','utf-8', function (err,data){
    console.log(data);
})

console.log('nguoi dep')