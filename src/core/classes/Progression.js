// Gestion des progressions
//
// Une Progression regroupe plusieurs Exercice classés par niveau requis.
//     Méthode pour obtenir l'exercice adapté au niveauUser (ex : getExerciseForLevel(niveauUser)).

export class Progression {
  constructor(exercices) {
    this.exercices = exercices; //tableau
  }

  getWhichExerice() {
    return this.exercices;
  }

  getExerciseForLevel(niveauUser) {
    const resultFindExoLevel = this.exercices.find(
      (element) => element.niveauRequis === niveauUser,
    );
    if (!resultFindExoLevel) return null;
    return resultFindExoLevel;
  }

  getExerciceByType(type) {
    return this.exercices.filter((exo) => exo.type === type);
  }
}
