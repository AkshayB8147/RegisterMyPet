let petForm=(req,res)=>{
    res.render('forms/petForm')
};
let saveDetails=(req,res)=>{
    let petDeatils=req.body;
    console.log(petDeatils);
    res.send(petDeatils);
};
module.exports={petForm,saveDetails}