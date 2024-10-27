const examples = require('./script');
// On importe le module './script' qui contient la fonction 'sum' utilisée plus tard dans les tests.

const mock_fn = require('./mock_functions');
// On importe également un autre module, './mock_functions', qui contient la fonction 'mock_add' que l'on va tester.

jest.mock('./script');
// Cette ligne transforme toutes les fonctions du module './script' en fonctions mockées.
// Les fonctions du module pourront être surveillées ou manipulées (comme changer leur comportement pour les tests).

test('mock test for mock name', () => {
	const myMockFn = jest.fn();
	// Création d'une fonction mock avec jest.fn(), qui est une fonction vide par défaut, utile pour surveiller les appels.

	myMockFn.mockName('XYZ');
	// On donne un nom à cette fonction mock. Cela permet de la reconnaître lors des messages d'erreur, par exemple.

	nameFn = myMockFn.getMockName();
	// On récupère le nom que l'on a donné à la fonction mock avec 'getMockName()'.

	expect(nameFn).toEqual('XYZ');
	// On vérifie que le nom de la fonction mock correspond bien à celui que nous avons défini ('XYZ').
});

test('mock test for sum', () => {
	examples.sum.mockReturnValue(10);
	// On mocke la fonction 'sum' (qui vient du module './script') pour qu'elle retourne toujours la valeur 10, peu importe les arguments passés.

	const result = mock_fn.mock_add(7, 3);
	// On appelle la fonction 'mock_add' depuis './mock_functions', en lui passant 7 et 3 comme arguments. Cette fonction utilise 'examples.sum' en interne.

	expect(examples.sum).toHaveBeenCalledWith(7, 3);
	// On vérifie que la fonction 'sum' a bien été appelée avec les arguments 7 et 3.
	// Cette méthode vérifie que les arguments donnés à la fonction sont corrects.

	expect(result).toBe(10);
	// On vérifie que le résultat de 'mock_add' est bien 10, ce qui est attendu car 'sum' retourne toujours 10 à cause du mock.
});

// Fonctions de base
// jest.fn()

// Crée une fonction mock vide. Utile pour espionner des appels de fonction ou simuler des comportements.
// jest.mock(moduleName)

// Mocke l'intégralité d'un module. Toutes les fonctions du module deviennent des fonctions mock.
// Méthodes sur les fonctions mock
// mockReturnValue(value)

// Définit une valeur de retour fixe pour la fonction mock. Chaque appel de la fonction retournera value.
// mockReturnValueOnce(value)

// Définit une valeur de retour pour un seul appel de la fonction mock. Les appels suivants retourneront undefined ou la valeur par défaut.
// mockImplementation(fn)

// Définit une fonction à exécuter à chaque fois que la fonction mock est appelée.
// mockImplementationOnce(fn)

// Définit une fonction à exécuter pour un seul appel de la fonction mock. Les appels suivants utiliseront l'implémentation par défaut.
// mockName(name)

// Assigne un nom à la fonction mock pour faciliter le débogage.
// getMockName()

// Récupère le nom assigné à la fonction mock avec mockName().
// Réinitialisation des mocks
// jest.clearAllMocks()

// Réinitialise l'état de toutes les fonctions mock, y compris les appels et les valeurs de retour.
// jest.resetAllMocks()

// Réinitialise les mocks et restaure leur implémentation d'origine.
// jest.restoreAllMocks()

// Restaure toutes les méthodes spied sur les objets qui ont été mockées.
