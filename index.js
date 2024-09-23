// fetch('membres.json').then( respone => Response.json()).then(data => {
//     data.forEach (a => {
//         var 
//     })
// })

const data = [
    {id: 1, nom: "...", prenom: "...",adress: "123 rue...", github: "lien", Linkedin: "lien", stacks: ""}
];
//Compléter avec toutes les informations//

const svg = document.querySelector('svg');
const infoBox = document.getElementById('info');

data.map (person => {
    const circle= document.createElementNS("http://www.w3.org/2000/svg","circle");
    circle.setAttribute("cx", person.position.x); // Position x
    circle.setAttribute("cy", person.position.y); // Position y
    circle.setAttribute("r", 8); // Rayon
    circle.setAttribute("class", "marker");
    circle.setAttribute("data-id", person.id); // Stocker l'ID de la personne

    circle.addEventListener('click', (event) => {
        showPersonInfo(person);
      });

    svg.appendChild(circle);
});






