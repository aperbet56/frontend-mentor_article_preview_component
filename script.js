// Récupération des éléments HTML5
const shareIcon = document.querySelector("#share__click");
const shareText = document.querySelector(".share__item");

// Ecoute de l'événement click sur shareIcon
shareIcon.addEventListener("click", () => {
  // Ajout et suppression de la classe show
  shareText.classList.toggle("show");
});
