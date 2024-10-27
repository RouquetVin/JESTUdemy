// expect est une fonction qui permet de tester une valeur ( expect(received).matchers(expect); )

// Importation des modules et fonctions nécessaires pour les tests
const { twice } = require('./script');
const examples = require('./script.js');
const abc = require('./script');

// To test all matchers..........

describe('matchers', () => {
	test('testing .toBe matchers', () => {
		expect(examples.sum(1, 2)).toBe(3);
	});

	// toBeCloseTo pour un nombre proche
	// La précision spécifiée (5) sert à arrondir le nombre reçu au 5e chiffre après la virgule,
	// donc ici cela arrondit 2.666666 à 2.66667.
	// Si je supprime un 6 après la virgule dans l'attendu, le test échoue,
	// car le résultat de 8 / 3 est arrondi à 2.66667, mais toBeCloseTo compare avec 2.66666.
	test('testing .toBeCloseTo matchers', () => {
		expect(examples.division(8, 3)).toBeCloseTo(2.666666, 5);
	});

	// Vérifie si la fonction a été appelée au moins une fois
	test('testing .toHaveBeenCalled matchers', () => {
		abc.sum = jest.fn();
		twice(1, 2);
		expect(examples.sum).toHaveBeenCalled();
	});

	// Vérifie si la fonction a été appelée exactement deux fois
	test('testing .toHaveBeenCalledTimes matchers', () => {
		abc.sum = jest.fn();
		twice(1, 2);
		expect(examples.sum).toHaveBeenCalledTimes(2);
	});

	// Vérifie si la fonction a été appelée avec les paramètres spécifiés
	test('testing .toHaveBeenCalledWith matchers', () => {
		abc.sum = jest.fn();
		twice(1, 2);
		expect(examples.sum).toHaveBeenCalledWith(1, 2);
	});

	// Vérifie les derniers arguments avec lesquels la fonction a été appelée
	test('testing .toHaveBeenLastCalledWith matchers', () => {
		abc.sum = jest.fn();
		twice(1, 2);
		expect(examples.sum).toHaveBeenLastCalledWith(2, 1);
	});

	// Vérifie les arguments avec lesquels la fonction a été appelée pour le 1er appel
	test('testing .toHaveBeenNthCalledWith matchers', () => {
		abc.sum = jest.fn();
		twice(1, 2);
		expect(examples.sum).toHaveBeenNthCalledWith(1, 1, 2);
	});

	// Vérifie si la fonction a retourné au moins une fois une valeur
	test('testing .toHaveReturned matchers', () => {
		const foods = jest.fn(() => true);
		foods();
		expect(foods).toHaveReturned();
	});

	// Vérifie le nombre de fois que la fonction a retourné une valeur
	test('testing .toHaveReturnedTimes matchers', () => {
		const foods = jest.fn(() => true);
		foods();
		foods();
		foods();
		expect(foods).toHaveReturnedTimes(3);
	});

	// Vérifie si la fonction a retourné la valeur spécifiée
	test('testing .toHaveReturnedWith matchers', () => {
		const snack = { name: 'Pizza' };
		const foods = jest.fn((snack) => snack.name);
		foods(snack);
		expect(foods).toHaveReturnedWith('Pizza');
	});

	// Vérifie la dernière valeur retournée par la fonction
	test('testing .toHaveLastReturnedWith matchers', () => {
		const snack_1 = { name: 'Pizza' };
		const snack_2 = { name: 'Burger' };
		const foods = jest.fn((snack) => snack.name);
		foods(snack_1);
		foods(snack_2);
		expect(foods).toHaveLastReturnedWith('Burger');
	});

	// Vérifie la valeur retournée au 2e appel de la fonction
	test('testing .toHaveNthReturnedWith matchers', () => {
		const snack_1 = { name: 'Pizza' };
		const snack_2 = { name: 'Burger' };
		const foods = jest.fn((snack) => snack.name);
		foods(snack_1);
		foods(snack_2);
		expect(foods).toHaveNthReturnedWith(2, 'Burger');
	});

	// Vérifie la longueur du résultat attendu
	test('testing .toHaveLength matchers', () => {
		expect(examples.schooldata(1)).toHaveLength(4);
		expect(['abc', 'def', 'ghi']).toHaveLength(3);
	});

	// Vérifie si un objet contient une propriété spécifique avec ou sans une valeur particulière
	test('testing .toHaveProperty matchers', () => {
		expect(examples.vehicalshop()).toHaveProperty('music_system');
		expect(examples.vehicalshop()).toHaveProperty(
			'vehicaltype',
			'car',
		);
		expect(examples.vehicalshop()).toHaveProperty(
			'color[0]',
			'white',
		);
		expect(examples.vehicalshop()).toHaveProperty(
			'carbody.wheels',
			4,
		);
	});

	// Vérifie si la valeur est définie
	test('testing .toBeDefined matchers', () => {
		expect(examples.food('Juice')).toBeDefined();
	});

	// Vérifie si la valeur est définie comme undefined
	// test('testing .toBeUndefined matchers', () => {
	// 	expect(examples.food('Juice')).toBeUndefined();
	// });

	// Vérifie si la valeur est fausse
	test('testing .toBeFalsy matchers', () => {
		const x = '';
		const y = false;
		const z = null;
		expect(x).toBeFalsy();
		expect(y).toBeFalsy();
		expect(z).toBeFalsy();
	});

	// Vérifie si la valeur est vraie
	test('testing .toBeTruthy matchers', () => {
		const x = 'string';
		const y = 4;
		expect(x).toBeTruthy();
		expect(y).toBeTruthy();
	});

	// Vérifie si la valeur est nulle
	test('testing .toBeNull matchers', () => {
		expect(examples.division(9, 0)).toBeNull();
	});

	// Vérifie si la valeur est NaN
	test('testing .toBeNaN matchers', () => {
		expect(examples.division(16, 4)).not.toBeNaN();
		expect(examples.div_Nan(0, 0)).toBeNaN();
	});

	// Vérifie si l'objet est une instance d'une classe
	test('testing .toBeInstanceOf matchers', () => {
		const xyz = new examples.Car('Toyota', 'Corolla');
		expect(xyz).toBeInstanceOf(examples.Car);
	});

	// Vérifie si la chaîne contient une sous-chaîne
	test('testing .toContain matchers', () => {
		expect(examples.string_test('Danny')).toContain('Sony');
		expect(examples.string_test('Alisha')).toContain('Isha');
	});

	// Vérifie si un tableau contient un objet spécifique (en comparant les valeurs)
	test('testing .toContainEqual matchers', () => {
		expect(examples.drink('Coffee')).toContainEqual({
			store: 'starbuck',
		});
		expect(examples.drink('Coffee')).toContainEqual(
			{
				store: 'starbuck',
			},
			{ color: 'brown' },
			{ cup_size: 'large' },
		);
	});

	// Vérifie l'égalité de deux valeurs ou objets
	test('testing .toEqual matchers', () => {
		expect(examples.drink('Coffee')).toEqual([
			{ store: 'starbuck' },
			{ color: 'brown' },
			{ cup_size: 'large' },
			{ sugar: true },
		]);
		expect(examples.drink('Orange Juice')).toEqual([
			{ store: 'JuiceCorner' },
			{ color: 'orange' },
			{ cup_size: 'medium' },
			{ sugar: false },
		]);
		expect(examples.string_test('Alisha')).toEqual('Isha Paul');
		expect(examples.vehicalshop()).toEqual({
			vehicaltype: 'car',
			music_system: true,
			material: 'steel',
			color: ['white', 'red', 'black', 'blue'],
			carbody: { wheels: 4, length: 18 },
			// car_height: undefined / ne prend pas en compte ce qui n'est pas défini
		});
	});

	// Vérifie une stricte égalité de structure et de contenu (non flexible)
	test('testing .toStrictEqual matchers', () => {
		expect(examples.vehicalshop()).toStrictEqual({
			vehicaltype: 'car',
			music_system: true,
			material: 'steel',
			color: ['white', 'red', 'black', 'blue'],
			carbody: { wheels: 4, length: 18 },
			car_height: undefined,
		});
	});

	// Vérifie si une chaîne correspond à une expression régulière ou sous-chaîne
	test('testing .toMatch matchers', () => {
		// expect(examples.game('cricket')).toMatch(11); On ne peut pas comparer des nombres pour ça il faut utiliser des matchers comme toBe ou toEqual
		expect(examples.game('Tennis')).toMatch('Game not available');
		expect(examples.game('Tennis')).toMatch(
			'Game not available in this Area!!',
		);
		expect(examples.game('Tennis')).toMatch(/not available/); // pas de guillemets pour les expressions régulières
	});

	// Vérifie si un objet contient les mêmes propriétés (sans valeurs exactes)
	test('testing .toMatchObject matchers', () => {
		const dresses = {
			dresstype: 'Gown',
			partywear: true,
			material: 'silk',
			color: 'red',
			sleeves: 'full sleeve',
		};
		const mydress = {
			dresstype: 'Gown',
			partywear: true,
			color: 'red',
		};
		expect(dresses).toMatchObject(mydress);
	});

	// Vérifie si une fonction lance une erreur spécifique ou un type d'erreur
	test('testing .toThrow matchers', () => {
		function drinkbad() {
			examples.drinkFlavor('bad');
		}
		// Test that the error message have "yuck" somewhere
		expect(drinkbad).toThrow(/yuck/);
		expect(drinkbad).toThrow('yuck');
		expect(() => examples.drinkFlavor('bad')).toThrow(/yuck/);

		// Test the exact error message
		expect(drinkbad).toThrow(/^yuck, bad flavor$/);
		expect(drinkbad).toThrow(new Error('yuck, bad flavor'));

		// Test that we get a Error
		expect(drinkbad).toThrow(Error);
	});

	// Modifiers
	// Le matcher .not inverse l'assertion pour tester une condition opposée
	test('testing .not modifier', () => {
		expect(examples.sum(1, 2)).not.toBe(4); // Vérifie que le résultat n'est pas 4
		expect(examples.game('Tennis')).not.toMatch('Game available'); // Vérifie que la chaîne ne contient pas 'Game available'
		const x = 3;
		expect(x).not.toBeFalsy(); // Vérifie que la valeur n'est pas fausse
	});

	// .resolves & .rejects seront couverts dans le sujet "Testing of Asynchronous Code"

	// Asymmetric Matchers
	// Vérifie si la fonction est appelée avec n'importe quelle valeur, quel que soit le type
	test('To test Asymmetric Matcher- expect.anything', () => {
		abc.diff = jest.fn(); // Mock de la fonction diff
		twice(1, 2);
		expect(examples.diff).toHaveBeenCalledWith(
			expect.anything(),
			expect.anything(),
		); // Vérifie que diff a été appelée avec des arguments quelconques
		expect(examples.string_test('Alisha')).toEqual(
			expect.anything(),
		); // Vérifie que string_test retourne une valeur quelconque
	});

	// Vérifie si le résultat est de n'importe quel type spécifique
	test('To test Asymmetric Matcher- expect.any()', () => {
		expect(examples.string_test('Alisha')).toEqual(
			expect.any(String),
		); // Vérifie que le résultat est de type String
	});

	// Utilisation de .toBeCloseTo pour comparer des nombres avec une précision donnée
	test('To test asymmetric Matcher- expect.closeTo()', () => {
		expect({
			title: 'sum of 0.1 + 0.234567',
			sum: 0.1 + 0.234567,
		}).toEqual({
			title: 'sum of 0.1 + 0.234567',
			sum: expect.closeTo(0.334567, 4), // Vérifie que sum est proche de la valeur attendue
		});
		expect(0.1 + 0.234567).toBeCloseTo(0.3346, 4); // Teste directement une somme proche de la valeur
	});

	// Utilise arrayContaining pour vérifier qu'un tableau contient certains éléments
	test('To test asymmetric Matcher- expect.arrayContaining(array)', () => {
		const expected_1 = ['Alice', 'Bob'];
		const expected_2 = ['Mimi', 'Teresa', 'Sonia', 'Peter'];
		const expected_3 = ['Mimi', 'Teresa'];
		// expect(examples.students(2)).toEqual(expect.arrayContaining(expected_1)); // Vérification désactivée
		expect(examples.students(2)).not.toEqual(
			expect.arrayContaining(expected_1),
		); // Vérifie que le tableau ne contient pas ['Alice', 'Bob']
		expect(examples.students(2)).toEqual(
			expect.arrayContaining(expected_2),
		); // Vérifie que le tableau contient tous les éléments de expected_2
		expect(examples.students(2)).toEqual(
			expect.arrayContaining(expected_3),
		); // Vérifie que le tableau contient tous les éléments de expected_3
	});

	// Utilise objectContaining pour vérifier qu'un objet contient certaines propriétés avec des valeurs spécifiques
	test('To test asymmetric Matcher- expect.objectContaining(object)', () => {
		const mydress = {
			dresstype: 'Gown',
			partywear: true,
			material: expect.any(String), // Vérifie que material est une chaîne
			color: 'red',
			sleeves: expect.any(String), // Vérifie que sleeves est une chaîne
		};
		expect(examples.clothing_shop()).toEqual(
			expect.objectContaining(mydress),
		); // Vérifie que l'objet retourné contient les propriétés de mydress
	});

	// Utilise stringContaining pour vérifier qu'une chaîne contient une sous-chaîne spécifique
	test('To test Asymmetric Matcher- expect.stringContaining(array)', () => {
		expect(examples.promotion('Footwear')).toEqual(
			expect.stringContaining('10% discount'),
		); // Vérifie que la chaîne contient '10% discount'
		expect(examples.promotion('Footwear')).toEqual(
			expect.not.stringContaining('5% discount'),
		); // Vérifie que la chaîne ne contient pas '5% discount'
	});

	// Utilise stringMatching pour vérifier que la chaîne correspond à une expression régulière ou une sous-chaîne
	test('To test Asymmetric Matcher- expect.stringMatching(array)', () => {
		expected = [
			expect.stringMatching('Mi'), // Vérifie qu'un des éléments contient 'Mi'
			expect.stringMatching('Te'), // Vérifie qu'un des éléments contient 'Te'
			expect.stringMatching('So'), // Vérifie qu'un des éléments contient 'So'
			expect.stringMatching('ter'), // Vérifie qu'un des éléments contient 'ter'
		];
		expect(examples.students(2)).toEqual(expected); // Vérifie que les chaînes de students(2) correspondent aux modèles
		const expected_2 = expect.stringMatching('10% discount');
		expect(examples.promotion('Footwear')).toEqual(expected_2); // Vérifie que la chaîne contient '10% discount'
	});

	// Création et utilisation d'un matcher personnalisé pour tester l'égalité de formes
	test('To create and test custom matchers', () => {
		received = 'triangle';
		expected = 'triangle';
		expect(received).toBeEqualShapes(expected); // Utilisation d'un matcher personnalisé pour tester l'égalité de formes
	});
});
