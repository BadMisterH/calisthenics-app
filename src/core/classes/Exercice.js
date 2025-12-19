export const TYPES_EXERCICES = ["skill", "stamina", "strength"];

export class Exercice {
  constructor(
    nom,
    niveauRequis,
    type,
    dureeOuReps,
    progressionSuivante = null,
  ) {
    if (!TYPES_EXERCICES.includes(type)) {
      throw new Error(`Type d'exercice invalide : ${type}`);
    }

    this.nom = nom;
    this.niveauRequis = niveauRequis;
    this.type = type;
    this.dureeOuReps = dureeOuReps; // <-- ajout
    this.progressionSuivante = progressionSuivante; // <-- clé
    // si this.exerciceDuJour n’a pas de progressionSuivante → fin de progression
    // sinon → retourne progressionSuivante
  }
}
