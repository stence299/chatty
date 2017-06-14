var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(express.static("assets"))
app.use(bodyParser.json())

var messages = [{message: "Type", time: "Today"}];

app.get("/messages", function(req, res, next) {
    res.send(messages)
})
app.post("/messages", function (req, res, next){
    console.log(req.body.message);
    messages.push({ message: req.body.message, time: new Date() })
    res.status(200).json({messages: messages});
})

app.listen(3000)
console.log("listening")

