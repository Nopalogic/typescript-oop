describe('Method Overriding', () => {
	class Employee {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		sayHello(name: string) {
			console.info(`Hello ${name}, I'm ${this.name}`);
		}
	}

	class Manager extends Employee {
		sayHello(name: string): void {
			console.info(`Hello ${name}, I'm ${this.name}, I an your manager`);
		}
	}

	it('should support ', () => {
		const employee = new Employee('Naufal');
		employee.sayHello('Asep');

		const manager = new Manager('Naufal');
		manager.sayHello('Asep');
	});
});
