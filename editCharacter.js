const personajes$$ = document.querySelector(".personajes");
const select$$ = document.querySelector(".select");
const selectButton$$ = document.querySelector(".select--button");
const form$$ = document.querySelector(".form--box");
const sendButton$$ = document.querySelector('.enviar--form');

const peticion = () => {
  fetch("http://localhost:3000/characters/getbyname/" + select$$.value)
    .then((res) => res.json())
    .then((characters) => getCharacter(characters));
    form$$.classList.remove("hide");
};
let characterInfo$$  = [];
const name$$ = document.querySelector(".name");
const race$$ = document.querySelector(".race");
const img$$ = document.querySelector(".img");
const universe$$ = document.querySelector(".universe");
const transform$$ = document.querySelector(".transform");
const genre$$ = document.querySelector(".genre");

const getAllCharacters = () => {
  fetch("http://localhost:3000/characters")
    .then((res) => res.json())
    .then((characters) => fillSelect(characters));
};

const fillSelect = (characters) => {
  for (const character of characters) {
    const option$$ = document.createElement("option");

    option$$.value = character.name;
    option$$.textContent = character.name;

    select$$.appendChild(option$$);
  }
};
selectButton$$.addEventListener("click", peticion);

getAllCharacters();

const getCharacter = (character) => {
  // const name$$ = document.querySelector(".name");
  // const race$$ = document.querySelector(".race");
  // const img$$ = document.querySelector(".img");
  // const universe$$ = document.querySelector(".universe");
  // const transform$$ = document.querySelector(".transform");
  // const genre$$ = document.querySelector(".genre");

  name$$.value = character.name;
  race$$.value = character.raza;
  universe$$.value = character.universe;
  img$$.value = character.img;
  genre$$.value = character.genre;
  transform$$.value = character.transform;
  characterInfo$$ = character

  
};


const edit = async () => {

  characterInfo$$.name = name$$.value;
  characterInfo$$.raza = race$$.value
  characterInfo$$.img = img$$.value
  characterInfo$$.universe = universe$$.value;
  characterInfo$$.transform = transform$$.value;
  characterInfo$$.genre = genre$$.value;
  const datosUsuario = {
    name: characterInfo$$.name,
    raza: characterInfo$$.raza,
    img: characterInfo$$.img,
    universe: characterInfo$$.universe,
    transform: characterInfo$$.transform,
    genre: characterInfo$$.genre,
  };
  try {
    await fetch("http://localhost:3000/characters/edit/" + characterInfo$$._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario)
    });
    // window.location.replace('./index.html')
    console.log("Todo ha ido bien, personaje editado");
  } catch (error) {
    console.log("No puedes publicar el personaje");
  }
};

sendButton$$.addEventListener("click", edit);

// //recogiendo inputs
// const name$$ = document.querySelector(".name");
// const race$$ = document.querySelector(".race");
// const img$$ = document.querySelector(".img");
// const universe$$ = document.querySelector(".universe");
// const transform$$ = document.querySelector(".transform");
// const genre$$ = document.querySelector(".genre");
// // recojo el botón
// const button$$ = document.querySelector(".enviar--form");

// const editar = async () => {
//   const datosUsuario = {
//     name: name$$.value,
//     universe: universe$$.value,
//     raza: race$$.value,
//     transform: true,
//     genre: genre$$.value,
//   };
//   try {
//     await fetch("http://localhost:3000/characters/edit", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(datosUsuario)
//     });
//     window.location.replace('./index.html')
//     console.log("Todo ha ido bien, personaje creado");
//   } catch (error) {
//     console.log("No puedes publicar el personaje");
//   }
// };

// button$$.addEventListener("click", editar);
