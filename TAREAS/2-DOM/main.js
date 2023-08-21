//   Tarea numero 1

const parrafo = document.querySelector(".parrafo1");
parrafo.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, odio!";

parrafo.style.textAlign = "center";
parrafo.style.fontSize = "18px";
parrafo.style.fontWeight = "bold";

//   Tarea numero 2
const miFormulario = document.querySelector("#frm");

const nombre = document.querySelector("#nombreU");
const apellido = document.querySelector("#apellidoU");
const telefono = document.querySelector("#telefonoU");
const submitDatos = document.querySelector("#datosU");

miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let error = "";
  //cada vez que se hace un "submit" en el formulario se ejecuta todo
  if (nombre.value === "") error += "no ingreso el nombre, ";
  if (apellido.value === "") error += "no ingreso el apellido, ";
  if (telefono.value === "") error += "no ingreso el numero";

  if (error === "") {
    console.log(nombre.value.trim());
    console.log(apellido.value.trim());
    console.log(telefono.value.trim());
  } else console.log(error);
});
//   Tarea numero 3

let div = document.querySelector(".container");

 const misPokemones=pokemon.slice(2,7);
 
let template = misPokemones.reduce((string, item) => {
  return (string += `<div>
  <img src="${item.img}" alt="">
  <h4>${item.name}</h4>
</div>`);
}, "");
div.innerHTML = template;
