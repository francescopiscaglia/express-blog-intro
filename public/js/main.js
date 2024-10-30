// seleziono gli elementi dalla DOM
const ulEl = document.querySelector(".container > ul");

fetch("http://127.0.0.1:3001/posts")
    .then(response => response.json())
    .then(data => {
        
        // mi salvo l'array di posts
        const posts = data.data;

        // ciclo dentro l'array
        posts.forEach(post => {

            const { title, img, content, tags } = post;
            
        });
        

        
        
    })
    .catch(error => console.error(error));