function init() {


    let req = new XMLHttpRequest();
    req.open('GET', "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies,capital");
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = JSON.parse(req.responseText);
            console.log(data)
            for (let i=0 ; i<data.length ; i++)
                { let nomPays = data[i].name + " --- Capital: " + data[i].capital + " --- Population: " + data[i].population + " --- Région: " + data[i].region
            let zoneAffichage = document.querySelector("#affichage");
            zoneAffichage.innerHTML += nomPays + "<br>";
        }
    }
    }
    req.send();


}