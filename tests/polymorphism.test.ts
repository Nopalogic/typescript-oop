describe('Polymorphism', () => {
	class Employee {
		constructor(public name: string) {}
	}

	class Manager extends Employee {}
	class VicePresident extends Manager {}

	function sayHello(employee: Employee): void {
		console.info(`Hello ${employee.name}`);
	}

	it('should support polymorphism', () => {
		let employee: Employee = new Employee('Ucup');
		console.info(employee);

		employee = new Manager('Udin');
		console.info(employee);

		employee = new VicePresident('Asep');
		console.info(employee);
	});

	it('should support method parameter polmorphism', () => {
		sayHello(new Employee('Ucup'));
		sayHello(new Manager('Udin'));
		sayHello(new VicePresident('Asep'));
	});
});
