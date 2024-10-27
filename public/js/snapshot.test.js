// Snapshot testing...

const examples = require('./script');

// Début de la suite de tests
describe('testing', () => {
	// Test de snapshot
	test('snapshot testing..', () => {
		// Définition de la catégorie à tester
		const category = 'Footwear';

		// Appelle la fonction promotion avec la catégorie "Footwear" et stocke le résultat
		snapshot_rec = examples.promotion(category);

		// Comparaison du résultat actuel avec le snapshot inline attendu
		// Si le résultat diffère, Jest signalera une erreur
		// Pour mettre à jour le snapshot, on peut utiliser "npm run test -- -u"
		expect(snapshot_rec).toMatchInlineSnapshot(
			`"Get 10% discount on all drinkss"`,
		);
	});
});
