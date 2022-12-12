const express=require('express');
const app=express();
const PORT=8147;
app.get('/',(req,res)=>{
res.send("Hello world");
});
app.listen(PORT,()=>{
    console.log('App started on Port '+PORT);
});