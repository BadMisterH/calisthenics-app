import { Programme } from "../core/classes/Programme.js";
import { Progression } from "../core/classes/Progression.js";
import { DataLoader } from "../core/DataLoader.js";
import { UI } from "./UI.js";

// Chargement des exercices depuis l'API
const dataExercices = DataLoader.chargerExercices();

// Initialisation de l'UI
const affichage = new UI();

// Création de la progression à partir des exercices
const progression = new Progression(dataExercices);

// Création du programme pour un utilisateur de niveau 2 (modifiable)
let programmeFrontLEverEnCours = new Programme(progression, 1); //le level 2 du programmeFrontLEver

affichage.addSelect((event) => {
  console.log(event.target.value);
});

// Génération et affichage du premier exercice du jour
let exerciceCourant = programmeFrontLEverEnCours.generer();
affichage.afficherExerciceDuJour(exerciceCourant);

// (Optionnel) Affichage d'un exercice de niveau 4 pour test
// affichage.afficherTest(progression.getExerciseForLevel(4));

// Lier le bouton à l'affichage de l'exercice suivant
affichage.addClickBtn(() => {
  exerciceCourant = programmeFrontLEverEnCours.prochainExercice();
  affichage.afficherExerciceDuJour(exerciceCourant);
});
