const personajes$$ = document.querySelector('.personajes');


const peticion = () => {
 personajes$$.innerHTML = "";
  
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((characters) => renderCharacters(characters));
};

  const renderCharacters = (characters) =>{

    console.log(characters);
    
    for (const character of characters) {
      
      console.log(character);
        const universe$$ =document.createElement('p')
        const personaje$$ = document.createElement('div');
        const name$$ = document.createElement('h3');
        const img$$ = document.createElement('img');
        const button$$ = document.createElement('button');

        if(character.universe === undefined){
          character.universe = "Unknown";
        }
        universe$$.textContent = `Universe: ${character.universe}` ;
        universe$$.style = "font-weight:bold;"
        personaje$$.classList.add('personaje')
        name$$.textContent = character.name;
        img$$.src= character.img;
        button$$.textContent = "Eliminar"
        
    
        personaje$$.appendChild(name$$);
        personaje$$.appendChild(img$$);
        console.log(universe$$.textContent);

          personaje$$.appendChild(universe$$)

        personajes$$.appendChild(personaje$$)
        personaje$$.appendChild(button$$)

        button$$.addEventListener("click", () => deleteCharacter(character._id, personaje$$));
    }
  }
  
  const deleteCharacter = async (character, deletedDiv) => {
    try {
      await fetch("http://localhost:3000/characters/delete/" + character, {
        method: "DELETE",
      });
      // window.location.replace('./index.html')
      console.log("Todo ha ido bien, personaje eliminado");
    } catch (error) {
      console.log("No puedes eliminar el personaje");
    }

    deletedDiv.classList.add('hide')
  }


peticion();