// import the express module
import express from 'express';


// Create an instance of an Express application
const app = express();

//Enable static file serving
app.use(express.static('public'));

// Allow the app to parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// Create an array to store orders
const orders = [];

//Define the port number where our server will listen
const PORT = 3003;

// Define a default "route"('/')
//req: contains information about the coming request
// res: allows us to send back a response to the client
app.get('/', (req,res) => {
    //send a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});
//A confirm route
app.get('/confirm', (req,res) => {
    //send a response to the client
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

//A Admin route
app.get('/admin', (req,res) => {
    //send a response to the client
    res.send(orders);
});

// Define an "submit-order" route
app.post('/submit', (req, res) => {
     // Create a Json object to store the data
   const order = {
   fname: req.body.fname,
   lname: req.body.lname,
   jtitle:req.body.jtitle,
   company: req.body.company,
   linkedin: req.body.linkedin,
   meet: req.body.meet,
   message: req.body.message
  
};

//Add order to array
orders.push(order);
console.log(orders);

// Send user to confirmation page
res.sendFile(`${import.meta.dirname}/views/confirm.html`);  
});
//Start the server and make it listen on the port
// specified
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});