const mongoose=require('mongoose');

const URI=process.env.MONGODB_URI;

const connectDB=async()=>{
      try {
            await mongoose.connect(URI);
            console.log("MONGODB CONNECTED");

      } catch (error) {
            console.log("MONGO NOT CONNECTED");
            process.exit(0);
      }
}

module.exports=connectDB;