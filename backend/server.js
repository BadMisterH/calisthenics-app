// javascript
// file: `backend/server.js`
console.log("🚀 Démarrage du serveur...");
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import cors from "cors"

console.log("✅ Imports chargés");

const app = express();
const PORT = 5123;

console.log("✅ Express initialisé sur le port", PORT);

// Compatibilité ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("✅ __dirname:", __dirname);

// Serve static files from the backend directory (adjust if your static files are elsewhere)
app.use(express.static(__dirname));
app.use(cors())
//le cors est une protection afin d'eviter d'exploiter une api publique
console.log("✅ Middleware static configuré");

// Single route to serve exercices.json
app.get("/api/exercices", (req, res) => {
  console.log("📥 Requête reçue sur /api/exercices");

  // Use a deterministic path. If `data/` is in project root and `server.js` is in `backend/`,
  // this points to `../data/exercices.json`
  const filePath = path.join(__dirname, "..", "data", "exercices.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Erreur lecture fichier:", err);
      return res.status(500).json({ erreur: "Impossible de charger les exercices" });
    }

    try {
      const json = JSON.parse(data);
      console.log("✅ Fichier exercices.json chargé");
      return res.json(json);
    } catch (parseErr) {
      console.error("❌ Erreur JSON parse:", parseErr);
      return res.status(500).json({ erreur: "Fichier JSON invalide" });
    }ap
  });
});

console.log("✅ Route /api/exercices configurée");

app.listen(PORT, () => {
  console.log("🔥 Serveur lancé sur http://localhost:" + PORT);
});