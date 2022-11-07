var http = require('http');

const fs = require('fs');
const { table } = require('console');

const server = http.createServer(function (req, res) {

if(req.url==='/'){

res.writeHead(200,{"Content-Type": "text/html"});

fs.createReadStream('10.html').pipe(res);

}

else if(req.url ==='/server' && req.method == 'POST'){

var rawData = '';

req.on('data',function(data){

rawData += data;

})

req.on('end',function(){

var inputdata = new URLSearchParams(rawData);

res.writeHead(200,{"Content-Type": "text/html"});

res.write('Name ' +inputdata.get('data1') + '<br>');

res.write('password: ' +inputdata.get('data2') + '<br>');
res.write('Age: ' +inputdata.get('data3') + '<br>');
res.write('mobile: ' +inputdata.get('data4') + '<br>');
res.write('email: ' +inputdata.get('data5') + '<br>');
res.write('gender: ' +inputdata.get('data6') + '<br>');
res.write('state: ' +inputdata.get('data7') + '<br>');
res.write('skills: ' +inputdata.get('data8') + '<br>');
res.end();

});

}

});
server.listen(8080,function(){

    console.log('listening at 2000')
    
});