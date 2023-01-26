// const routes = [require("./getRoutes"), require("./postRoutes")];
const routes = ["./getRoutes", "./postRoutes"].map(require);

module.exports = { routes };
