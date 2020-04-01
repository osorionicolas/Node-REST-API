const bodyParser = require('body-parser');
const app = require("express")();
const routes = require("./routes");

require("./components/user.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};

app.use(function(req, res, next) {
 respuesta = {
  error: true, 
  codigo: 404, 
  mensaje: 'URL not found'
 };
 res.status(404).send(respuesta);
});

app.listen(3000, () => {
 console.log("App listening on port 3000");
});
