//recogiendo inputs
const name$$ = document.querySelector(".name");
const race$$ = document.querySelector(".race");
const img$$ = document.querySelector(".img");
const universe$$ = document.querySelector(".universe");
const transform$$ = document.querySelector(".transform");
const genre$$ = document.querySelector(".genre");
// recojo el botón
const button$$ = document.querySelector(".enviar--form");

const postear = async () => {
  const datosUsuario = {
    name: name$$.value,
    raza: race$$.value,
    img: img$$.value,
    universe: universe$$.value,
    transform: transform$$.checked,
    genre: genre$$.value,
  };
  console.log(datosUsuario);
  try {
    await fetch("http://localhost:3000/characters/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario)
    });
    // window.location.replace('./index.html')
    console.log("Todo ha ido bien, personaje creado");
  } catch (error) {
    console.log("No puedes publicar el personaje");
  }
};

button$$.addEventListener("click", postear);
