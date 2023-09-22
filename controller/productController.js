import productModel from "../models/productModel.js";


//GET


async function getProducts(request, response) {
    try {
        const PRODUCTS = await productModel.getProducts();
        response.json(PRODUCTS);
    } catch (err) {
        console.log(err);
    }
}

//POST

async function createProduct(request, response) {
    try {
        const body = request.body;
        const newProduct = await productModel.createProduct(body);
        response.json(newProduct);
    } catch (error) {
        console.error("Error:", error);
        response.status(500).json({ error: 'Internal error' });
    }
}

//PUT


const productController = {
    getProducts,
    createProduct
};

export default productController;



