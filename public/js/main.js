// seleziono gli elementi dalla DOM
const ulEl = document.querySelector(".gallery ");

let gallery = "";

fetch("http://127.0.0.1:3001/posts")
    .then(response => response.json())
    .then(data => {

        // mi salvo l'array di posts
        const posts = data.data;

        // Invoco la funzione per generare i post in maniera dinamica
        updateDOM(posts)

        // aggiorno la DOM
        ulEl.innerHTML = gallery;
    })
.catch(error => console.error(error))


// helpers funcion

// creo una funzione per aggiornare la DOM
function updateDOM(nodelist) {
    // ciclo dentro l'array
    nodelist.forEach(post => {

        // destrotturo per poter accedere ad ogni chiave
        const { title, img, content, tags } = post;

        // // mi creo il markup invocando la
        const markup = getMarkup(img, title, content, tags);

        // aggiungo il markup alla variabile ad ogni iterazione
        gallery += markup;
    });
};

// creo una fuzione per generare il markup
function getMarkup(img, title, content, tags) {
    return `
        <!-- card -->
        <div class="card col-4">
    
            <!-- card img -->
            <img src="${img}" class="card-img-top" alt="">
    
            <!-- card body -->
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content}</p>
            </div>
    
            <!-- tags -->
            <div class="card-body">
                <a href="#" class="card-link">${tags}</a>
            </div>
        </div>
    `;
};