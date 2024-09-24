const tab = [
 
    {
        id:"point1",
        image:"images/marine.jpg",
        nom:"Lamour",
        prenom:"Marine",
        ville:"Boulogne sur Mer",
        lien_github:"https://github.com/LamourMarine",
        lien_linkedin:"https://www.linkedin.com/in/marine-lamour-8a1747278/",
        hobbies:["Randonnée", "lecture"],
        stacks:["Html","Css"]
    },
    {
        id:"point2",
        image:"images/aledorian.jpg",
        nom:"Legrand",
        prenom:"Aledorian",
        ville:"Boulogne sur Mer",
        lien_github:"https://github.com/aledorian",
        lien_linkedin:"https://www.linkedin.com/in/aledorian-legrand/",
        hobbies:["Jeux vidéo", "Arts"],
        stacks:["Html","Css","Js","Php"]
    },
    {
        id:"point3",
        image:"images/florent.webp",
        nom:"Bourtin",
        prenom:"Florent",
        ville:"Calais",
        lien_github:"https://github.com/Florent-Broutin",
        lien_linkedin:"https://www.linkedin.com/in/florent-broutin-40b651271/",
        hobbies:["Jeux vidéo", "Informatique"],
        stacks:["Html","Css","Js"]
    },
    {
        id:"point4",
        image:"images/térence.webp",
        nom:"Creteur",
        prenom:"Térence",
        ville:"Boulogne sur mer",
        lien_github:"https://github.com/Lembont?",
        lien_linkedin:"https://www.linkedin.com/in/t%C3%A9rence-cr%C3%A9teur-00aaa81b0/",
        hobbies:["Ecriture", "musique"],
        stacks:["Html","Css","Js","C#"]
    },
    {
        id:"point5",
        image:"images/julie.png",
        nom:"Charles",
        prenom:"Julie",
        ville:"Saint Martin Boulogne",
        lien_github:"https://github.com/Julie-Charles16",
        lien_linkedin:"https://www.linkedin.com/in/julie-c-92207a294/",
        hobbies:["Films", "Séries", "Esthétique"],
        stacks:["Html","Css"]
    },
    {
        id:"point6",
        image:"images/maxence.webp",
        nom:"Hermant",
        prenom:"Maxence",
        ville:"Saint Omer",
        lien_github:"https://github.com/max-devv",
        lien_linkedin:"https://www.linkedin.com/in/maxence-hermant-601583328/",
        hobbies:["MMA", "Jeux vidéo"],
        stacks:["Html","Css","Js","Lua","Php","Mysql","Node.js"]
    },
    {
        id:"point7",
        image:"images/yohann.jfif",
        nom:"Vanherzecke",
        prenom:"Yohann",
        ville:"Calais",
        lien_github:"https://github.com/bannik62",
        lien_linkedin:"https://www.linkedin.com/in/vanherzecke-yohann-a49587177/",
        hobbies:["Informatique", "Vélo", "promenade"],
        stacks:["Html","Css","Js"]
    },
    {
        id:"point8",
        image:"images/grégoire.webp",
        nom:"Dupont",
        prenom:"Grégoire",
        ville:"Condette",
        lien_github:"https://github.com/RetroGreg",
        lien_linkedin:"https://www.linkedin.com/in/gr%C3%A9goire-dupont-801355328/",
        hobbies:["Informatique", "Jeux vidéo", "Arts créatifs"],
        stacks:["Html","Css","Js","C#"]
    },
    {
        id:"point9",
        image:"images/perrine.jpeg",
        nom:"Eeckman",
        prenom:"Perrine",
        ville:"Boulogne sur mer",
        lien_github:"?",
        lien_linkedin:"?",
        hobbies:["Cause animale", "Environnement"],
        stacks:["Html","Css"]
    },    
    {
        id:"point10",
        image:"images/maryline.webp",
        nom:"Lesaffre",
        prenom:"Maryline",
        ville:"Le Portel",
        lien_github:"https://github.com/Marylinelesaffre",
        lien_linkedin:"https://www.linkedin.com/in/maryline-lesaffre/",
        hobbies:["Dessin", "Jeux vidéo"],
        stacks:["Html","Css"]

    },
    {
        id:"point11",
        image:"images/philippe.webp",
        nom:"Bourgeois",
        prenom:"Philippe",
        ville:"Boulogne sur mer",
        lien_github:"https://github.com/Pbourgeois62",
        lien_linkedyn:"https://www.linkedin.com/in/philippe-bourgeois-76662723b/",
        hobbies:["Randonnée", "Musique"],
        stacks:["Html","Css","Mysql","Symfony"]
    },
    {
        id:"point12",
        image:"images/sacha.jpg",
        nom:"Dierman",
        prenom:"Sacha",
        ville:"Audresselles",
        lien_github:"https://github.com/Pbourgeois62",
        lien_linkedyn:"https://www.linkedin.com/in/philippe-bourgeois-76662723b/",
        hobbies:["Techno - Hard musique", "Sport"],
        stacks:["Html","Css"]
    },   
    {
        id:"point13",
        image:"images/nicolas.jpeg",
        nom:"Herbez",
        prenom:"Nicolas",
        ville:"Samer",
        lien_github:"https://github.com/nicolas-herbez",
        lien_linkedyn:"https://www.linkedin.com/search/results/all/?keywords=nicolas%20herbez&origin=GLOBAL_SEARCH_HEADER&sid=%40YJ",
        hobbies:["Apprenants","Coder","Famille"],
        stacks:["Symfony","Angular","Docker"]
    },
    {
        id:"point14",
        image:"images/remy.jpeg",
        nom:"Cottrez",
        prenom:"Rémy",
        ville:"Arques",
        lien_github:"https://github.com/RemyCTRZ",
        lien_linkedyn:"https://www.linkedin.com/in/remyco/",
        hobbies:["Jeux vidéo","Cinéma","Séries","Coder"],
        stacks:["NextJS","NodeJS","React","MysSQL","PostgreSQL","MongoDB","Swagger"]
    },
    {
        id:"point15",
        image:"images/laurie.jpg",
        nom:"Barsby",
        prenom:"Laurie",
        ville:"Calais",
        lien_github:"Non renseigné",
        lien_linkedyn:"https://www.linkedin.com/in/barsby-laurie-62100/",
        hobbies:["Cuisine","photographie"],
        stacks:["Non renseigné"]
    }
];

    document.querySelectorAll('.points').forEach(point => {
    point.addEventListener('click', function() {
      console.log(point.id);      
      const personne = tab.find(p => p.id === point.id);
      console.log(personne);
      
      
      if(personne) {
        document.getElementById('card-nom').textContent = `${personne.nom} ${personne.prenom}`;
        document.getElementById('card-ville').textContent = personne.ville;
        personne.hobbies.forEach(function(hobby) {
            document.getElementById('card-hobbies').textContent += hobby + ' ';
        });
        personne.stacks.forEach(function(stack) {
            document.getElementById('card-stacks').textContent += stack + ' ';
        });
        document.getElementById('card-image').setAttribute('src', personne.image);        
      }
    });
  });
    // const pin = document.getElementById('pin-philippe');
    // const aside = document.getElementById('aside');
    // pin.addEventListener('click', () => {
    //     aside.style.display = aside.style.display === 'none' || aside.style.display === '' ? 'flex' : 'none';
    // });

