// Importation des exemples à partir du fichier script
const examples = require('./script');

// Ajout d'une nouvelle méthode d'assertion personnalisée à Jest
expect.extend({
	// Définition de la méthode 'toBeEqualShapes'
	toBeEqualShapes(received, expected) {
		// Utilise la fonction 'equal_shape' du module 'examples' pour comparer les formes
		return examples.equal_shape(received, expected);
	},
});
