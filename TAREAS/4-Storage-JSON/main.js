// **Nivel Básico - Datos Clave/Valor:**
//Ejercicio 01
/*
const buttonModoOscuro = document.querySelector(".buttonModoOscuro");
const cuerpo = document.body;

const validar = () => {
  if (localStorage.getItem("modoOscuro") === "true") {
    cuerpo.classList.add("dark");
  } else {
    cuerpo.classList.remove("dark");
  }
};

const cargarLocalStorage = (clave, valor) => localStorage.setItem(clave, valor);
validar();

buttonModoOscuro.addEventListener("click", () => {
  cuerpo.classList.toggle("dark");
  if (localStorage.length > 0) {
    if (cuerpo.classList.contains("dark")) {
      cargarLocalStorage("modoOscuro", "true");
    } else cargarLocalStorage("modoOscuro", "false");
  }
});

//Ejercicio 02

const form = document.querySelector("#form");

const validarSession = () => {
  if (sessionStorage.getItem("inicioSesion", "true")) {
    alert("Buenvenido ya esta logeado");
  }
};
validarSession();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //capturar los valores aqui dentro es una mejor opcion
  const usuario = document.querySelector("#usuario").value.trim();
  const contra = document.querySelector("#contra").value.trim();

  if (usuario !== "" && contra !== "") {
    sessionStorage.setItem("inicioSesion", "true");
  } else sessionStorage.setItem("inicioSesion", "false");

  form.reset();
});
*/

//Nivel Intermedio -- Datos   Objeto/Array

const listaTareas = [];
class Tarea {
  constructor(id, tarea) {
    this.id = id;
    this.tarea = tarea;
  }
}

let cont = 0;
const frm = document.querySelector(".frmTarea");
const containerListaTarea = document.querySelector(".listaTareas");

function cargarLista(lista) {
  const string = lista.reduce((acc, item) => {
    return (acc += `<li>${item.id}: ${item.tarea}</li>`);
  }, "<h4>Tareas a realizar</h4>");
  containerListaTarea.innerHTML = string;
}

/*
 *pusheamos un objeto al arreglo
 *lo cargo al localStorage
 * pero cuando cierre el navegador el arreglo estara vacio entonces debo arreglar esto
 */
function rellenarArregloInicio() {
  const aux = JSON.parse(localStorage.getItem("carrito"));

  if (aux != null) {
    listaTareas.splice(0, listaTareas.length);
    listaTareas.push(...aux);
    cargarLista(listaTareas);
    cont = listaTareas[listaTareas.length - 1].id;
  }
}
rellenarArregloInicio();

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = document.querySelector("#tarea").value;
  cont++;
  listaTareas.push(new Tarea(cont, texto));
  localStorage.setItem("carrito", JSON.stringify(listaTareas));
  cargarLista(listaTareas);
  /*  localStorage.setItem("carrito", JSON.stringify(listaTareas));
  cargarLista(JSON.parse(localStorage.getItem('carrito'))); */
  //cada vez que se actualiza el arreglo, se cambia y se pone la ultima version ====  actualiza el localStorage
  console.log(listaTareas);
  frm.reset();
});
