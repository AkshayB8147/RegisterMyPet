const mongoose=require('mongoose');

let AddressSchema=mongoose.Schema({
    street:String,
    city:String,
    pincode:Number,
});
let RegisterDocSchema=mongoose.Schema({
    docName:String,
    docPhone:Number,
    docEmail:String,
    password:String,
    address:{
        type:AddressSchema,
    },
});