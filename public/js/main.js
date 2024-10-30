// seleziono gli elementi dalla DOM
const ulEl = document.querySelector(".container > ul");

fetch("http://127.0.0.1:3001/posts")
    .then(response => response.json())
    .then(data => {
        
        // mi salvo l'array di posts
        const posts = data.data;

        let gallery = "";

        // ciclo dentro l'array
        posts.forEach(post => {

            // destrotturo per poter accedere ad ogni chiave
            const { title, img, content, tags } = post;
        
            // mi creo il markup
            const markup = `
                <li>
                    <img src="${img}" alt="">
                    <h3>${title}</h3>
                    <p>${content}</p>
                    <a href="#">${tags}</a>
                </li>
            `;

            // aggiungo il markup alla variabile ad ogni iterazione
            gallery += markup;
        });

        // aggiorno la DOM
        ulEl.innerHTML = gallery;
    })
    .catch(error => console.error(error));