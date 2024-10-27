// Importe le module 'examples' qui contient des fonctions à utiliser dans le mock
const examples = require('./script');

// Objet contenant une fonction simulée
const mock_fn = {
	// Fonction mockée `mock_add` qui utilise la fonction `sum` du module `examples`
	mock_add: function (a, b) {
		// Appelle la fonction `sum` d'examples avec les paramètres `a` et `b`
		return examples.sum(a, b);
	},
};

// Exporte l'objet `mock_fn` pour permettre son utilisation dans d'autres fichiers
module.exports = mock_fn;
