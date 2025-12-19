import { Exercice } from "./classes/Exercice.js";
import { DATA } from "../../../data/exercices.js";

export class DataLoader {
  static chargerExercices() {
    try {
      // Étape 1 : Récupérer les données directement importées
      const resultDataBrute = DATA;

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
        
        if (nomSuivant) {
            exo.progressionSuivante =
            exercices.find((e) => e.nom === nomSuivant) || null;
        }
      });

      console.log(`✅ ${exercices.length} exercices chargés depuis le fichier local`);
      return exercices;
    } catch (error) {
      console.error("❌ Erreur lors du chargement des exercices :", error);
      return [];
    }
  }
}
