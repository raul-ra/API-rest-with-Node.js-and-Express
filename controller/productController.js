import productModel from "../models/productModel.js";

async function getProducts(req,res){
    try{
        const PRODUCTS = await productModel.getProducts();
        res.json(PRODUCTS);
} catch(err){
    console.log(err);
}
}