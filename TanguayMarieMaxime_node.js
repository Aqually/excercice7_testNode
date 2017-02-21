const http = require("http");
const fs = require("fs");
let provinces = null
fs.readFile('provinces.json', lireJSON)

function lireJSON(err, data) {
    if (err)
        throw err
    provinces = JSON.parse(data)
}

function montrerLesProvinces(provinces) {
    let stringProvinces = "";
    for (province in provinces) {
        stringProvinces += `<tr><td style="border: 1px solid black">${province}</td> <td style="border: 1px solid black">${provinces[province]}</td></tr>`
    }
    return stringProvinces;
}

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    let table = "<table style='font-size: 2em; text-align: center; margin: 0 auto; width: 80%;'>";
    table += montrerLesProvinces(provinces)
    table += "</table>"
    response.write(table);
    response.end();
}).listen(8888);
