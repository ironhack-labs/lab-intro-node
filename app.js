var express = require('express')
var hbs = require('hbs')
var path = require('path')
var fs = require('fs')
var app = express();


var data = fs.readFileSync("objects.json");
var words = JSON.parse(data);

console.log(words);

var methods = {
    changeData(number, key ,data){
        words[number].key(key.toString()) = data.toString();
    }
}

methods.changeData(1, "name", "Jose");


hbs.registerPartials(__dirname+"/views/partials")

app.set("view engine", "hbs")
app.set('views',__dirname +"/views")

app.use(express.static("public"))

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/secondPage", function(req, res){
    res.render("mainPage", words);
})


app.listen(3000, function(){
    console.log("Listening to port");
})