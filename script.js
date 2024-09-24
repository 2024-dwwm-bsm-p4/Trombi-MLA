    const tab = [
 
    {
        id:1,
        nom:"Lamour",
        prenom:"Marine",
        ville:"Boulogne sur Mer",
        lien_github:"https://github.com/LamourMarine",
        lien_linkedin:"https://www.linkedin.com/in/marine-lamour-8a1747278/",
        hobbies:["Randonnée", "lecture"],
        stacks:["Html","Css"]
    },
    {
        id:2,
        nom:"Legrand",
        prenom:"Aledorian",
        ville:"Boulogne sur Mer",
        lien_github:"https://github.com/aledorian",
        lien_linkedin:"https://www.linkedin.com/in/aledorian-legrand/",
        hobbies:["Jeux vidéo", "Arts"],
        stacks:["Html","Css","Js","Php"]
    },
    {
        id:3,
        nom:"Bourtin",
        prenom:"Florent",
        ville:"Calais",
        lien_github:"https://github.com/Florent-Broutin",
        lien_linkedin:"https://www.linkedin.com/in/florent-broutin-40b651271/",
        hobbies:["Jeux vidéo", "Informatique"],
        stacks:["Html","Css","Js"]
    },
    {
        id:4,
        nom:"Creteur",
        prenom:"Térence",
        ville:"Boulogne sur mer",
        lien_github:"https://github.com/Lembont?",
        lien_linkedin:"https://www.linkedin.com/in/t%C3%A9rence-cr%C3%A9teur-00aaa81b0/",
        hobbies:["Ecriture", "musique"],
        stacks:["Html","Css","Js","C#"]
    },
    {
        id:5,
        nom:"Charles",
        prenom:"Julie",
        ville:"Saint Martin Boulogne",
        lien_github:"https://github.com/Julie-Charles16",
        lien_linkedin:"https://www.linkedin.com/in/julie-c-92207a294/",
        hobbies:["Films", "Séries", "Esthétique"],
        stacks:["Html","Css"]
    },
    {
        id:6,
        nom:"Hermant",
        prenom:"Maxence",
        ville:"Saint Omer",
        lien_github:"https://github.com/max-devv",
        lien_linkedin:"https://www.linkedin.com/in/maxence-hermant-601583328/",
        hobbies:["MMA", "Jeux vidéo"],
        stacks:["Html","Css","Js","Lua","Php","Mysql","Node.js"]
    },
    {
        id:7,
        nom:"Vanherzecke",
        prenom:"Yohann",
        ville:"Calais",
        lien_github:"https://github.com/bannik62",
        lien_linkedin:"https://www.linkedin.com/in/vanherzecke-yohann-a49587177/",
        hobbies:["Informatique", "Vélo", "promenade"],
        stacks:["Html","Css","Js"]
    },
    {
        id:8,
        nom:"Dupont",
        prenom:"Grégoire",
        ville:"Condette",
        lien_github:"https://github.com/RetroGreg",
        lien_linkedin:"https://www.linkedin.com/in/gr%C3%A9goire-dupont-801355328/",
        hobbies:["Informatique", "Jeux vidéo", "Arts créatifs"],
        stacks:["Html","Css","Js","C#"]
    },
    {
        id:9,
        nom:"Eeckman",
        prenom:"Perrine",
        ville:"Boulogne sur mer",
        lien_github:"?",
        lien_linkedin:"?",
        hobbies:["Cause animale", "Environnement"],
        stacks:["Html","Css"]
    },    
    {
        id:10,
        nom:"Lesaffre",
        prenom:"Maryline",
        ville:"Le Portel",
        lien_github:"https://github.com/Marylinelesaffre",
        lien_linkedin:"https://www.linkedin.com/in/maryline-lesaffre/",
        hobbies:["Dessin", "Jeux vidéo"],
        stacks:["Html","Css"]

    }
];
    const pin = document.querySelector('points');
    const aside = document.querySelector('aside');

    // pin.addEventListener('click', () => {
    //     aside.style.display = aside.style.display === 'none' || aside.style.display === '' ? 'flex' : 'none';
    // });


    const svg = document.querySelector('svg')
    const tab = tab.map((element.id)) => 
 