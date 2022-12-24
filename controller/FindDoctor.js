const db0=require('../db/conn');

let find=async (req,res)=>{
    console.log(req.session.user.address.city);
    let city=req.session.user.address.city;
    let db=await db0.getDb();
    let docsAvailable= await db.collection('registered_docs').find({'address.city':city}).toArray();
    console.log(docsAvailable);
    res.render('useless/findDoc',{docsAvailable});
}



module.exports=find;