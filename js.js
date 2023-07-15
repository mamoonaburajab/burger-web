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

            const addToCart1Button1 = document.createElement('button');
            addToCart1Button1.textContent = ' Add to Cart';
            addToCart1Button1.classList.add('add-to-cart');


            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'View Details';
            addToCartButton.classList.add('add-to-cart');


            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');
            buttonContainer.appendChild(addToCart1Button1);
            buttonContainer.appendChild(addToCartButton);


            menuItemElement.appendChild(buttonContainer);
            //create size
            const ssizeElement = document.createElement('h5');
            ssizeElement.textContent = "S";
            ssizeElement.classList.add('menu-item-size');
            //create size
            const msizeElement = document.createElement('h6');
            msizeElement.textContent = "M";
            msizeElement.classList.add('menu-item-size');
            menuItemElement.appendChild(msizeElement);
            //create size
            const lsizeElement = document.createElement('h6');
            lsizeElement.textContent = "L";
            lsizeElement.classList.add('menu-item-size');
            menuItemElement.appendChild(lsizeElement);

            //size
            const sizeContainer = document.createElement('div');
            sizeContainer.classList.add('sizeContainer');
            
            sizeContainer.appendChild(ssizeElement);
            sizeContainer.appendChild(msizeElement);
            sizeContainer.appendChild(lsizeElement);
            menuItemElement.appendChild(sizeContainer);

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