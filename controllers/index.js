const { users } = require("./getController");
const { hello } = require("./postController");

module.exports = { users, hello };






/*
Lenin Santiago
podrias darme un ejemplo para crear un index para los controladores de un backend en node usando express

Claro, aquí te doy un ejemplo de cómo crear un índice para los controladores de un backend en Node.js utilizando Express:

Crea una carpeta llamada controllers en la raíz de tu proyecto.
Dentro de la carpeta controllers, crea un archivo index.js.
En el archivo index.js, importa el módulo fs de Node.js.
Utiliza el método fs.readdirSync para leer todos los archivos dentro de la carpeta controllers.
Filtra los archivos para incluir solo los que terminan en .controller.js (o como desees llamar a los controladores)
Utiliza el método map para importar cada archivo y guardarlo en un objeto.
Exporta el objeto como un módulo


const fs = require("fs");
const path = require("path");

const controllers = {};

fs.readdirSync(path.join(__dirname))
  .filter(file => file.endsWith(".controller.js"))
  .forEach(file => {
    const controller = require(path.join(__dirname, file));
    controllers[controller.name] = controller;
  });

module.exports = controllers;

En este ejemplo, estamos utilizando el módulo fs de Node.js para leer todos los archivos dentro de la carpeta controllers y filtrarlos para incluir solo los archivos que terminan con .controller.js. Luego, utilizamos el método map para importar cada archivo y guardarlo en un objeto llamado controllers. Finalmente, exportamos el objeto controllers como un módulo para que pueda ser importado en otros archivos de nuestra aplicación.

Ten en cuenta que este ejemplo es solo una posible forma de crear un índice para los controladores, y puedes adaptarlo para adaptarse a tus necesidades específicas.
*/