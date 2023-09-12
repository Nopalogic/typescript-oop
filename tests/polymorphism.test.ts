describe('Polymorphism', () => {
	class Employee {
		constructor(public name: string) {}
	}

	class Manager extends Employee {}
	class VicePresident extends Manager {}

	it('should support polymorphism', () => {
		let employee: Employee = new Employee('Ucup');
		console.info(employee);

		employee = new Manager('Udin');
		console.info(employee);

		employee = new VicePresident('Asep');
		console.info(employee);
	});
});
