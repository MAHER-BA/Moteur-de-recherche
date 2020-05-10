/* cette fonction permet d'interroger le serveur web avec les deux pages webs et que celui ci renvoie la liste des résultats de la fonction recherche de l'index_inversé, sur la page B



var express = require('express');			                  /* "express" est une bibliothèque Node.js qui permet d'associer plus facilement des fonctions */
var app = express();

    app.get('/page-web-A.html', function(req, res) {
    if("donnee" in req.query) {						               /* donnee : sont la liste des résultats de la fonction recherche de l'index_inversé */

    var txt = req.query.donnee;								
    res.send(txt);
    res.sendfile(__dirname+'/page-web-B.html'); 			  /* __dirname correspond au dossier où se trouve le serveur,les pages webs et la liste des résultats de la fonction recherche de l'index_inversé */
  }
});
 
app.listen(80);												                  /* le port de notre serveur */
console.log('App listening on port 80...');
