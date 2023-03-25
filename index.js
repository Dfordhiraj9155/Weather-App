const fs = require("fs");
const http = require("http");
'use strict';
 
var requests = require('requests');
const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceData = (tempVal,orgVal)=>{
       let curr = tempVal.replace("{%tempVal%}",orgVal.main.temp);
       curr = curr.replace("{%tempMin%}",orgVal.main.temp_min);
       curr = curr.replace("{%tempMax%}",orgVal.main.temp_max);
       curr = curr.replace("{%location%}",orgVal.name);
       curr = curr.replace("{%cn%}",orgVal.sys.country);
       return curr;
}
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=e50322f1a66313e6bc06439334a03501"
        )
            .on("data",  (chunk) =>{
                const obj = JSON.parse(chunk);
                // console.log(obj);
                const arrData = [obj];
                // console.log((obj.main.temp));
                // console.log(obj.main);
                const ot = arrData.map((val)=> replaceData(homeFile,val)).join("");
                res.write(ot);
                // console.log(ot);
            })
            .on('end',  (err)=> {
                if (err) return console.log('connection closed due to errors', err);

                // console.log('end');
                res.end();
            });
    }
})
server.listen(8000,"127.0.0.1");