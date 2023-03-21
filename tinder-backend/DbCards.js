import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    name:String,
    imgUrl:String,
});

export default mongoose.model("card",carSchema);