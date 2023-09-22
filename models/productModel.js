import {v4 as uuidv4}  from 'uuid';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const data = require('../data/data.json')

async function getProducts() {
    return data;
}

async function createProduct(product) {
    const newProduct = { id: uuidv4(), ...product };
    data.push(newProduct);
    return newProduct;
}


const productModel = {
    getProducts,
    createProduct,
}
export default productModel

