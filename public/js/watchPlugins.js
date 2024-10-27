class MyWatchPlugin {
	// Ajoute des hooks aux événements du cycle de vie de Jest
	apply(jestHooks) {
		// Détermine si un suite de tests doit s'exécuter
		jestHooks.shouldRunTestSuite((testSuiteInfo) => {
			// Exécute uniquement les suites de tests qui incluent "async" dans leur chemin de fichier
			return testSuiteInfo.testPath.includes('async');
		});
	}

	// Fournit des informations d'utilisation pour les plugins interactifs
	getUsageInfo(globalConfig) {
		return {
			key: 'm', // Définit la touche pour activer ce plugin dans l'interface Jest
			prompt: 'its my new plugin, press m to see my message', // Message affiché pour guider l'utilisateur
		};
	}

	// S'exécute lorsque la touche définie dans `getUsageInfo` est pressée
	run(globalConfig, updateConfigAndRun) {
		// Affiche un message personnalisé dans la console Jest
		console.log('This is my word!!');
	}
}

// Exporte le plugin pour pouvoir l'utiliser dans les configurations Jest
module.exports = MyWatchPlugin;
