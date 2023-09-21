import data from '../data/data.json'assert { type: "json" }
import productModel from "../models/productModel.js";

async function getProducts(request,response){
    try{
        const PRODUCTS = await productModel.getProducts();
        res.json(PRODUCTS);
} catch(err){
    console.log(err);
}
}

async function createProduct(request,response){
    const body = request.body
    data.push(body)
    response.json(data)
/* try{
        const{title, description, image, price} = req.body
        if (!title || !description || !image || !price) {
            return res.status(400).json({error: "title, description, image and price are obligatory"}) 
        }
        const NEWPRODUCT = {title, description, image, price}
        const PRODUCTS = await productModel.getProducts();
        PRODUCTS.push(NEWPRODUCT)
        await productModel.createProduct(NEWPRODUCT);
        res.status(201).json(NEWPRODUCT);
    } catch(error){
        console.error("error", error);
        res.status(500).json({error:'internal error'})
    }*/
}

const productController = {
    getProducts,
    createProduct
    };

export default productController;



/*async function createProduct(req, res) {
    try {
        const { title, description, image, price } = req.body;
        if (!title || !description || !image || !price) {
            return res.status(400).json({ error: "title, description, image, and price are obligatory" });
        }
        const NEWPRODUCT = { title, description, image, price };
        const PRODUCTS = await productModel.getProducts();
        PRODUCTS.push(NEWPRODUCT);
        await productModel.createProduct(NEWPRODUCT); // Corregir la función aquí
        res.status(201).json(NEWPRODUCT); // Utilizar res en lugar de response
    } catch (error) {
        console.error("error", error);
        res.status(500).json({ error: 'internal error' }); // Utilizar res en lugar de response
    }
}
*/