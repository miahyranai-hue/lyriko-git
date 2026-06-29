const chansons = [
        {
        id: 1,
        titre: "Shape of you", 
        artiste: "Ed Sheeran",
        lyrics: "Ligne 1... Ligne 2 ..."
        },

        {
        id: 2,
        titre: "Always",
        artiste: "Bon Jovi",
        lyrics: "Ligne 1... Ligne 2 ..."
        },

        {
        id: 3,
        titre: "Number one girl",
        artiste: "Rosé",
        lyrics: "Ligne 1... Ligne 2 ..."
        }
];

//barre de recherche fonctionnelle
let input = document.getElementById("searchInput");
let resultats = document.getElementById("resultats");
input.addEventListener("input", function (){
    let val = input.value.toLowerCase().trim();

    resultats.innerHTML = "";

    if (val === "") return;

    let filtres = chansons.filter(c => c.titre.toLowerCase().includes(val) ||
                                       c.artiste.toLowerCase().includes(val)); 
    
    if (filtres.length === 0) {
        let div = document.createElement("div");
        div.classList.add("card", "empty");
        div.textContent = "Aucun résultat trouvé  !";
resultats.appendChild(div);       
        return;
    }

    filtres.forEach(function (c) {
        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <div class="titre">${c.titre}</div>
            <div class="artiste">${c.artiste}</div>
            `;
        div.addEventListener("click", function() {
            resultats.innerHTML = `
                <div class="card paroles-card">
                    <div class="titre UN">${c.titre}</div>
                    <div class="artiste DEUX">${c.artiste}</div>
                    <div class="lyrics">${c.lyrics}</div>
                </div>
            `;
        });
        resultats.appendChild(div);
         
    });
});

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