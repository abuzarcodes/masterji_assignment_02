# chai aur code || Masterji assignment 02

This React application provides a fun and interactive way to view random user cards, random jokes, and a paginated list of cat images. The app is deployed [here](https://masterji-assignment-02.vercel.app/).

## Features

1. **Random User Card**
   ![App Screenshot](/public/assets/randomUser.png)

   - **Path:** `/` or `/random-user`
   - This page fetches and displays a random user's details using an external API. The card is visually appealing and refreshes on each visit to present a new user.

2. **Random Jokes Card**
   ![App Screenshot](/public/assets/randomJokes.png)

   - **Path:** `/random-jokes`
   - On this page, you'll find a random joke fetched from a joke API. The card is designed to display jokes in a simple yet engaging way.

3. **Cat Listings**
   ![App Screenshot](/public/assets/catListing.png)
   - **Path:** `/cat-listings`
   - A paginated scroll page that showcases various cat images. Each page loads more cat cards dynamically as you scroll, ensuring a seamless browsing experience.

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the development server:

   ```bash
   npm start
   ```

## API Reference

The app fetches data from the following external APIs:

    Random User API - https://api.freeapi.app/api/v1/public/randomusers/user/random

    Random Jokes API - https://api.freeapi.app/api/v1/public/randomjokes/joke/random
    
    Cat API - https://api.freeapi.app/api/v1/public/cats?page=1&limit=10
