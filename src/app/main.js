import { Programme } from "../core/classes/Programme.js";
import { Progression } from "../core/classes/Progression.js";
import { DataLoader } from "../core/DataLoader.js";
import { UI } from "./UI.js";

// Chargement des exercices depuis l'API
const dataExercices = await DataLoader.chargerExercices();

// Initialisation de l'UI
const affichage = new UI();

// Création de la progression à partir des exercices
const progression = new Progression(dataExercices);

// Création du programme pour un utilisateur de niveau 2 (modifiable)

affichage.addSelect((event) => {
  let programmeFrontLEverEnCours = new Programme(progression, event.target.value);
  let exerciceCourant = programmeFrontLEverEnCours.generer();
  affichage.afficherExerciceDuJour(exerciceCourant);
});


// (Optionnel) Affichage d'un exercice de niveau 4 pour test
// affichage.afficherTest(progression.getExerciseForLevel(4));

// Lier le bouton à l'affichage de l'exercice suivant
affichage.addClickBtn(() => {
  exerciceCourant = programmeFrontLEverEnCours.prochainExercice();
  affichage.afficherExerciceDuJour(exerciceCourant);
});
