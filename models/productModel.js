import{createRequire} from 'module'
const require = createRequire(import.meta.url);
const data = require('../data/data.json')

async function getProducts(){
    return data;
}

const productModel = {
    getProducts
}
export default productModel

