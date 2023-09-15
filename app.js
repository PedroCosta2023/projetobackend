var express = require("express")
var app = express()

var myLogger = function (req, res, next) {
    console.log('Logado');
    next();
}

var requestTime = function (req, res, next) {
    console.log("2023");
    req.requestTime = Date.now();
    next();
}
app.use(requestTime);

app.get('/aloha', function(req, res){
    var responseText = 'Hello World! ';
    responseText += 'Requested at:' + req.requestTime + " "; 
    res.send(responseText)
})
app.post('/salvar', function(req, res){
    res.send('Salvando Dados!')
})

app.listen(3000);