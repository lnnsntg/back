// const routes = [require("./getRoutes"), require("./postRoutes")];
const router = ["./getRoutes", "./postRoutes"].map(require);

module.exports = { router };


// Proporcionado por Chat GPT

/* 
const fs = require('fs');
const router = require('express').Router();

fs.readdirSync('./routes').forEach((file) => {
  if (file.endsWith('.js')) {
    const route = require(`./routes/${file}`);
    router.use(route);
  }
});

module.exports = router;
*/
