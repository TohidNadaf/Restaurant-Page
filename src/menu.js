const content = document.getElementById('content');



// Define a function to create the "page within" content
export function createPageWithinContent() {
    return `
        <h3>Margherita</h3>
        <img src="../pizza/Margherita.jpg">
        <p >Classic tomato and mozzarella cheese.</p>
        <p>price: '$11.99' </p>
        <button id="orderNow">Order Now!</button>


        <h3>Pepperoni</h3>
        <img src="../pizza/Pepperoni.jpg">
        <p >Pepperoni, cheese, and tomato sauce.</p>
        <p> price: '$13.99</p>
        <button id="orderNow">Order Now!</button>

        <h3>Vegetarian</h3>
        <img src="../pizza/Vegetarian.jpg">
        <p >Assorted vegetables and cheese.</p>
        <p> price: '$13.99'</p>
        <button id="orderNow">Order Now!</button>

        <h3>Hawaiian</h3>
        <img src="../pizza/Hawaiian.jpg">
        <p >Ham, pineapple, cheese, and tomato sauce.</p>
        <p>price: '$10.99</p>
        <button id="orderNow">Order Now!</button>

        <h3>Meat Lovers</h3>
        <img src="../pizza/Meat Lovers.jpg">
        <p >Pepperoni, sausage, bacon, cheese, and tomato sauce.</p>
        <p>price: '$12.99' </p>
        <button id="orderNow">Order Now!</button>


        <h3>BBQ Chicken</h3>
        <img src="../pizza/BBQ Chicken.jpg">
        <p >Grilled chicken, barbecue sauce, cheese, and onions.</p>
        <p>price: '$14.99' </p>
        <button id="goBackButton">Go Back</button>
        <button id="orderNow">Order Now!</button>
    `;
}

// Export the button click event listener
export function addButtonClickListener() {
    const buttons = document.getElementsByClassName('button9');
    const content = document.getElementById('content');

    for (const button of buttons) {
        button.addEventListener('click', () => {
            // Set the "page within" content
            content.innerHTML = createPageWithinContent();


            // Add event listener for the "Go Back" button
            const goBackButton = document.getElementById('goBackButton');
            goBackButton.addEventListener('click', () => {
                // Redirect to the home page
                window.location.href = 'index.html'; // Replace with the actual home page URL
            });
      
        });
    }
}