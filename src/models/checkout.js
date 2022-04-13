const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const CheckoutSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		products: [ProductSchema],
		total: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const CheckoutModel = mongoose.model('Checkout', CheckoutSchema);

module.exports = CheckoutModel;
