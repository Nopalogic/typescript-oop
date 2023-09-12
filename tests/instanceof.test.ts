describe('Instance Of', () => {
	class Employee {}
	class Manager {}

	const udin = new Employee();
	const asep = new Manager();

	it('should have problem using typeof', () => {
		console.info(typeof udin);
		console.info(typeof asep);
	});

	it('should support instance', () => {
		expect(udin instanceof Employee).toBe(true);
		expect(udin instanceof Manager).toBe(false);

		expect(asep instanceof Employee).toBe(false);
		expect(asep instanceof Manager).toBe(true);
	});
});
