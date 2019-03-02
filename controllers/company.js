exports.getcompanylogin = (req, res, next) => {
    res.render('company_login');
};
exports.postcompanylogin('/xyz',(req,res)=>{
    console.log(req.body);
    res.send("COMPANY DETAILS FOUND");
})  