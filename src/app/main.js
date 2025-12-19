import { Programme } from "../core/classes/Programme.js";
import { Progression } from "../core/classes/Progression.js";
import { DataLoader } from "../core/DataLoader.js";
import { UI } from "./UI.js";

// 1. Chargement des données (Exercices)
const dataExercices = await DataLoader.chargerExercices();

// 2. Initialisation des composants graphiques (L'affichage)
const affichage = new UI();

// 3. Préparation des variables globales (accessibles partout)
let programmeFrontLEverEnCours = null; // Le programme actif
let exerciceCourant = null;            // L'exercice affiché à l'écran

// 4. Création de la progression (la liste de tous les exercices triés)
const progression = new Progression(dataExercices);

// 5. Démarrage de l'application (Niveau 1 par défaut)
// On crée le programme niveau 1
programmeFrontLEverEnCours = new Programme(progression, 1);
// On récupère le premier exercice
exerciceCourant = programmeFrontLEverEnCours.generer();
// On demande l'affichage immédiat
affichage.afficherExerciceDuJour(exerciceCourant);

// 6. Gestion du changement de niveau (Menu déroulant)
affichage.addSelect((event) => {
  // On lit la valeur choisie (ex: "2") et on la convertit en nombre
  const nouveauNiveau = parseInt(event.target.value);
  
  // On recrée un programme adapté à ce niveau
  programmeFrontLEverEnCours = new Programme(progression, nouveauNiveau);
  
  // On génère et affiche le nouvel exercice tout de suite
  exerciceCourant = programmeFrontLEverEnCours.generer();
  affichage.afficherExerciceDuJour(exerciceCourant);
});

// 7. Gestion du bouton "Suivant"
affichage.addClickBtn(() => {
  // On passe à l'exercice suivant dans la liste
  exerciceCourant = programmeFrontLEverEnCours.prochainExercice();
  // On met à jour l'écran
  affichage.afficherExerciceDuJour(exerciceCourant);
});
