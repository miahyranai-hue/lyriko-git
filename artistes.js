const chansons = [
        {
        titre: "Believer",
        artiste: "Imagine Dragons",
        paroles: "First things first..."
        },

        {
        titre: "Despacito",
        artiste: ["Luis Fonsi"],
        lyrics: "Ay Fonsi..."
        },

        {
        titre: "Shape of you", 
        artiste: "Ed Sheeran",
        paroles: "Ligne 1... Ligne 2 ..."
        },

        {
        titre: "Perfect", 
        artiste: "Ed Sheeran",
        paroles: "Ligne 1... Ligne 2 ..."
        },

        {
        titre: "Always",
        artiste: "Bon Jovi",
        paroles: "Ligne 1... Ligne 2 ..."
        },

        {
        titre: "Number one girl",
        artiste: "Rosé",
        paroles: "Ligne 1... Ligne 2 ..."
        }
];

//barre de recherche fonctionnelle
let recherche = document.getElementById("recherche");
let artistesDiv = document.getElementById("artistes");

function afficherArtistes(filtre = "") {
    artistesDiv.innerHTML = "";

    const artistes = {};

    chansons.forEach(chanson => {
        if(!artistes[chanson.artiste]) {
            artistes[chanson.artiste] = 0;
        }
        artistes[chanson.artiste]++;
    });

    for (const artiste in artistes) {
        if (artiste.toLowerCase().includes(filtre.toLowerCase())) {
            const card = document.createElement("div");
            card.className = "card-artiste";
            card.innerHTML = `
                <h3>${artiste}</h3>
                <p>${artistes[artiste]} titre(s)</p>
            `;
            card.addEventListener("click", () => {
            afficherChansons(artiste);
});

            artistesDiv.appendChild(card);
        }
    }
}

recherche.addEventListener("input", () => {
    afficherArtistes(recherche.value);
});
afficherArtistes();
function afficherChansons(artiste) {
    artistesDiv.innerHTML = "";

    chansons.forEach(chanson => {
        if (chanson.artiste === artiste) {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${chanson.titre}</h3>
                <p>${chanson.artiste}</p>
            `;

            card.addEventListener("click", () =>
        {
            afficherParoles(chanson);
        });
        artistesDiv.appendChild(card);
       
    }
    
});
}

function afficherParoles(chanson) {
    artistesDiv.innerHTML = `
        <div class="card-paroles">
            <h3>${chanson.titre}</h3>
            <p class="star">${chanson.artiste}</p>
            <p>${chanson.paroles}</p>
        </div>
    `;
}

//liens navigations
const liens = document.querySelectorAll("a");

liens.forEach(lien => {
    lien.addEventListener("click", () => {
        liens.forEach(l => l.classList.remove("active"));
        lien.classList.add("active");
    });
});


    
// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");


});

//show
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");

}