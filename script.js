const dialog= document.getElementById("dialog")
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")
const body = document.getElementById("body")

openBtn.addEventListener("click", function(){
    dialog.setAttribute("open", true)
    body.classList.add("bg-gray-200")
})

closeBtn.addEventListener("click", function(){
    dialog.removeAttribute("open")
    body.classList.remove("bg-gray-200")
});




const searchForm = document.querySelector("form"); // Sélectionne le formulaire
const searchInput = document.querySelector("input[type='text']"); // Sélectionne l'élément d'entrée de recherche
const paragraphs = document.querySelectorAll("h3"); // Sélectionne toutes les balises <p> dans le document

// Événement de soumission du formulaire
searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    const searchTerm = searchInput.value.trim(); // Obtient la valeur de la recherche

    // Parcourir toutes les balises <p>
    for (const paragraph of paragraphs) {
    const paragraphText = paragraph.textContent.trim();

    if (paragraphText === searchTerm) {
        console.log(`"${searchTerm}" trouvé dans la page"`);
        paragraphText.classList.add("bg-gray-200")
    } else {
        console.log(`"${searchTerm}" non trouvé dans la page"`);
    }
    }
});