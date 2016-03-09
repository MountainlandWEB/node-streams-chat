var fs = require("fs");

var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream("output.txt");
readerStream.setEncoding("UTF8");

var data = "";
readerStream.on("data", function (chunk) {
    data += chunk;
    writerStream.write(chunk, "UTF8");
});

readerStream.on("end", function () {
    console.log(data);
    writerStream.end();
});

writerStream.on("finish", function () {
    console.log("Write end");
});