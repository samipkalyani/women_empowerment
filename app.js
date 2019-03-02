const path = require('path');

const express = require('express');
const bodyparser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


//ROUTES
const userRoutes = require('./routes/user');
const companyRoutes = require('./routes1/company');
const authRoutes = require('./routes/auth');
const projectRoutes=require('./routes/projects')


app.use(authRoutes);
app.use(userRoutes);
app.use(projectRoutes);
app.use(companyRoutes)



app.
app.post('/user_login',(req,res)=>{
    res.render('user_login');
})

app.post('/projects_login',(req,res)=>{
    res.render('projects_login');
})







const port =process.env.PORT|| 3000 ;
app.listen(port,()=>{
    console.log(`server-started on port ${port}`);
});