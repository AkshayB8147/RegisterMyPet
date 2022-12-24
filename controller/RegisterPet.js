const db0=require('../db/conn');

// send petform template
let petForm=(req,res)=>{
    res.render('forms/petForm');
};

// save details from form to mongo 
let saveDetails=async (req,res)=>{
    let petDeatils={
        "ownerName":req.body.ownerName,
        "ownerPhone":Number(req.body.ownerPhone),
        "ownerEmail":req.body.ownerEmail,
        "password":req.body.password,
        "petDetails":{
            "petName":req.body.petName,
            "petBreed":req.body.petBreed,
            "petGender":req.body.petGender,
            "dob":Date(req.body.dob),
        },
        "address":{
            "street":req.body.street,
            "city":req.body.city,
            "pincode":Number(req.body.pincode),
        }
    };
    console.log(petDeatils);
    // res.send(petDeatils);
    let db=await db0.getDb();
    let registered_pets=await db.collection('registered_pets');
    await registered_pets.insertOne(petDeatils);
    // req.flash({success_msg:'User Registered'});
    // res.redirect('/loginPet');
    res.redirect('/loginPet',{success_msg:'User Added. Now you can login'});
};
module.exports={petForm,saveDetails}