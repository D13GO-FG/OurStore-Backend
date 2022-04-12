const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
	{
		Name: {
			type: String,
			required: true,
		},
		Description: {
			type: String,
			required: true,
		},
		ImageUrl: {
			type: String,
		},
		Price: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
