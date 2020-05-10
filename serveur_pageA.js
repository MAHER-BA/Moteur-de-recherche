/* ce code est en Node.js*/

/* cette fonction permet de renvoyer la page A lorsque on interroge le serveur sans aucune paramètre*/


var express = require('express');             /* "express" est une bibliothèque Node.js qui permet d'associer plus facilement des fonctions*/
var app = express();
 
app.get('/serveur', function(req, res) {
  if(req.query == NULL) {
    res.sendfile(__dirname+'/page-web-A.html');  /* __dirname correspond au dossier où se trouve le serveur et les pages web */
  }
});
 
app.listen(80);
console.log('App listening on port 80...');







