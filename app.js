const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();



app.set('view engine', 'ejs');

app.set('views', 'views');

app.use('/auth',(req,res)=>{
    res.render('auth');
})

app.post('/user_login',(req,res)=>{
    res.render('user_login');
})

app.post('/projects_login',(req,res)=>{
    res.render('projects_login');
})

app.post('/company_login',(req,res)=>{
    res.render('company_login');
})
app.post('/xyz',(req,res)=>{
    console.log(req.body);
    res.send("COMPANY DETAILS FOUND");
})

app.get('/login_final',(req,res)=>{
    
    res.render('company_login_final');
})
app.post('/abc',(req,res)=>{
    console.log(req.body);
    res.send("COMPANY DETAILS FOUND");
})




const port =process.env.PORT|| 3000 ;
app.listen(port,()=>{
    console.log(`server-started on port ${port}`);
});