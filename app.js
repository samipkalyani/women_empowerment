const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();



app.set('view engine', 'ejs');

app.set('views', 'views');

app.use('/',(reg,res)=>{
    res.send("Hello");
})





app.listen(3000);