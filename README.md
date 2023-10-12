# Restaurant-Page  Project-10

## Overview
The Restaurant Page project is a simple web page for a fictional restaurant called "Pizza-Mania." This documentation provides an overview of the project's structure, key components, and functionality.

### Project Structure
The project directory consists of the following main folders and files:

- **Restaurant-Page**: The main project folder.
  - **/dist**: Contains the compiled and distribution files.
  - **/src**: Contains the source code files.
  - **/node_modules**: Node.js modules for managing project dependencies.
  - **/pizza**: Contains images of the restaurant's menu items.

### Key Files
The project includes several key files:

1. **dist/index.html**: The main HTML file that defines the structure of the web page.
2. **dist/main.js**: The main JavaScript file responsible for rendering content on the page and handling button click events.
3. **dist/style.css**: The project's CSS file that defines the page's styling.
4. **src/index.js**: JavaScript file that initializes the page, imports other modules, and creates the homepage content.
5. **src/menu.js**: JavaScript module for handling the menu button click event and displaying menu items.
6. **src/contact.js**: JavaScript module for handling the contact button click event and displaying contact information.
7. **src/header.js**: JavaScript module for creating the header buttons and their click events.

### Functionality
The project provides the following functionality:

1. **Homepage**: Upon loading the website, users are greeted with the restaurant's name, a brief description, and a "Menu" button.

2. **Menu Button**: Clicking the "Menu" button dynamically replaces the content with a list of menu items. Each menu item includes an image, name, description, and an "Order Now" button.

3. **Contact Button**: Clicking the "Contact Us!" button replaces the content with contact information, including the restaurant's email and contact number. A "Go Back" button allows users to return to the homepage.

4. **Styling**: The webpage uses external fonts from Google Fonts and is styled with various CSS rules, including background images, fonts, colors, and button styles.

5. **Responsive Design**: The page is designed to be responsive to different screen sizes, making it accessible on various devices.

### How to Run
To run the Restaurant Page project:

1. Ensure that you have Node.js and a package manager (e.g., npm or yarn) installed on your system.

2. Navigate to the project folder (`Restaurant-Page`) in your terminal.

3. Install project dependencies by running `npm install`.

4. Start a local development server by running `npm start`.

5. Open your web browser and access the project at `http://localhost:3000` or the specified port.

### Development
The project's development can be extended by adding more menu items, additional pages, or more styling elements. Developers can also customize the project's content and appearance to suit their requirements.

Please note that this is a simplified project for educational purposes, and in a real-world scenario, more features, data management, and optimization would be needed.