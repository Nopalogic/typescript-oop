describe('Class', function () {
	class Customer {}
	class Order {}

	it('should can create class', function () {
		const customer: Customer = new Customer();
		const order = new Order();
	});
});
