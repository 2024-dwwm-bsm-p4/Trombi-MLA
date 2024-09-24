
fetch('personnes.json')
.then(response => response.json()) 
.then(tab => {
    document.querySelectorAll('.points').forEach(point => {
    point.addEventListener('click', function() {
      console.log(point.id);      
      const personne = tab.find(p => p.id === point.id);
      console.log(personne);      
      
      if(personne) {
        document.getElementById('card-nom').textContent = `${personne.nom} ${personne.prenom}`;
        document.getElementById('card-ville').textContent = personne.ville;
        document.getElementById('card-hobbies').textContent = '';  
          document.getElementById('card-stacks').textContent = '';   
        // personne.hobbies.forEach(function(hobby) {
            document.getElementById('card-hobbies').textContent  = personne.hobbies.join(', ');
        // });
        // personne.stacks.forEach(function(stack) {
            document.getElementById('card-stacks').textContent = personne.stacks.join(', ');
        // });
        document.getElementById('card-image').setAttribute('src', personne.image);
        document.getElementById('aside').style.display = 'flex';        
      }
    });
  });
})
.catch(error => console.error('Erreur lors du chargement des données JSON :', error));  
