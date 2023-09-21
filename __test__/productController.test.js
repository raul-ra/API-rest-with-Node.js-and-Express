
import productController from '../controller/productController.js';
import 'babel-polyfill';
import '@babel/preset-env';

describe('productController', () => {
    it('should return an array of products', () => {
        const products = productController.getProducts();
        expect(Array.isArray(products)).toBe(true);
        expect(products).toHaveLength(20);
    });

    it('should return products with expected properties', () => {
        const products = productController.getProducts();
        products.forEach((product) => {
            expect(product).toHaveProperty('id');
            expect(product).toHaveProperty('title');
            expect(product).toHaveProperty('description');
            expect(product).toHaveProperty('image');
            expect(product).toHaveProperty('price');
        });
    });
});
