const product = require("../models/productModel");
const product = require("../models/productModel");
const productStat = require("../models/productStatsModel");


const getProducts = async(req,res) =>{
   try {
      const product = await product.find();
      const productWithStats = await Promise.all(
         product.map(async(product)=>{
            const stat = await productStat.find({
               productId:product._id
            })
            return{
               ...product._doc,
               stat,
            }
         })
      );
      res.status(200).json(productWithStats);
   } catch (error) {
      res.status(404).json({message:error.message});
   }
}




module.exports = getProducts
