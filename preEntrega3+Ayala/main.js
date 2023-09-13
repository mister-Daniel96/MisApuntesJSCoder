const container = document.querySelector("#productos-container");

/**
 * 
 * @param {*} lista es el arreglo de los objetos a cargar dentro de las cards
 * Por otro lado esta funcion permitira cargar las cards en el contenedor 
 */
const generarTarjetas = (lista) => {
  const string = productos.reduce((acc, item) => {
    /*  id="${item.id}" */
    return (acc += ` <div class="item" >
<img src="${item.imagen || "./img/sinStock.jpg"}" alt="" >
<div class="item-info">
    <h4>${item.producto}</h4>
    <p>${item.descripcion || "Sin descripcion "}</p>
    <div>
        <span>$${item.precio}</span>
        <span>${item.marca}</span>
    </div>
</div>
<button class="btn-comprar"  id="${item.id}">Agregar al carrito</button>
</div>`);
  }, "");

  container.innerHTML = string;
};
/**
 * Esta funcion permite recuperar los archivos del Storage para continuar con la compra, sino
 * volveremos a cargar un producto y este se sobreEscribe y borra todo lo anterior
 */
function recuperarCompras() {
  const aux = JSON.parse(localStorage.getItem("carrito"));

  if (aux != null) {
   // carrito.splice(0, carrito.length);
    carrito.push(...aux);
    carritoCont.textContent=carrito.length;
  }else carritoCont.textContent="0";
}
generarTarjetas(productos);
const carrito = [];
const btnComprar = document.querySelectorAll(".btn-comprar");
let carritoCont=document.querySelector('.carrito-cont');

recuperarCompras();
/**
 * por cada click en el boton se agrega el producto al carrito, luego este se guarda en el localStorage
 */
btnComprar.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    /* {...productos.find((item)=>item.id==e.currentTarget.id)} */
    //lo que hago es agregar al carrito las copias del producto seleccionado

    carrito.push({
      ...productos.find((item) => item.id == e.currentTarget.id),
    });
    carritoCont.textContent=carrito.length;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
  });
});
