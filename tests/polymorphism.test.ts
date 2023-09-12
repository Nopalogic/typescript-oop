describe('Polymorphism', () => {
	class Employee {
		constructor(public name: string) {}
	}

	class Manager extends Employee {}
	class VicePresident extends Manager {}

	function sayHello(employee: Employee): void {
		if (employee instanceof VicePresident) {
			const vicePresident = employee as VicePresident;
			console.info(`Hello VP ${vicePresident.name}`);
		} else if (employee instanceof Manager) {
			const manager = employee as Manager;
			console.info(`Hello Manager ${manager.name}`);
		} else {
			console.info(`Hello Employee ${employee.name}`);
		}
	}

	function sayHelloWrong(employee: Employee): void {
		if (employee instanceof Manager) {
			const manager = employee as Manager;
			console.info(`Hello Manager ${manager.name}`);
		} else if (employee instanceof VicePresident) {
			const vicePresident = employee as VicePresident;
			console.info(`Hello VP ${vicePresident.name}`);
		} else {
			console.info(`Hello Employee ${employee.name}`);
		}
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

	it('should wrong method parameter polmorphism', () => {
		sayHelloWrong(new Employee('Ucup'));
		sayHelloWrong(new Manager('Udin'));
		sayHelloWrong(new VicePresident('Asep'));
	});
});
