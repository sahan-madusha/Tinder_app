import express from "express";
import mongoose from "mongoose";

//App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://sahan:RZsdYdJK8HcvgJDY@cluster0.mthgtyc.mongodb.net/tinderdb?retryWrites=true&w=majority'

//middlewares


//DB config
mongoose.connect(connection_url , {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    //This are parametere to smooth our connection
})

//API endpoint
app.get("/", (req,res)=>{res.status(200).send("your connection is done!!")} )

//Listener
app.listen(port,()=>{console.log(`listening on localhost: ${port}`)})