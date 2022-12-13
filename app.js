const express=require('express');
const app=express();
const path=require('path');
const PORT=8147;

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname+'/views/petFormBS.html'));
});
app.listen(PORT,()=>{
    console.log('App started on Port '+PORT);
});