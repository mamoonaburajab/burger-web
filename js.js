// Fetch the data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Get the menu section element
        const menuSection = document.getElementById('menu1');

        // Loop through the menu items data
        data.forEach(menuItem => {
            // Create the menu item element
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');

            // Create the image element
            const imageElement = document.createElement('img');
            imageElement.src = menuItem.image;
            imageElement.alt = menuItem.title;
            imageElement.classList.add('menu-item-image');
            menuItemElement.appendChild(imageElement);

            // Create the title element
            const titleElement = document.createElement('h3');
            titleElement.textContent = menuItem.title;
            titleElement.classList.add('menu-item-title');
            menuItemElement.appendChild(titleElement);

            // Create the price element
            const priceElement = document.createElement('p');
            priceElement.textContent = `$${menuItem.price}`;
            priceElement.classList.add('menu-item-price');
            menuItemElement.appendChild(priceElement);

            // Create the add to cart button
            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'View Details';
            addToCartButton.classList.add('add-to-cart');
            menuItemElement.appendChild(addToCartButton);

            // Event handler for button click
            addToCartButton.addEventListener('click', function () {
                // Navigate to meal.html page
                window.location.href = 'meal.html';
            });


            // Append the menu item to the menu section
            menuSection.appendChild(menuItemElement);
        });
    })
    .catch(error => {
        console.error('Error loading menu items:', error);
    });
const menuCard = document.querySelector('.menu-item');

menuCard.addEventListener('mouseenter', () => {
    menuCard.classList.add('hovered');
});

menuCard.addEventListener('mouseleave', () => {
    menuCard.classList.remove('hovered');
});

// Responsive map height
window.addEventListener('DOMContentLoaded', function () {
    adjustMapHeight();
});

window.addEventListener('resize', function () {
    adjustMapHeight();
});

function adjustMapHeight() {
    var mapContainer = document.querySelector('.map-container');
    var map = document.getElementById('map');
    map.style.height = mapContainer.offsetWidth * 0.75 + 'px';
}