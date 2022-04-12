const productService = require('../services/products-service');

const saveProduct = async (req, res, next) => {
	const product = req.body;
	try {
		const savedProduct = await productService.saveProduct(product);
		res.status(201).json(savedProduct);
	} catch (error) {
		next(error);
	}
};

const listProducts = async (req, res, next) => {
	try {
		const products = await productService.listProducts();
		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Error' });
	}
};

const getProduct = async (req, res, next) => {
	const { id } = req.params;
	try {
		const product = await productService.getProduct(id);
		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}
		res.json(product);
	} catch (error) {
		next(error);
	}
};

const updateProduct = async (req, res, next) => {
	const { id } = req.params;
	const newProduct = req.body;
	try {
		const updatedProduct = await productService.updateProduct(id, newProduct);
		if (!updatedProduct) {
			return res.status(404).json({ message: 'Product not found' });
		}
		res.json(updatedProduct);
	} catch (error) {
		next(error);
	}
};

const deleteProduct = async (req, res, next) => {
	const { id } = req.params;
	try {
		await productService.deleteProduct(id);
		res.status(204).send();
	} catch (error) {
		next(error);
	}
};

module.exports = {
	saveProduct,
	listProducts,
	updateProduct,
	deleteProduct,
	getProduct,
};
