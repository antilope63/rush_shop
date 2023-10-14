const priceButton = document.getElementById('priceButton');
const priceDisplay = document.getElementById('priceDisplay');
const priceMin = 5;
const priceMax = 600;

let isDragging = false;

priceButton.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault(); // Empêche la sélection de texte lors du glissement
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const priceButtonRect = priceButton.getBoundingClientRect();
        const priceBarRect = priceButton.parentElement.getBoundingClientRect();
        let newPosition = e.clientX - priceBarRect.left;
        
        // Limite la position du bouton dans la plage de prix
        newPosition = Math.max(0, Math.min(newPosition, priceBarRect.width));
        
        priceButton.style.left = newPosition + 'px';
        
        // Met à jour le prix en fonction de la position
        const priceRange = priceMax - priceMin;
        const price = (newPosition / priceBarRect.width) * priceRange + priceMin;
        priceDisplay.textContent = `$${price.toFixed(0)}`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});