export class Programme {
  constructor(progression, niveauUser) {
    this.progression = progression;
    this.niveauUser = niveauUser;
    this.exerciceDuJour = null;
  }
  generer() {
    const exo = this.progression.getExerciseForLevel(this.niveauUser);
    // 2. si aucun exo trouvé
    if (!exo) {
      console.log("Aucun exercice trouvé pour ce niveau.");
      return null;
    }

    this.exerciceDuJour = exo;
    return exo;
  }

  prochainExercice() {
    if (!this.exerciceDuJour) return null;
    return this.exerciceDuJour.progressionSuivante;
  }
}
