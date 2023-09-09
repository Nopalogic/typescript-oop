describe('Class', function () {
	class Customer {
		constructor() {
			console.info('Create new Customer');
		}
	}
	class Order {}

	it('should can create class', function () {
		const customer: Customer = new Customer();
		const order = new Order();
	});

	
	it('should can create constructors', function () {
		new Customer();
		new Customer();
	});
});
