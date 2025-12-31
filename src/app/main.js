import { Programme } from "../core/classes/Programme.js";
import { Progression } from "../core/classes/Progression.js";
import { DataLoader } from "../core/DataLoader.js";
import { UI } from "./UI.js";

// 1. Chargement des données
const dataExercices = await DataLoader.chargerExercicesPreparatoireAll(0);
console.log("Données chargées :", dataExercices);

// 2. Initialisation de l'interface
const affichage = new UI();

affichage.NextButtonUse(dataExercices);
affichage.PrecedentButtonUse(dataExercices);

affichage.ChooseSelectExo(async (e) => {
  const exercices = await DataLoader.chargerExercicesPreparatoireAll(
    e.target.value,
  );




  console.log(exercices);
  affichage.afficherExerciceDuJour(exercices[0]);
});

affichage.afficherExerciceDuJour(dataExercices[0]);
