/**
 * Created by i52017 on 3/9/16.
 */
var fs = require("fs");

var reader = fs.createReadStream("input.txt");
var writer = fs.createWriteStream("output.txt");

var data = "";
reader.on("data", function (chunk){
    data += chunk;
    writer.write(chunk);
});

reader.on("end", function(){
    console.log(data);
    writer.end();
});

writer.on("finish", function(){
    console.log("Writer end");
})