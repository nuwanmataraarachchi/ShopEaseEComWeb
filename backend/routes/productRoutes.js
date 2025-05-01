const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Handle POST request to create a new product
router.post('/', productController.createProduct);

// Other routes (GET, PUT, DELETE)
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
