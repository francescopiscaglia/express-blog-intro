/*

Esercizio

Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare nel browser.

*/


// Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
const express = require("express");
const app = express();
const host = "http://127.0.0.1";
const port = 3001;


// start the server
app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
});

app.get("/", (req, res) => {
    res.type("html")
        .send("<h1>Benvenuto nel mio blog!</h1>");
});
