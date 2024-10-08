const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
      boy:{
            type:String,
            required:true
      },
      girl:{
            type:String,
            required:true
      }
});

const User=new mongoose.model("User",userSchema);

module.exports=User;