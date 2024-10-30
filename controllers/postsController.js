// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

const posts = require("../data/posts.js");

function index(req, res) {

    res.json({
        data: posts,
        count: posts.length
    });
};

module.exports = index;