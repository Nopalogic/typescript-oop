describe('Error Handling', () => {
	class ValidationError extends Error {
		constructor(public message: string) {
			super(message);
		}
	}

	function doubleInt(value: number): number {
		if (value < 0) {
			throw new ValidationError('Value cannot be less then 0');
		}
		return value * 2;
	}

	it('should support', () => {
		try {
			const result = doubleInt(-2);
			console.info(result);
		} catch (error) {
			if (error instanceof ValidationError) {
				console.info(error.message);
			}
		}
	});
});
