const express = require('express');
const app = express();

app.get("/", function(request, response){
    //console.log(request);
    response.send('<h1>Hello, World!</h1>');
});

app.get("/about", function(req, res){
    res.send('<h1>About</h1>');
});

app.get("/contact", function(req, res){
    res.send('<b>Contact email: admin@email.com</b>');
});

app.listen(3000, function(){
    console.log("Server is running on Port 3000.");
});