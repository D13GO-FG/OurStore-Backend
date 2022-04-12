const checkoutService = require('../services/checkout-service');

const saveCheckout = async (req, res, next) => {
	const checkout = req.body;
	try {
		const savedCheckout = await checkoutService.saveCheckout(checkout);
		res.status(201).json(savedCheckout);
	} catch (error) {
		next(error);
	}
};

module.exports = { saveCheckout };
