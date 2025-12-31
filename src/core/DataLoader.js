import { Exercice } from "./classes/Exercice.js";

export class DataLoader {
  static async chargerExercicesPreparatoireAll(FigureNumberPosition) {
    try {
      // 1. Charger le JSON depuis l'API
      const responseData = await fetch("http://localhost:5123/api/exercices");
      if (!responseData.ok) throw new Error("Erreur serveur");
      const data = await responseData.json();


      //c'est les exos de préparation pour le handstand
      return data.figures[FigureNumberPosition]
          .exercicesPreparatoires
          .filter(niv => niv.niveau === 1)
          .flatMap(niv => niv.exercices);

      // console.log("✅ Exercices chargés :", exercices);
    } catch (error) {
      console.error("❌ Erreur lors du chargement des exercices :", error);
      return [];
    }
  }
}