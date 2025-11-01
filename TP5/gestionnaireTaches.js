let b1 = "En cours";
let b2 = "Terminée";
    let taches = [];
function creerGestionnaire() {
return {

    ajoutTache(description) {
        taches.push({description: description, terminee: b1})
    },

    terminerTache(index) {
        return taches[index-1].terminee = b2; 
/* Index "-1" pour ne pas avoir une tâche qui s'appelera la tâche "0".
La première tâche, à l'index 0, sera donc numérotée 1 à l'affichage. */
    },

    afficherTaches() {
        for (let i = 0; i<taches.length; i++) {
            console.log( (i+1) +  ". " + taches[i].description + " --- Statut: " + taches[i].terminee)
        }
    }
}
}
let gestion = creerGestionnaire();
gestion.ajoutTache ("Apprendre le métier de développeur");
gestion.ajoutTache ("Obtenir son diplome");
gestion.ajoutTache ("Gérer son TP5 JavaScript");
gestion.terminerTache (3);
gestion.afficherTaches();