// Import the necessary modules
import express from "express"
import axios from "axios"

// Create an instance of the express app
const app=express();

// Define the port to listen on (change this if you need to run on a different port)
const port =3000;

// Serve static files from the 'public' directory
app.use("/public", express.static("public"));

// API URL for fetching cat facts
const api_url="https://catfact.ninja/";


// Route to render the homepage with a random cat fact
app.get("/",async(req,res)=>{
    
try{
     // Fetch a random cat fact from the API
        const result= await axios.get(api_url+"fact");

    // Render the 'index.ejs' template with the fetched fact and its length
        res.render("index.ejs",{content:result.data.fact,
            length:result.data.length

        });
    // Log the data to the console for reference
        console.log(result.data);
     }
catch(error){
     // Log the error to the console and send a 500 response in case of failure
console.log(error.response.data);
res.status(500);
}
});

// Start the server and listen on the specified port
app.listen(port,()=>{
    console.log(`the server is running on the port ${port}`);
});