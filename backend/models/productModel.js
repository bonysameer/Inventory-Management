const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
   name:String,
   price:Number,
   description:String,
   category:String,
   rating:Number,
   supply:Number
},
{
   timestamps: true
})

const product = mongoose.model("Product", productSchema)
module.exports = product;
