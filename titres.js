// BASE DE DONNÉES
const songs = [
  {
    title: "Believer",
    artists: ["Imagine Dragons"],
    lyrics: "First things first..."
  },
  {
    title: "Despacito",
    artists: ["Luis Fonsi",
    "Daddy Yankee"],
    lyrics: "Ay Fonsi..."
  }
];

// RECHERCHE
function searchSongs(query) {
  return songs.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );
}

// AFFICHER LISTE CHANSONS
function displaySongs(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  results.forEach(song => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${song.title}</h3>
      <p>${song.artists.length} chanteur(s)</p>
    `;

    card.onclick = () => showSongDetails(song);

    container.appendChild(card);
  });
}

// DÉTAILS CHANSON
function showSongDetails(song) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${song.title}</h2>
    <p>Chanteurs :</p>
    <ul>
      ${song.artists.map(a => `<li>${a}</li>`).join("")}
    </ul>

    <button id="btnLyrics">Voir les paroles</button>
  `;

  container.appendChild(card);

  document.getElementById("btnLyrics").onclick = () => {
    showLyrics(song);
  };
}

// PAROLES
function showLyrics(song) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${song.title}</h2>
    <pre style="text-align:left; white-space:pre-wrap;">
${song.lyrics}
    </pre>
  `;

  container.appendChild(card);
}

// EVENT RECHERCHE
document.getElementById("search").addEventListener("input", (e) => {
  const results = searchSongs(e.target.value);
  displaySongs(results);
});

// INIT
displaySongs(songs);



    
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