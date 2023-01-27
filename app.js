const express = require("express");
const app = express();
const { router } = require("./router");
require("dotenv").config();
require("./db");
const User = require("./models/User");
const { Router } = require("express");


const port = process.env.PORT || 8000;

app.use(router);

app.listen(port, () => {
  console.log(`The application is running on localhost ${port}`);
});

//--------------------------------------------------------------------
// Creating a resource

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); 
  */

//--------------------------------------------------------------------
// Listing all resources

/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json)); 
  */

//--------------------------------------------------------------------
// Getting a resource
/* 
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((json) => console.log(json)); 
*/

//--------------------------------------------------------------------
