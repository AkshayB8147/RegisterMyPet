const mongoose=require('mongoose');

let AddressSchema=mongoose.Schema({
    street:String,
    city:String,
    pincode:Number,
});

let RegisterPetSchema=new mongoose.Model({
    petName:String,
    petBreed:String,
    petGender:String,
    petDob:Date,
});

let OwnerDetailsSchema=mongoose.Schema({
    ownerName:String,
    ownerPhone:Number,
    ownerEmail:String,
    password:String,
    petDetails:{
        type:RegisterPetSchema,
    },
    address:{
        type:AddressSchema,
    },
});

let RegisteredPet = mongoose.model("RegisterPet", OwnerDetailsSchema);
module.exports=RegisteredPet;