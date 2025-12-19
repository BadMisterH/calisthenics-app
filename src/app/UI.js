export class UI {
  constructor() {
    // Si on est hors navigateur (ex: Node.js), on crée des références nulles et on sort
    if (typeof document === "undefined") {
      this.userNameEl = null;
      this.userLevelEl = null;
      this.exerciceEl = null;
      this.testBouton = null;
      this.choiceLevel = null;
      return;
    }

    this.userNameEl = document.querySelector("#userName");
    this.userLevelEl = document.getElementById("userLevel");
    this.exerciceEl = document.getElementById("exerciceCard");
    this.testBouton = document.querySelector(".test-bouton");
    this.choiceLevel = document.getElementById("choix-couleur")
  }

  afficherUser(user) {
    if (!this.userNameEl || !user) return;
    this.userNameEl.innerHTML = `<h2>${user.nom}</h2>`;
    if (this.userLevelEl)
      this.userLevelEl.innerHTML = `<span>${user.niveau}</span>`;
  }

  afficherTest(result) {
    // console.log(result)
    const nom = result.nom;
    const dureExercice = result.dureeOuReps;

    this.exerciceEl.innerHTML = `
      <span>nom de l 'exerice : ${nom}</span>
      <p>répétition de l'exercice : ${dureExercice}</p>
      `;
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

  addClickBtn(onClick) {
    this.testBouton.addEventListener("click", onClick);
  }

  addSelect(onClickSelect) {
    this.choiceLevel.addEventListener("change", onClickSelect);
  }
}
