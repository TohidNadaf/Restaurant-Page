const contentDiv = document.getElementById('content');

 export function head() {
    
    const button= document.createElement('button');
    button.classList.add('button1');
    button.textContent = 'Home';

    
    // const button2= document.createElement('button');
    // button2.classList.add('button2');
    // button2.textContent = 'Menu';
    
    const button3= document.createElement('button');
    button3.classList.add('button3');
    button3.textContent = 'Contact us!';
    
    contentDiv.appendChild(button);
    // contentDiv.appendChild(button2);
    contentDiv.appendChild(button3);

      
}


