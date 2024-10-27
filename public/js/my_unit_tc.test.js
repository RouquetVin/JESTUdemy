// Importe le module `ss` depuis le fichier `new_script.js` pour l'utiliser dans le test
const ss = require('./new_script.js');

// Test qui vérifie l'addition de deux nombres, 1 et 2
test('adds two numbers 1 & 2', () => {
	// Appelle la fonction `ss` avec les arguments 1 et 2, puis vérifie que le résultat est égal à 3
	expect(ss(1, 2)).toBe(3);
});
