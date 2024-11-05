# Cat Facts 

This web application is created for fun. everytime you reloads the page, it will give you 
intresting facts about cats .


## Features

- **Random Cat Fact**: Retrieves a random cat fact from the [Cat Fact Ninja API](https://catfact.ninja) on every page reload.
- **Fact Length**: Displays the length of each cat fact alongside the fact itself.

This app uses the endpoint `https://catfact.ninja/fact` to fetch a new cat fact along with its length, enhancing the experience with interesting and fun information about cats.

## Installation

Follow these steps to set up the project locally:

## Prerequisites

- [Node.js and npm](https://nodejs.org/) installed on your system.
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ssmam/catfacts.git

2. **navigate to the project folder**
   cd catfacts
 
3. npm install
 

4. npm install -g nodemon
   (linux: sudo npm install -g nodemon)
 
5. nodemon index.js

6. Access the application: Open your browser and go to `http://localhost:3000` to view the app
   

## another method (from the third step)

4. nano package.json

5.  add this code in the package.json
       "scripts": {
  "start": "node index.js"
    }
 `it tells Node.js to run the index.js file`

 6.npm start

7. Access the application: Open your browser and go to `http://localhost:3000` to view the app

 ## Technologies Used
 - Node.js
 - Express
 - EJS
 - Axios








