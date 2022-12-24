const db0=require('../db/conn');

// show docForm
let docForm=(req,res)=>{
    res.render('forms/docForm');
};

// save details from form to mongo
let saveDetails=async (req,res)=>{
    let docDeatils={
        "docName":req.body.docName,
        "docPhone":Number(req.body.docPhone),
        "docEmail":req.body.docEmail,
        "password":req.body.password,
        "address":{
            "street":req.body.street,
            "city":req.body.city,
            "pincode":Number(req.body.pincode),
        }
    };
    // let docDeatils=req.body;
    console.log(docDeatils);
    // res.send(docDeatils);
    let db=await db0.getDb();
    let registered_docs=await db.collection('registered_docs');
    await registered_docs.insertOne(docDeatils,);
    req.flash('success_msg','User Added. Now you can Login');
    res.redirect('/loginDoc');
};
module.exports={docForm,saveDetails}