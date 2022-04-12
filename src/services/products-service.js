const Product = require('../models/product');

const saveProduct = async (product) => {
	const newProduct = new Product(product);
	await newProduct.save();
	return newProduct;
};

const listProducts = async () => {
	const products = await Product.find().lean().exec();
	return products;
};

const getProduct = async (id) => {
	const product = await Product.findById(id).lean().exec();
	return product;
};

const updateProduct = async (id, product) => {
	const updatedProduct = await Product.findByIdAndUpdate(id, product, {
		returnDocument: 'after',
	})
		.lean()
		.exec();
	console.log(updatedProduct);
	return updatedProduct;
};

const deleteProduct = async (id) => {
	await Product.findByIdAndDelete(id).exec();
};

module.exports = {
	saveProduct,
	listProducts,
	updateProduct,
	deleteProduct,
	getProduct,
};
