// seleziono gli elementi dalla DOM
const ulEl = document.querySelector(".gallery ");

let gallery = "";

fetch("http://127.0.0.1:3001/posts")
    .then(response => response.json())
    .then(data => {

        // mi salvo l'array di posts
        const posts = data.data;


        // ciclo dentro l'array
        posts.forEach(post => {

            // destrotturo per poter accedere ad ogni chiave
            const { title, img, content, tags } = post;

            // mi creo il markup
            const markup = `
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

            // aggiungo il markup alla variabile ad ogni iterazione
            gallery += markup;
        });

        // aggiorno la DOM
        ulEl.innerHTML = gallery;
    })
    .catch(error => console.error(error))

