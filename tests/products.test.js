const request = require('supertest');

const app = require('../src/index');

describe('Calling / with GET', () => {
	test('It should response with a 200 status code', async () => {
		const response = await request(app).get('/').send();
		expect(response.status).toBe(200);
	});
	test('It should response woth an array', async () => {
		const response = await request(app).get('/').send();
		expect(response.body).toBeInstanceOf(Array);
	});
});

describe('Calling /admin:id to POST, PUST, DELETE and GET', () => {
	let id;
	test('It should save a product ', async () => {
		const newProduct = await request(app).post('/admin').send({
			name: 'New plant',
			description: 'Features',
			imageUrl: 'image',
			price: 0,
		});
		id = newProduct.body._id;
		expect(newProduct.body).toHaveProperty('_id');
		expect(newProduct.body.name).toBe('New plant');
		expect(newProduct.statusCode).toBe(201);
	});
	test('It should update a product', async () => {
		const updatedProduct = await request(app).put(`/admin/${id}`).send({
			name: 'Updated plant',
			description: 'Updated features',
		});
		expect(updatedProduct.body.name).toBe('Updated plant');
		expect(updatedProduct.status).toBe(200);
	});
	test('It should delete a product', async () => {
		const removedProduct = await request(app).delete(`/admin/${id}`);
		expect(removedProduct.status).toBe(204);
	});
	test('It should get products', async () => {
		const response = await request(app).get('/admin').send();
		expect(response.status).toBe(200);
	});
	test('It should response woth an array of products', async () => {
		const response = await request(app).get('/admin').send();
		expect(response.body).toBeInstanceOf(Array);
	});
});

describe('Calling /checkout to POST and DELETE', () => {
	let id;
	test('It should save a checkout ', async () => {
		const newCheckout = await request(app)
			.post('/checkout')
			.send({
				name: 'New checkout',
				address: 'New address',
				products: [
					{
						name: 'New product',
						imageUrl: 'Image',
						description: 'New description',
						price: 0,
					},
					{
						name: 'New product',
						imageUrl: 'Image',
						description: 'New description',
						price: 0,
					},
				],
				total: 0,
			});
		id = newCheckout.body._id;
		expect(newCheckout.body).toHaveProperty('_id');
		expect(newCheckout.body.name).toBe('New checkout');
		expect(newCheckout.statusCode).toBe(201);
	});
	test('It should delete a checkout', async () => {
		const removedCheckout = await request(app).delete(`/checkout/${id}`);
		expect(removedCheckout.status).toBe(204);
	});
});
