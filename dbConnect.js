const mongoose = require('mongoose');

const connectDB =()=>{
    mongoose.connect('mongodb+srv://ADMIN:Samluci782001@cluster0.ggemy.mongodb.net/Store_Pos',{useUnifiedTopology:true,useNewUrlParser:true})

    const connection = mongoose.connection

    connection.on('connected',()=>{
        console.log("Connected");
    })

    connection.on('error', ()=>{
        console.log("MongoDB connection error");
    })
}

connectDB();

module.exports = mongoose