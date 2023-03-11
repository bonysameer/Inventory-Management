const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productStatSchema = new Schema(
   {
      productId:String,
      yearlySalesTotal:Number,
      yearlyTotalSoldUnits:Number,
      year:Number,
      monthlyDate:[
         {
            month:String,
            totalSales:Number,
            totslUnits:Number
         }
      ],
      dailyData:{
         date:String,
         totalSales:Number,
         totalUnits:Number,
      }
   
},
{
   timestamps: true
})

const productStat = mongoose.model("ProductStat", productStatSchema)
module.exports = productStat;
