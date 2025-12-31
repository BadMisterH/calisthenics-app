class Session {
  constructor() {
    this.exercices = [];
  }

  addExercice(exercice) {
    this.exercices.push(exercice);
  }

  getExercices() {
    return this.exercices;
  }

  getExerciceByType(type) {
    return this.exercices.filter((exercice) => exercice.type === type);
  }

  getExerciceByLevel(level) {
    return this.exercices.filter((exercice) => exercice.level === level);
  }

  getExerciceByNom(nom) {
    return this.exercices.filter((exercice) => exercice.nom === nom);
  }
}
