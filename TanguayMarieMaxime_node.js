const http = require("http");
const fs = require("fs");
let provinces = null
fs.readFile('provinces.json', lireJSON)

function lireJSON(err, data) {
    if (err) throw err
    provinces = JSON.parse(data)
}

function montrerLesProvinces(provinces){
    let arr = []
    for (province in provinces){
        arr = [...arr,(`${province} - ${provinces[province]}`)];
    }
    return arr;
}

http.createServer( (request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  montrerLesProvinces(provinces).map((province) => {
    response.write(province);
  });
  response.end();
}).listen(8888);
