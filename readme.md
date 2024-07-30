# Pokemon API Card Builder

## Overview

The Pokémon API Card Builder is a web application that allows users to search for Pokémon using the PokeAPI. It fetches data about the specified Pokémon and displays it in a card format with relevant details such as type, HP, attack, and defense.

## Features

- **Pokémon Search:** Users can search for any Pokémon by name.
- **Detailed Information:** Displays the Pokémon's type, HP, attack, and defense.
- **Dynamic Card Display:** Each Pokémon's information is displayed in a styled card that changes color based on the Pokémon's primary type.

## Technologies Used

- **HTML5:** Provides the structure of the application.
- **CSS3:** Used for styling the application, with custom styles and Bootstrap for responsive design.
- **JavaScript (ES6):** Handles the functionality of fetching data from the PokeAPI and dynamically updating the DOM.
- **Bootstrap 5.3.2:** Ensures responsive design and pre-built components for ease of development.
- **PokeAPI:** A RESTful API that provides information about Pokémon.

## Getting Started

To get started with the Pokémon API Card Builder, follow the steps below:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd pokemon-api-card-builder
   ```

3. Open `index.html` in your web browser to view the application.

## Project Structure

The project consists of the following files and directories:

- `index.html`: The homepage of the application, featuring a hero section and links to other pages.
- `search.html`: The search page where users can enter a Pokémon name and view details.
- `style.css`: Custom CSS styles for the application.
- `pokeScript.js`: JavaScript file containing functions to fetch Pokémon data from the API and update the DOM.
- `assets/`: Directory containing image assets used in the application.

## Functionality

### HTML Files

- **index.html**: Contains the main layout of the homepage, including a navigation bar, hero section, and footer.
- **search.html**: Includes a search form for entering Pokémon names and a card to display the Pokémon's details.

### JavaScript Functions

- `fetchPokemonData(pokemonName)`: Fetches data from the PokeAPI for the specified Pokémon name.
- `getTypeColor(type)`: Returns a color based on the Pokémon's type.
- `toTitleCase(str)`: Converts a string to title case.
- Event listener for the search form submission to fetch and display Pokémon data.
- `displayPokemonData(pokemonData)`: Updates the DOM with the fetched Pokémon data.
- `displayError(message)`: Displays an error message if the Pokémon is not found.

## Usage

1. **Search for a Pokémon:**
   - Go to the search page (`search.html`).
   - Enter the name of the Pokémon in the search form.
   - Click the "Search" button to view the Pokémon's details.

2. **View Pokémon Details:**
   - The Pokémon's details will be displayed in a card format.
   - The card includes the Pokémon's image, type, HP, attack, and defense.

## License

© 2024 Pokémon Card Builder. All rights reserved.
