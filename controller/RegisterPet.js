let petForm=(req,res)=>{
    res.render('forms/petForm')
};
let saveDetails=(req,res)=>{
    let petDeatils=req.body;
    console.log(petDeatils);
    res.send('Pet Registered');
};
module.exports={petForm,saveDetails}