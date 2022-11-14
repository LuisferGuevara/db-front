const personajes$$ = document.querySelector('.personajes');
const select$$ = document.querySelector('.select');
const button$$ = document.querySelector('button')
const peticion = () => {
      fetch("http://localhost:3000/characters/getbyname/" + select$$.value)
        .then((res) => res.json())
        .then((characters) => renderCharacters(characters));
  };

const getAllCharacters = () => {
  fetch("http://localhost:3000/characters")
    .then((res) => res.json())
    .then((characters) => fillSelect(characters));
};

const fillSelect = (characters) => {
  for (const character of characters) {
    
    const option$$ = document.createElement('option');

    option$$.value = character.name;
    option$$.textContent=character.name
    
    select$$.appendChild(option$$);
    
  }
};
button$$.addEventListener('click', peticion)

getAllCharacters()



  const renderCharacters = (character) =>{

        personajes$$.innerHTML = '';
        const personaje$$ = document.createElement('div');
        const name$$ = document.createElement('h3');
        const img$$ = document.createElement('img');

        personaje$$.classList.add('personaje')
        name$$.textContent = character.name;
        img$$.src= character.img;
        
    
        personaje$$.appendChild(name$$);
        personaje$$.appendChild(img$$);
        personajes$$.appendChild(personaje$$)

  }
  


// peticion();