let json = {
    "nom": "Google",
    "Siège social" : ["Googleplex , Mountain View, California, United States"],
    "Fondateurs": [
        {
        "nomF": "Page",
        "prenom": "Larry",
        "dateNaissance": "26/03/1973",
        "lieuNaissance": "East Lansing, Michigan"
        },
        {
        "nomF": "Brin",
        "prenom": "Sergey",
        "dateNaissance": "21/08/1973",
        "lieuNaissance": "Moscou, Union Soviétique"
        }
],
        "ChiffresAffaires": [
        {"année": "2008", "valeur": "16.49"},
        {"année": "2012", "valeur": "37.97"},
        {"année": "2016", "valeur": "89.46"},
        {"année": "2018", "valeur": "136.2"}
]
}

console.log("Les fondateurs de la société " + json.nom + " sont:\n")
for (let i=0; i<json.Fondateurs.length; i++) {
console.log(json.Fondateurs[i].prenom + " " + json.Fondateurs[i].nomF)
}
console.log("\n")

console.log("Les chiffres d'affaires par année sont:" +  "\n")
for (let i=0; i<json.ChiffresAffaires.length; i++) {
console.log("En " + json.ChiffresAffaires[i].année  + " ==> " + json.ChiffresAffaires[i].valeur + " Md$")
}