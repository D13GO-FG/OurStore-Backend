const Checkout = require('../models/checkout');

const saveCheckout = async (checkout) => {
	const newCheckout = new Checkout(checkout);
	await newCheckout.save();
	return newCheckout;
};

const deleteCheckout = async (id) => {
	await Checkout.findByIdAndDelete(id).exec();
};

module.exports = { saveCheckout, deleteCheckout };
