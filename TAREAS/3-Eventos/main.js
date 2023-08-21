// TAREA 01

const button = document.querySelector(".button");
const container = document.querySelector(".container");

const generarColor = () => {
  const colores = ["red", "yellow", "blue", "green", "black"];
  const number = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  return colores[number];
};
button.addEventListener("click", () => {
  container.style.backgroundColor = generarColor();
  console.log("hola");
});

// TAREA 02

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value.toLowerCase().trim();
  const apellido = document.querySelector("#apellido").value.toLowerCase().trim();
  const numero = document.querySelector("#numero").value.toLowerCase().trim();
  const mensaje = document.querySelector("#mensaje").value.toLowerCase().trim();
  let error = "";
  if (nombre === "") error += "Ingrese el nombre\n";
  if (apellido === "") error += "Ingrese el apellido\n";
  if (numero === "") error += "Ingrese un numero\n";
  if (mensaje === "") error += "Ingrese un mensaje\n";

  if (error === "") {
    console.log(nombre);
    console.log(apellido);
    console.log(numero);
    console.log(mensaje);
    alert(`Nos pondremos en contacto contigo ${nombre}`);
  } else alert(error);

  form.reset();
});


// TAREA 03

const caja=document.querySelector('.container2')

const buttonRojo=document.querySelector('.buttonRojo');
const buttonVerde=document.querySelector('.buttonVerde');
const buttonAmarillo=document.querySelector('.buttonAmarillo');

buttonRojo.addEventListener('click',()=>{
caja.style.backgroundColor='red'
})
buttonVerde.addEventListener('click',()=>{
caja.style.backgroundColor='green'
})
buttonAmarillo.addEventListener('click',()=>{
caja.style.backgroundColor='yellow'
})

