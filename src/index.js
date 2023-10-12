// alert("hi")
// src/index.js
import './style.css'; // Import your CSS file
import { head} from './header.js'; // Import the new module
import { addButtonClickListener, content} from './menu.js';
import { addButtonClickListener2} from './contact.js'; 




      

const contentDiv = document.getElementById('content');

function createRestaurantHomepage() {


    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Wonderful Restaurant!';

    const restaurantInfo = document.createElement('p');
    restaurantInfo.textContent = 'Experience the finest dining with a view that\'ll take your breath away.';
 

    const bodyCenter = document.createElement('h2');
    bodyCenter.classList.add('h2');
    bodyCenter.textContent = 'Pizza-Mania';

    const button= document.createElement('button');
    button.classList.add('button9');
    button.textContent = 'Menu';



    
    contentDiv.appendChild(headline);
    contentDiv.appendChild(restaurantInfo);
    contentDiv.appendChild(bodyCenter);
    contentDiv.appendChild(button);
}

createRestaurantHomepage();
head();
addButtonClickListener();
addButtonClickListener2();

