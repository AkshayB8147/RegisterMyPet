let docForm=(req,res)=>{
    res.render('forms/docForm')
};
let saveDetails=(req,res)=>{
    let docDeatils=req.body;
    console.log(docDeatils);
    res.send(docDeatils);
};
module.exports={docForm,saveDetails}