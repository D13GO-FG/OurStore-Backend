const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	count: {
		type: Number,
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
