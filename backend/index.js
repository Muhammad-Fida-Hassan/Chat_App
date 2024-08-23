const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./Models/User');



require('dotenv').config()
const app=express();
app.use(cors());
app.use(express.json());



app.post('/profile',async(req,res)=>{
    const user = req.body;
    console.log(user)
    try{
        const newUser = await User.create(user);
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({error: err.message});
    }
})


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('MongoDB Connected');
}).catch((err)=>{
    console.log(err);
})

const server=app.listen(5000,()=>{
    console.log('Server is running on port 5000');
}    
)