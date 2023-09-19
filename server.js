import express from 'express';
import productController from './controller/productController.js'

const APP = express()
const PORT = 3000

APP.get('/',(request,response) => {
    productController.getProducts(req,res)
})

APP.listen(PORT, () =>
    console.log(`App is listening on port ${PORT}`)
);
