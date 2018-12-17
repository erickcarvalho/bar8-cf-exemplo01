var config = require('./config/environment');
const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(config.port, function () {
    console.log("Don't panic - Project Bar8 + Cloud Foundry is alive!");
});