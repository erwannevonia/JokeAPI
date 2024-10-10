//Défintion de l'URL à appeler
const URL =
  "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";

const getBouton = document.getElementById("Bouton");
getBouton.addEventListener('click', async () => {
  try{

    //Lancement de l'appel
    fetch(URL)
      .then(function (response) {
        //Debug de la réponse et affichage dans la console
        // console.log(response);
    
        //Renvoi de la transformation de la réponse en JSON
        return response.json();
      })
    
      .then((data) => {
        console.log(data.results);
        const tableBody = document.getElementById("Tableau");
    
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = data.setup;
        row.insertCell(1).textContent = data.delivery;
      })
  }
  catch{
    console.log("Erreur");
  }
});