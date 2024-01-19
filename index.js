const express = require('express'); //to develop web and mobile applications
const cors = require('cors'); //supports secure cross-origin requests and data transfers between browsers and servers
//cross-origin resource sharing
//using this, front-end client can make requests for resources to an external back-end server
const app = express(); //express instance to handle request and response
const port = 5000;

//to add the data for pie chart
const xArray = ["User1", "User2", "User3", "User4", "User5"];
const yArray = [55, 49, 44, 24, 15];
// Sample data to show on the server
const data = [
  // { id: 1, name: 'user1' },
  // { id: 2, name: 'user2' },
  {labels:xArray, values:yArray}
];
app.use(cors()); //t is used to send request to the server before the actual request is sent
//in order to ask which origin and which request options the server accepts
/* Default value of following if cors() is being used without any additional value :
{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
} */

app.get('/api/koyana', (req, res) => { //a route to fetch data
  res.json(data); //to send the 'data' on server
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});