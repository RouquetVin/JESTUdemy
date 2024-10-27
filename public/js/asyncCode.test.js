const examples = require('./script');

// Pour tester le code asynchrone...

describe('Testing is fun', () => {
	// Test pour une fonction retournant une promesse (utilisation de .then)
	test('testing Asynchronous code - Promise & then', () => {
		return examples.sum_new(4, 5).then((res) => {
			// Vérifie que le résultat de la somme est bien 9
			expect(res).toBe(9);
		});
	});

	// Test d'une fonction asynchrone qui utilise une promesse et retourne un résultat vérifiable
	test('testing Asynchronous code - Promise & then', () => {
		return examples.search_filter().then((res) => {
			// Vérifie que le résultat est "truthy" (n'est pas null, undefined, 0, etc.)
			expect(res).toBeTruthy();
		});
	});

	// Test d'une fonction async/await pour vérifier le bon fonctionnement de sum_new
	test('testing Asynchronous code - Async & Await', async () => {
		const sum = await examples.sum_new(4, 5);
		// Vérifie que la somme est bien égale à 9
		expect(sum).toBe(9);
	});

	// Test d'une fonction async/await pour vérifier le fonctionnement de search_filter
	test('testing Asynchronous code - Async & Await', async () => {
		const resultdata = await examples.search_filter();
		// Vérifie que le résultat est "truthy" (n'est pas null, undefined, 0, etc.)
		expect(resultdata).toBeTruthy();
	});

	// Test d'une fonction asynchrone avec un callback (utilisation de done pour signaler la fin)
	test('testing Asynchronous code - Callback', (done) => {
		examples.search_filter_callback((error, data) => {
			// Vérifie qu'il n'y a pas d'erreur
			expect(error).toBeNull();
			// Vérifie que les données sont bien "Results are fetched successfully."
			expect(data).toEqual('Results are fetched successfully.');
			done(); // Signale la fin du test asynchrone
		});
	});

	// Test pour vérifier que la promesse est résolue avec une valeur spécifique (utilisation de .resolves)
	test('testing Asynchronous code - .resolve', () => {
		return expect(examples.div_reject(4, 2)).resolves.toBe(2);
	});

	// Test pour vérifier que la promesse est rejetée avec une erreur spécifique (utilisation de .rejects)
	test('testing Asynchronous code - .reject', () => {
		return expect(examples.div_reject(4, 0)).rejects.toMatch(
			'Error',
		);
	});

	// Test pour vérifier le nombre d'assertions exécutées dans un test
	test('Testing expect.assertions', () => {
		expect.assertions(2); // Attend que deux assertions soient exécutées
		expect('Hello').toEqual(expect.any(String));
		expect(1 + 2).toEqual(3);
	});

	// Test pour s'assurer qu'au moins une assertion est exécutée
	test('Testing expect.hasAssertions', () => {
		expect.hasAssertions(); // Vérifie qu'au moins une assertion est exécutée dans le test
		expect('Hello').toEqual(expect.any(String));
		expect(1 + 2).toEqual(3);
	});
});
