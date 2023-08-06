class Producto {
  constructor(nombre, precio, cantidad, categoria, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.categoria = categoria;
    this.id = id;
  }
  verData() {
    console.log(`${this.nombre} es ${this.precio}`);
  }
}

const productos = [];
const carrito = [];
const returnOpcion = () => {
  let opcion = null;
  do {
    opcion = prompt("Desea crear un producto");
    if (opcion !== "no" && opcion !== "si")
      alert("ingrese una respuesta correcta si o no");
  } while (opcion !== "no" && opcion !== "si");
  return opcion;
};

const llenarInventario = () => {
  let opcionElegida;
  do {
    opcionElegida = returnOpcion();

    if (opcionElegida === "no") return;
    let nombre = prompt("ingrese  el nombre");
    let precio = prompt("Ingrese el precio del producto");
    let cantidad = prompt("Ingrese el numero de unidades");
    let categoria = prompt("Ingrese la categoria");
    let id = prompt("ingrese el id del producto");
    productos.push(new Producto(nombre, precio, cantidad, categoria, id));
  } while (opcionElegida === "si" && productos.length < 5);

  productos.sort((a, b) => {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  });
};

const procesoCompra = () => {
  let opcion;
  if (productos.length > 0) {
    do {
      let productorGuardados = "";
      productos.forEach(
        (item) => (productorGuardados += ` ${item.id}: ${item.nombre}  \n`)
      );

      let productoElegido;
      let band;
      do {
        productoElegido = prompt(`${productorGuardados} Que quiere comprar?`);
        band = productos.some((item) => item.nombre === productoElegido);
      } while (band === false);

      let productoEncontrado = productos.find(
        (item) => item.nombre === productoElegido
      );
      carrito.push(productoEncontrado);
      
      alert(
        `El producto ya esta preparado para ir a su domicilio con un precio de ${productoEncontrado.precio} \n ¡¡Muchas gracias por su compra!!`
      );
      do {
        opcion = prompt("Desea continuar con su compra??");
        if (opcion != "si" && opcion != "no")
          alert("ingrese una respuesta correcta si o no");
      } while (opcion !== "no" && opcion !== "si");

    } while (opcion === "si");
    
  } else alert("Vuelva pronto. ¡¡Gracias!!");
  
};
llenarInventario();
procesoCompra();
console.log(carrito);

