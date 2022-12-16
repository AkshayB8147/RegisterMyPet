const mongoose=require('mongoose');

let AddressSchema=mongoose.Schema({
    street:String,
    city:String,
    pincode:Number,
});
let OwnerDetailsSchema=mongoose.Schema({
    ownerName:String,
    ownerPhone:Number,
    ownerEmail:String,
    password:String,
});
let RegisterPetSchema=new mongoose.Model({
    petName:String,
    petBreed:String,
    petGender:String,
    petDob:Date,
    ownerDetails:{
        type:OwnerDetails,
    },
    address:{
        type:AddressSchema,
    },
});
let RegisteredPet = mongoose.model("RegisterPet", RegisterPetSchema);
module.exports=RegisteredPet;