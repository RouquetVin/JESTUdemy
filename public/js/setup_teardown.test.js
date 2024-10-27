const examples = require('./script');

// Tests avec setup et teardown

describe('Testing is fun', () => {
	// `beforeAll` s'exécute une seule fois avant tous les tests de ce bloc
	beforeAll(() => {
		console.log('****** Execution starts here ******');
	});

	// `afterAll` s'exécute une seule fois après tous les tests de ce bloc
	afterAll(() => {
		console.log('****** Execution stops here ******');
	});

	// `beforeEach` s'exécute avant chaque test individuel
	beforeEach(() => {
		console.log('Next testcase execution starts now....');
	});

	// `afterEach` s'exécute après chaque test individuel
	afterEach(() => {
		console.log('Testcase execution is completed now!!');
	});

	// Test utilisant le matcher `.toBe` pour vérifier que la somme de 1 et 2 est égale à 3
	test('testing .toBe matchers', () => {
		expect(examples.sum(1, 2)).toBe(3);
	});

	// Test utilisant le matcher `.toBeCloseTo` pour vérifier une division
	// `.toBeCloseTo` est utile pour tester des valeurs décimales avec une certaine précision
	test('testing .toBeCloseTo matchers', () => {
		expect(examples.division(8, 3)).toBeCloseTo(2.66666, 4); // Précision de 4 décimales
	});

	// Test asynchrone utilisant `async/await` pour tester la fonction `search_filter`
	// Le test vérifie si le résultat est "truthy" (différent de `null`, `undefined`, `false`, etc.)
	test('testing Asynchronous code - Async & Await', async () => {
		const resultdata = await examples.search_filter();
		expect(resultdata).toBeTruthy();
	});

	// Test utilisant `expect.hasAssertions()` pour vérifier qu'il y a des assertions dans le test
	test('testing expect.hasAssertions', () => {
		expect.hasAssertions();
		expect('Hello').toEqual(expect.any(String)); // Vérifie si "Hello" est de type String
		expect(1 + 2).toEqual(3); // Vérifie que 1 + 2 égale 3
	});

	// Les méthodes globales Jest peuvent être consultées dans la documentation Jest
	// Elles incluent les configurations avancées pour `beforeAll`, `afterAll`, etc.
});
