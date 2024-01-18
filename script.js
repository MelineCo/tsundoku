//Rafraîchissement compteur
function refresh_msg_count(){
    const messagesCount = document.querySelectorAll('.singleBook').length;
    console.log(messagesCount)
    document.querySelector('#count').textContent = messagesCount;
    if(messagesCount > 0 && messagesCount < 3){
        document.querySelector("#pile").innerHTML = `
        <img id="books-on-pile" src="images/empiler.png" alt="book pile" />`
    } else if (messagesCount > 3 && messagesCount < 8){
        document.querySelector("#pile").innerHTML = `
        <img id="books-on-pile" src="images/empiler.png" alt="book pile" />
        <img id="books-on-pile2" src="images/livres.png" alt="book pile" />`
    } else if(messagesCount >= 8 && messagesCount < 15){
        document.querySelector("#pile").innerHTML = `
            <img id="books-on-pile" src="images/empiler.png" alt="book pile" />
            <img id="books-on-pile2" src="images/livres.png" alt="book pile" />
            <img id="books-on-pile3" src="images/empiler.png" alt="book pile" />`
    } else if(messagesCount >= 15) {
        document.querySelector("#pile").innerHTML = `
            <img id="books-on-pile" src="images/empiler.png" alt="book pile" />
            <img id="books-on-pile2" src="images/livres.png" alt="book pile" />
            <img id="books-on-pile3" src="images/empiler.png" alt="book pile" />
            <img id="books-on-pile4" src="images/livres-cactus.png" alt="book pile" />`
    }
};

refresh_msg_count()