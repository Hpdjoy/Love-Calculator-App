const User=require('../models/user-model');

const userName=async(req,res)=>{
      try {
            const {boy,girl}=req.body;
            const userCreated=await User.create({boy,girl});
            res.status(200).json({userCreated});
            console.log(userCreated);
            
      } catch (error) {
            console.error(error);
      }
}

module.exports={userName};