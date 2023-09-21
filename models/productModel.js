import fs from 'fs';
import{createRequire} from 'module';

const require = createRequire(import.meta.url);
const data = require('../data/data.json')

async function getProducts(){
    return data;
}


async function createProduct (PRODUCTS){
    try{ fs.writeFile (dataFilePath,json.stringify(PRODUCTS, null,2),"utf8")
    } catch(error){throw error};
}

const productModel = {
    getProducts,
    createProduct,
}
export default productModel

