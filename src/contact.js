// const content = document.getElementById('content');



// Define a function to create the "page within" content
export function createPageWithinContent() {
    return `
        <p> Email: PizzaMania123@gmail.com </p>
        <p> Contact No.:000-999-000-9 </p>
        <button id="goBackButton">Go Back</button>
    `;
}

// Export the button click event listener
export function addButtonClickListener2() {
    const buttons = document.getElementsByClassName('button3');
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
