import { Exercice } from "./classes/Exercice.js";

export class DataLoader {
  static async chargerExercices() {
    try {
      // Étape 1 : Lire les données brutes du JSON
      const responseData = await fetch("http://localhost:5123/api/exercices");
      if (!responseData.ok) throw new Error("Erreur serveur");
      const resultDataBrute = await responseData.json();

      // Étape 2 : Transformer chaque entrée JSON en objet Exercice
      const exercices = resultDataBrute.exercices.map(
        (exo) =>
          new Exercice(
            exo.nom,
            exo.niveauRequis,
            exo.type,
            exo.dureeOuReps,
            null
          )
      );

      // Étape 3 : Relier les progressions (nom → objet Exercice suivant)"
      exercices.forEach((exo, index) => {
        const nomSuivant = resultDataBrute.exercices[index].progressionSuivante;
        console.log("exo qui suit " + nomSuivant);

        exo.progressionSuivante =
          exercices.find((e) => e.nom === nomSuivant) || null;
      });

      console.log(`✅ ${exercices.length} exercices chargés avec succès`);
      return exercices;
    } catch (error) {
      console.error("❌ Erreur lors du chargement des exercices :", error);
      return [];
    }
  }
}

// Voici la vérité directe :
//   👉 Ton JSON ne charge pas parce que tu n’utilises pas le bon environnement. fetch() NE marche pas en local avec un fichier JSON, sauf si tu as un serveur.
//
//   Et oui, tu peux charger un JSON sans fetch, et ce sera même 100x plus simple pour ton projet POO.
