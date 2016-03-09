/**
 * Created by i52017 on 3/9/16.
 */
var net = require("net");

var client = new net.Socket();
client.connect(8888, "127.0.0.1", function(){
   console.log("Connected");
    process.stdin.setEncoding("utf8");
    process.stdin.on("readable", function(){
        var chunk = process.stdin.read();
        if (chunk !== null) {
            client.write(chunk);
        }
    });
});

client.on("data", function(data){
    process.stdout.write(data);
});

client.on("end", function(){
    process.exit();
});

