export const TYPES_EXERCICES = ["skill", "stamina", "strength"];

export class Exercice {
  constructor(
    nom,
    niveauRequis,
    type,
    dureeOuReps,
    figure = null,
    progressionSuivante = null,
  ) {
    if (!TYPES_EXERCICES.includes(type)) {
      throw new Error(`Type d'exercice invalide : ${type}`);
    }

    this.nom = nom;
    this.niveauRequis = niveauRequis;
    this.type = type;
    this.dureeOuReps = dureeOuReps;
    this.figure = figure; // <-- ajout pour la figure
    this.progressionSuivante = progressionSuivante;
  }
}
