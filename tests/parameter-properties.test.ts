describe('Parameter Properties', () => {
	class Person {
		constructor(public name: string) {}
	}

  it('should support', ()=>{
    const person = new Person('Naufal');
    console.info(person.name)

    person.name = 'Asep'
    console.info(person.name)
  })
});
