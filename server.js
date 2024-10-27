// Importation des modules nécessaires
const express = require('express'); // Importation de la bibliothèque Express pour créer une application web
const app = express(); // Création d'une instance de l'application Express
const obj = require('../coursUdemyJest/public/json/schoolinfo.json'); // Importation des informations scolaires à partir d'un fichier JSON externe

// Route pour récupérer les informations de l'école à partir du fichier JSON
app.get('/testjson', (req, res) => {
	// Envoie les détails de l'école sous forme de réponse JSON
	return res.json([
		obj.ID, // ID de l'école
		obj.schoolname, // Nom de l'école
		obj.schoollocation, // Localisation de l'école
		obj.total_student, // Total d'élèves dans l'école
	]);
});

// Route pour récupérer les informations de l'école à partir de la base de données
app.get('/schoolinform', function (req, res) {
	// Exécution d'une requête SQL pour obtenir des informations sur l'école depuis la base de données
	con.query(
		'select * from db_testing.school', // Requête pour sélectionner toutes les informations de la table 'school'
		function (err, schoolinf) {
			// Callback pour traiter le résultat de la requête
			if (err) {
				throw err; // Lancer une erreur si la requête échoue
			}
			console.log(schoolinf); // Affiche les informations de l'école dans la console
			const school_data = JSON.parse(
				JSON.stringify(schoolinf[0]), // Convertit le résultat de la requête en objet JSON
			);
			// Envoie les détails de l'école sous forme de réponse JSON
			return res.json([
				school_data.school_id, // ID de l'école
				school_data.schoolname, // Nom de l'école
				school_data.school_loc, // Localisation de l'école
				school_data.principle_name, // Nom du directeur
				school_data.school_zip, // Code postal de l'école
			]);
		},
	);
});

// Exporte l'application pour qu'elle soit accessible depuis d'autres modules
module.exports = app;
