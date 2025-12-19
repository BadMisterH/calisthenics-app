# 💪 Mon Application de Workout

## C'est quoi ce projet ?

Imagine que tu veux devenir **super fort** 🦸‍♂️. Mais tu ne peux pas faire les exercices difficiles tout de suite !

Cette application t'aide à :
- 📝 Suivre tes exercices (faciles → moyens → difficiles)
- 🎯 Savoir quel exercice faire aujourd'hui
- 📊 Voir ta progression dans le temps

---

## 🧩 Les Pièces du Puzzle (Classes)

### 1️⃣ **Exercice** 🏋️
**C'est quoi ?** Un exercice que tu peux faire (comme des pompes)

**Exemple :**
```text
Nom: "Pompes faciles"
Niveau: 1 (débutant)
Type: "strength" (force)
Combien: "10 répétitions"
```

---

### 2️⃣ **Progression** 📈
**C'est quoi ?** Une liste d'exercices du plus facile au plus dur

**Exemple :**
```
Front Lever:
  Niveau 1 → Pompes faciles
  Niveau 2 → Tractions
  Niveau 3 → Front Lever complet
```

---

### 3️⃣ **Programme** 📅
**C'est quoi ?** Ton plan d'entraînement pour aujourd'hui

**Exemple :**
```text
Je suis niveau 2
→ Le programme me donne : "Tractions"
```

---

### 4️⃣ **Session** 🎬
**C'est quoi ?** Une séance d'entraînement que tu as faite

**Exemple :**
```
Date: 4 décembre 2025
Exercice: Tractions
Répétitions: 5
Réussi: ✅ Oui
```

---

### 5️⃣ **User** (Utilisateur) 👤
**C'est quoi ?** TOI ! Avec ton niveau et tes programmes

**Exemple :**
```text
Nom: "Badro"
Niveau: 2
Programmes: [Programme Front Lever]
Sessions: [Session du 4 déc, Session du 5 déc...]
```

---

### 6️⃣ **DataLoader** 📦
**C'est quoi ?** Le magicien qui charge les exercices depuis un fichier

**Exemple :**
```
Il lit exercices.json
→ Il transforme en vrais objets Exercice
```

---

## 🎮 Comment ça marche ?

### Étape 1 : Démarrer le serveur
```bash
node server.js
```
💡 Le serveur démarre sur http://localhost:5123

### Étape 2 : Ouvrir index.html dans le navigateur
Le fichier `main.js` se lance automatiquement et :
1. 📥 Charge les exercices depuis le serveur
2. 🎯 Crée un programme pour ton niveau
3. 💪 Te dit quel exercice faire aujourd'hui

---

## 📁 Structure du Projet

```
Workout/
│
├── 📄 index.html          → La page web
├── 📄 server.js            → Le serveur Express
├── 📄 main.js             → Le code principal qui lance tout
│
├── 📂 classes/            → Toutes tes classes POO
│   ├── Exercice.js        → Un exercice
│   ├── Progression.js     → Suite d'exercices
│   ├── Programme.js       → Ton plan du jour
│   ├── Session.js         → Une séance d'entraînement
│   ├── User.js            → Toi, l'utilisateur
│   └── DataLoader.js      → Charge les données
│
└── 📂 data/
    └── exercices.json     → Liste de tous les exercices
```

---

## 🎯 Exemple Complet (comme dans main.js)

```javascript
// 1. Je charge les exercices depuis le serveur
const exercices = await DataLoader.chargerExercices("http://localhost:5123/api/exercices");

// 2. Je crée une progression "Front Lever" avec ces exercices
const progression = new Progression("Front Lever", exercices);

// 3. Je crée un programme pour niveau 2
const programme = new Programme(progression, 2);

// 4. Le programme génère l'exercice du jour
programme.generer();
// → Affiche : "Exercice du jour : Tractions, temps de repo : 5-10 reps"

// 5. Je crée un utilisateur
const moi = new User("Badro", 2);

// 6. J'ajoute le programme à mon profil
moi.addProgram(programme);

// 7. Je fais une session d'entraînement
const session = new Session(programme);
session.ajouterExercice(exercices[0], 5, true); // J'ai fait 5 répétitions ✅
session.terminer();

// 8. J'enregistre ma session
moi.addSession(session);

// 9. Je regarde mon historique
console.log(moi.getHistory()); // Toutes mes sessions triées par date
```

---

## 🚀 Prochaines Étapes (Ce que tu peux ajouter)

### Facile 🟢
- [ ] Ajouter plus d'exercices dans `exercices.json`
- [ ] Afficher les exercices dans le HTML (pas juste la console)
- [ ] Ajouter un bouton "J'ai terminé cette session"

### Moyen 🟡
- [ ] Sauvegarder les sessions dans LocalStorage (pour ne pas les perdre)
- [ ] Créer un graphique de progression
- [ ] Ajouter un timer pour chronométrer les exercices

### Difficile 🔴
- [ ] Faire progresser automatiquement le niveau après X sessions réussies
- [ ] Gérer plusieurs progressions (Front Lever, Handstand, etc.)
- [ ] Créer un système de badges/récompenses

---

## 🐛 Problèmes Communs

### Le serveur ne démarre pas
```bash
# Vérifier que Node.js est installé
node --version

# Installer les dépendances
npm install

# Relancer le serveur
node server.js
```

### Les exercices ne s'affichent pas
- ✅ Vérifie que le serveur tourne (http://localhost:5123)
- ✅ Ouvre la console du navigateur (F12) pour voir les erreurs
- ✅ Vérifie que `data/exercices.json` existe

---

## 📚 Concepts POO que tu apprends

| Concept | Où dans le code | Explication simple |
|---------|----------------|-------------------|
| **Classe** | `class User` | Un modèle pour créer des objets |
| **Constructeur** | `constructor(nom, niveau)` | Comment créer un objet |
| **Propriétés** | `this.nom`, `this.level` | Les infos de l'objet |
| **Méthodes** | `addProgram()`, `getHistory()` | Ce que l'objet peut faire |
| **Encapsulation** | Tout dans la classe User | Regrouper données + actions |
| **Composition** | User contient des Sessions | Un objet utilise d'autres objets |

---

## 🎓 Questions pour tester ta compréhension

1. **Quelle classe représente TOI dans le code ?**
   <details><summary>Réponse</summary>La classe `User`</details>

2. **Si je veux ajouter un nouvel exercice, quel fichier je modifie ?**
   <details><summary>Réponse</summary>`data/exercices.json`</details>

3. **Quelle classe décide quel exercice je dois faire aujourd'hui ?**
   <details><summary>Réponse</summary>La classe `Programme`</details>

4. **Comment je sais si ma session d'entraînement est terminée ?**
   <details><summary>Réponse</summary>Avec la propriété `session.completed`</details>

---

## 💡 Tips POO pour débutants

### ✅ Bien nommer tes classes
- **Classe** = Nom singulier avec majuscule (`User`, pas `users`)
- **Méthode** = Verbe d'action (`addSession`, pas `session`)
- **Propriété** = Nom descriptif (`sessions`, pas `s`)

### ✅ Une classe = Une responsabilité
- `User` → Gérer l'utilisateur
- `Session` → Gérer UNE séance
- `Programme` → Gérer UN programme

### ✅ Utilise des méthodes, pas l'accès direct
```javascript
// ❌ Mauvais
user.sessions.push(session);

// ✅ Bon
user.addSession(session);
```

---

## 🎉 Félicitations !

Tu as créé ton premier projet en **Programmation Orientée Objet** ! 

Continue à pratiquer et ajoute des fonctionnalités petit à petit. 

**La POO, c'est comme les LEGO** : tu crées des petites pièces (classes) et tu les assembles pour faire quelque chose de génial ! 🚀

---

## 🧭 Que doit faire la plateforme — Spécification détaillée

Cette section décrit, de manière claire et exploitable, ce que doit réaliser l'application. Elle sert à la fois de guide de développement et de référence pour tester si le produit remplit les objectifs.

### Objectif principal

Permettre à un utilisateur de suivre une progression d'exercices (calisthénics / street workout) et d'obtenir chaque jour un exercice adapté à son niveau, tout en enregistrant ses sessions pour suivre l'évolution.

### Utilisateurs ciblés

- Débutant qui découvre la POO et veut suivre des exercices simples.
- Utilisateur régulier qui veut suivre ses sessions et progresser.

### Fonctionnalités principales (MVP - première version)

1. Chargement des exercices
   - Lire `data/exercices.json` via un endpoint local (ex : `/api/exercices`) ou en important les données côté client si pas de serveur.
   - Transformer chaque entrée JSON en objet `Exercice` (classe).

2. Gestion des progressions
   - Une `Progression` regroupe plusieurs `Exercice` classés par niveau requis.
   - Méthode pour obtenir l'exercice adapté au `niveauUser` (ex : `getExerciseForLevel(niveauUser)`).

3. Génération d'un programme du jour
   - `Programme` prend une `Progression` et un `niveauUser`, et retourne l'`exerciceDuJour`.
   - Capacité minimale : afficher l'exercice du jour et la prochaine progression possible.

4. Enregistrement d'une session
   - Créer une `Session` qui enregistre : date, exercice(s) réalisés, nombre de répétitions / durée, réussite.
   - Sauvegarder les sessions localement (LocalStorage) pour le MVP.

5. Interface utilisateur basique
   - Écran principal : titre, infos utilisateur (nom, niveau), carte « Exercice du jour », bouton "J'ai fait".
   - Historique simple : liste des sessions passées.
   - États UI : loading / empty / error / loaded.

6. Tests manuels rapides
   - Vérifier que `DataLoader` charge correctement et que `Programme` renvoie un exercice.
   - Vérifier la persistance en LocalStorage.

### Flux utilisateur (par ordre d'usage)

1. L'utilisateur ouvre la page → le front charge les exercices.
2. Le front crée les objets (`Exercice`, `Progression`) et construit un `Programme` pour le `niveauUser`.
3. L'UI affiche l'`exerciceDuJour` (nom, type, nombre/durée, conseils).
4. L'utilisateur exécute l'exercice et clique « J'ai terminé » → création d'une `Session` enregistrée.
5. L'utilisateur peut consulter l'historique pour voir l'évolution.

### Forme des données (exemple minimal pour `data/exercices.json`)

Chaque objet exercice doit contenir au moins :
```
{
  "nom": "Pompes - mains serrées",
  "niveau": 1,
  "type": "force",
  "dureeOuReps": "10 reps"
}
```

- Pour une progression : liste d'objets `Exercice` dont la propriété `niveau` donne l'échelle.

### API côté client / endpoints (MVP simple)

- GET /api/exercices → renvoie le JSON brut (ou servir le fichier `data/exercices.json`)

Si tu n'as pas de serveur, charger le JSON via import ou fetch depuis un serveur de dev (ex : `live-server`, `http-server` ou script Node minimal fourni dans le repo).

### Priorités techniques (ordre conseillé)

1. Faire fonctionner le chargement du JSON (DataLoader) en local.
2. Transformer les données en objets `Exercice` et vérifier avec quelques console.log.
3. Implémenter `Progression` et `Programme` (méthodes de base). Tester avec `main.js`.
4. Ajouter l'UI minimale (index.html + style.css) et brancher `main.js` pour afficher l'exo du jour.
5. Sauvegarde simple des `Session` en LocalStorage et affichage de l'historique.

### Cas limites et règles simples

- Si aucun exercice trouvé pour un niveau, afficher un message clair et proposer un niveau adjacent (ex : "Aucun exercice pour ce niveau — afficher niveau inférieur ou supérieur?").
- Valider les données du JSON à la lecture (propriétés manquantes → ignorer avec warning).
- Prévoir un mode dégradé si fetch échoue (charger un fallback embarqué).

### UI minimale (éléments à créer en priorité)

- Header : nom de l'app + bouton paramètres.
- Section utilisateur : nom + niveau (editable plus tard).
- Carte "Exercice du jour" : nom, niveau, détail (reps/durée), bouton "Terminé".
- Historique : liste compacte des dernières sessions.

### Mesures de succès (quand considérer la tâche terminée)

- L'application charge les exercices et affiche l'exercice du jour sans erreur.
- L'utilisateur peut enregistrer au moins une session et la retrouver dans l'historique.
- Le code utilise des classes (`Exercice`, `Progression`, `Programme`, `Session`, `User`) et instancie des objets (pas seulement des objets littéraux).

### Prochaines évolutions (après MVP)

- Synchronisation avec un backend et authentification.
- Graphiques de progression et suggestions de montée de niveau automatique.
- Timer intégré, séries et repos configurables.
