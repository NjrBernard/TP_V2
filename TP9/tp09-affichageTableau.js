let donneesPays = [];

function init() {
    // fetch("https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies")
    //     .then(function (res) {
    //         return res.text();
    //     })
    //     .then(function (body) {
    //         console.log(body);

    //         let zoneAffichage = document.querySelector("#affichage");
    //         zoneAffichage.innerHTML = body;
    //     })

    let req = new XMLHttpRequest();
    req.open('GET', "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies,capital");
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            const data = JSON.parse(req.responseText);
            donneesPays = data || [];

            // Afficher le tableau initial
            if (donneesPays.length > 0) {
                creerTableau(donneesPays);
            } else {
                document.querySelector('#affichage').textContent = 'Aucune donnée disponible';
            }

            // Attacher le gestionnaire du bouton Valider
            const btn = document.getElementById('btnValider');
            if (btn) {
                btn.addEventListener('click', appliquerFiltrePopulation);
            }
        }
    };
    req.send();
}

/**
 * Crée et affiche un tableau à partir des données fournies
 * @param {Array} data - tableau d'objets pays
 */
function creerTableau(data) {
    const tableau = document.createElement('table');

    // En-tête
    const thead = document.createElement('thead');
    const ligneTitre = document.createElement('tr');
    const titres = ['Nom', 'Capitale', 'Population', 'Région'];
    titres.forEach(texteTitre => {
        const th = document.createElement('th');
        th.textContent = texteTitre;
        ligneTitre.appendChild(th);
    });
    thead.appendChild(ligneTitre);
    tableau.appendChild(thead);

    // Corps
    const tbody = document.createElement('tbody');
    data.forEach(pays => {
        const ligne = document.createElement('tr');
        const cellules = [
            pays.name,
            pays.capital || 'N/A',
            pays.population.toLocaleString(),
            pays.region
        ];
        cellules.forEach(texte => {
            const td = document.createElement('td');
            td.textContent = texte;
            ligne.appendChild(td);
        });
        tbody.appendChild(ligne);
    });
    tableau.appendChild(tbody);

    const zoneAffichage = document.querySelector('#affichage');
    zoneAffichage.innerHTML = '';
    zoneAffichage.appendChild(tableau);
}

/**
 * Valide les valeurs MIN et MAX et applique le filtre sur la population
 */
function appliquerFiltrePopulation() {
    const minPopulation = document.getElementById('minPop');
    const maxPopulation = document.getElementById('maxPop');

    let min = minPopulation.value === '' ? 0 : Number(minPopulation.value);
    let max = maxPopulation.value === '' ? Number.MAX_VALUE : Number(maxPopulation.value);

    // Validation
    if (min < 0 || max < 0) {
        alert('Veuillez saisir des valeurs positives pour MIN et MAX.');
        return;
    }
    if (min > max) {
        alert('MIN ne peut pas être supérieur à MAX. Veuillez saisir des valeurs cohérentes.');
        return;
    }

    // Appliquer le filtre
    const resultats = donneesPays.filter(p => {
        const pop = Number(p.population || 0);
        return pop >= min && pop <= max;
    });

    if (resultats.length > 0) {
        creerTableau(resultats);
    } else {
        document.querySelector('#affichage').textContent = 'Aucun pays ne correspond aux critères.';
    }
}