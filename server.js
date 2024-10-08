require('dotenv').config();
const cors=require('cors');
const express=require('express');
const app=express();
const connectDB=require('./utils/connectDB');
const authRoute=require('./routes/auth-route');

const corsOptions={
      origin:"*",
      methods: ["GET","POST"],
      credentials:true
}

const PORT=5000;

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth/',authRoute);

connectDB().then(()=>{
      app.listen(PORT,()=>{
            console.log(`Server is Running on PORT ${PORT}`);
      })
});

