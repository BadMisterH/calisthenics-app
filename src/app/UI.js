export class UI {
  constructor() {
    // Si on est hors navigateur (ex: Node.js), on crée des références nulles et on sort
    if (typeof document === "undefined") {
      this.userNameEl = null;
      this.userLevelEl = null;
      this.exerciceEl = null;
      this.selectExo = null
      this.PrecedentButton = null
      this.IndexCurrent = null
      this.NiveauSelect = null;
      return;
    }

    this.userNameEl = document.querySelector("#userName");
    this.selectExo = document.getElementById("figure-select")
    this.userLevelEl = document.getElementById("userLevel");
    this.exerciceEl = document.getElementById("exerciceCard");
    this.NextButton = document.getElementById("Next")
    this.PrecedentButton = document.getElementById("Precedent")
    this.NiveauSelect = document.getElementById("niveau-select");
    this.IndexCurrent = 0;
  }

  afficherUser(user) {
    if (!this.userNameEl || !user) return;
    this.userNameEl.innerHTML = `<h2>${user.nom}</h2>`;
    if (this.userLevelEl)
      this.userLevelEl.innerHTML = `<span>${user.niveau}</span>`;
  }

  ChooseSelectExo(onExoChoose) {
    if(!this.selectExo) return;
    this.selectExo.addEventListener("change", onExoChoose)
  }

  activerNiveauSelect(actif = true){
    if(!this.NiveauSelect) return;
    this.NiveauSelect.disable = !actif
  }


  NextButtonUse(DataExerciceClick){
    this.IndexCurrent = 0
    this.NextButton.addEventListener("click", () => {
      if(this.IndexCurrent < DataExerciceClick.length - 1){
        this.IndexCurrent++
        this.afficherExerciceDuJour(DataExerciceClick[this.IndexCurrent])
      }
    })
  }

  PrecedentButtonUse(DataExerciceClick){
    this.IndexCurrent = DataExerciceClick.length - 1

    this.PrecedentButton.addEventListener("click", () => {
      // Vérifie qu'on n'est pas déjà au début (index 0)
      if(this.IndexCurrent > 0){
        this.IndexCurrent-- // Recule d'un exercice
        this.afficherExerciceDuJour(DataExerciceClick[this.IndexCurrent])
      }
    })
  }

  afficherExerciceDuJour(exercice) {
    if (!this.exerciceEl) return;
    if (!exercice) {
      this.exerciceEl.innerHTML = "<p>Aucun exercice aujourd'hui.</p>";
      return;
    }

    // Supporter plusieurs shapes d'objet : { nom, dureeOuReps, type, progressionSuivante }
    const nom = exercice.nom ?? exercice.name ?? "Exercice";
    const details = exercice.dureeOuReps ?? exercice.reps ?? "";
    const type = exercice.type ? `<small>Type: ${exercice.type}</small>` : "";

    // progressionSuivante peut être une string (nom) ou un objet Exercice
    let progressionHtml = "";
    if (exercice.progressionSuivante) {
      const ps =
        typeof exercice.progressionSuivante === "string"
          ? exercice.progressionSuivante
          : (exercice.progressionSuivante.nom ??
            exercice.progressionSuivante.name ??
            "");
      if (ps)
        progressionHtml = `<p>Progression suivante: <strong>${ps}</strong></p>`;
    }

    this.exerciceEl.innerHTML = `
      <h3>${nom}</h3>
      <p>${details}</p>
      ${type}
      ${progressionHtml}
    `;
  }



}
