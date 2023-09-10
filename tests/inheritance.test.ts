describe('Getter and Setter', () => {
	class Employee {
		name: string;

		constructor(name: string) {
			this.name = name;
		}
	}

	class Manager extends Employee {}
	class Director extends Employee {}

	it('should support', () => {
    const employee = new Employee('Ucup');
		console.info(employee.name);

    const manager = new Manager('Udin');
		console.info(manager.name);

    const director = new Director('Asep');
		console.info(director.name);
  });
});
