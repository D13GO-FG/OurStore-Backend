const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products-controller');
const checkoutController = require('../controllers/checkout-controller');
const productsMiddleware = require('../middlewares/products-middleware');

// Controllers

// Middleware

// Router

// main root
router.get('/', productsController.listProducts);
// /admin/
router.post(
	'/admin',
	productsMiddleware.validateProduct,
	productsController.saveProduct
);

router.get('/admin', productsController.listProducts);

router.get('/admin/:id', productsController.getProduct);

router.put('/admin/:id', productsController.updateProduct);

router.delete('/admin/:id', productsController.deleteProduct);

// /checkout/

router.post('/checkout', checkoutController.saveCheckout);

module.exports = router;
