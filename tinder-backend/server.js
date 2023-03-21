import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // this a security api and this is use for evry req header

import card from "./DbCards";

//App config
const app = express();
const port = process.env.PORT || 8001 ;
const connection_url = 'mongodb+srv://sahan:RZsdYdJK8HcvgJDY@cluster0.mthgtyc.mongodb.net/tinderdb?retryWrites=true&w=majority'

//middlewares
app.use(express.json());
app.use(cors);

//DB config
mongoose.connect(connection_url , {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    //This are parametere to smooth our connection
})

//API endpoint
// for check connection
app.get("/", (req,res)=>{res.status(200).send("your connection is done!!")} )

//for sen data
app.post('/tinder/card', (req,res)=>{
    const DbCards = req.body;
    
    card.create(DbCards , (err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
})

//for get data
app.get('/tinder/card', (req,res)=>{
    card.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
})

//Listener
app.listen(port,()=>{console.log(`listening on localhost: ${port}`)})