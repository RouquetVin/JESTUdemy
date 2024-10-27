// Importation de l'application à tester et définition de l'environnement de test
const app = require('../../server');
process.env.NODE_ENV = 'test'; // Définit l'environnement en mode test
const request = require('supertest'); // Importation de la bibliothèque supertest pour effectuer des requêtes HTTP

// Début de la description pour les tests liés à la récupération des informations sur les écoles
describe('To GET the school information', () => {
	// Test pour récupérer les informations de l'école à partir d'un fichier JSON externe
	test('Display the details of school from json file', async () => {
		// Effectue une requête GET sur le chemin '/testjson'
		const response = await request(app).get('/testjson');
		// Vérifie que le corps de la réponse correspond à la liste attendue
		expect(response.body).toEqual([
			'NW1001', // Code de l'école
			'New World Learning Academy', // Nom de l'école
			'Main Street, MN', // Adresse de l'école
			'509', // Code postal
		]);
		// Vérifie que le code de statut de la réponse est 200 (OK)
		expect(response.statusCode).toBe(200);
	});

	// // Test pour récupérer les informations de l'école à partir d'une base de données
	// test('Display the details of school from database', async () => {
	// 	// Effectue une requête GET sur le chemin '/schoolinform'
	// 	const response = await request(app).get('/schoolinform');
	// 	// Vérifie que le corps de la réponse correspond à la liste attendue
	// 	expect(response.body).toEqual([
	// 		101, // ID de l'école
	// 		'Prince Hall Academy', // Nom de l'école
	// 		'Main Street, Carolina', // Adresse de l'école
	// 		'Prince Lopez', // Nom du directeur
	// 		12345, // Code postal
	// 	]);
	// 	// Vérifie que le code de statut de la réponse est 200 (OK)
	// 	expect(response.statusCode).toBe(200);
	// });
});
