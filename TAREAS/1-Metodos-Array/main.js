//Actividad numero 1-crear
const productos = [
  {
    id: 1,
    producto: "gaseosa",
    categoria: "bebida",
    precio: 12,
    cantidad: 10,
    envioGratis: false,
    colores: ["red", "blue", "purple"],
  },
  {
    id: 2,
    producto: "galleta",
    categoria: "piqueos",
    precio: 10,
    cantidad: 15,
    envioGratis: true,
    colores: ["red", "black", "green"],
  },
  {
    id: 3,
    producto: "chicle",
    categoria: "golosina",
    precio: 1.9,
    cantidad: 110,
    envioGratis: false,
    colores: ["yellow", "blue", "green", "blue"],
  },
  {
    id: 4,
    producto: "amoxisicilina",
    categoria: "golosina",
    precio: 1.95,
    cantidad: 10,
    envioGratis: true,
    colores: [],
  },
  {
    id: 5,
    producto: "amoxisicilina",
    categoria: "pantalon",
    precio: 1.95,
    cantidad: 10,
    envioGratis: true,
    colores: [],
  },
];

console.log(productos);

//Actividad numero 2-mostrar info
let lista = document.querySelector(".productos-lista");
const mostrarProductos = () => {
  let div = productos.reduce((acc, item) => {
    return (acc += `<li> ${item.id}, ${item.producto}, ${item.categoria}, ${
      item.precio
    },${item.cantidad}, ${item.envioGratis}, ${item.colores.join("-")}</li>`);
  }, "");

  lista.innerHTML = div;
};
//mostrarProductos();

//Actividad numero 3  Filtrar y Mostrar por Categoria

const listaProductos = document.querySelector("#lista-productos");

const cargarCategoriasProductos = () => {
  //creamos el set
  const categoriasUnicas = new Set();
  //agregamos todas kas categrias al set y el set solo considera los unicos
  productos.forEach((item) => {
    categoriasUnicas.add(item.categoria);
  });
  //convertimos el set a un arreglo
  const arregloCategoriasUnicas = [...categoriasUnicas];
  //console.log(arregloCategoriasUnicas);

  //solo vamos a mostrar las categorias y dar un value con estas categorias
  let div = arregloCategoriasUnicas.reduce((acc, item) => {
    return (acc += `<option value="${item}">${item}</option>`);
  }, `<option value="">Seleccione una opcion</option>`);

  listaProductos.innerHTML = div;
};

const mostrarProductosPedidos = (prod) => {
  let div = prod.reduce((acc, item) => {
    return (acc += `<li> ${item.id}, ${item.producto}, ${item.categoria}, ${
      item.precio
    },${item.cantidad}, ${item.envioGratis}, ${item.colores.join("-")}</li>`);
  }, "");
  lista.innerHTML = div;
};
const filtrarCategoria = (categoria) => {
  let productosFiltrados = productos;
  //si categoria es diferende a undefined hace esto sino muestra todos
  if (categoria) {
    productosFiltrados = productos.filter(
      (item) => item.categoria === categoria
    );
  }
  mostrarProductosPedidos(productosFiltrados);
};

cargarCategoriasProductos();
filtrarCategoria();//lamamos para que en el inicio nos muestre todo
// llamamos al select que contiene las opciones, ya que el select va a tener el valor de la opcion elegida
const listaElegido = document.querySelector("#lista-productos");
//cada vez que se seleccione uno se hara esto
listaElegido.addEventListener("change", (e) => {
  //guardamos el valor se la opcion seleccionada
  const categoriaSeleccionada = e.target.value;

  if (categoriaSeleccionada === "") {
    filtrarCategoria();
  } else {
    // Filtrar productos según la categoría seleccionada

    filtrarCategoria(categoriaSeleccionada);
  }
});

//Actividad numero 4

const calcularTotal = () => {
  const precioTotal = productos.reduce((acc, item) => {
    return (acc += item.precio * item.cantidad);
  }, 0);

  return precioTotal;
};
const dataPrecioTotal = document.querySelector(".precioTotal");
dataPrecioTotal.innerHTML = `El precio total de la compra es: ${calcularTotal()}`;

//Actividad numero 5

function actualizarProducto(
  item,
  id,
  producto,
  categoria,
  precio,
  cantidad,
  envioGratis,
  colores
) {
  item.id = id;
  item.producto = producto;
  item.categoria = categoria;
  item.precio = precio;
  item.cantidad = cantidad;
  item.envioGratis = envioGratis;
  item.colores = colores;
  /* item.colores=[];
  item.colores.push(colores); */
  console.log(item.colores);
  filtrarCategoria();
}

const submit = document.querySelector("#EnviarFormulario");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let id = document.querySelector("#id").value;
  let producto = document.querySelector("#producto").value;
  let categoria = document.querySelector("#categoria").value;
  let precio = document.querySelector("#precio").value;
  let cantidad = document.querySelector("#cantidad").value;
  let envioGratis = document.querySelector("#envioGratis").value;
  let colores = document.querySelector("#colores").value;

  if (productos.some((item) => item.id == id)) {
    let elemento = productos.find((item) => item.id == id);
    actualizarProducto(
      elemento,
      id,
      producto,
      categoria,
      precio,
      cantidad,
      envioGratis,
      colores.split(", ")
    );
  } else alert("No hay ningun producto con ese Id");
});

//si uso el filter y find me retornan los elementos que cumplen la condicion pero tambien me retorna la direccion de memoria

//Actividad numero 6
//---- --> busqeueda por palabra clave, es decir por producto

const buscar = document.querySelector("#busquedaClave");

buscar.addEventListener("input", (e) => {
  e.preventDefault();
  let div = productos
    .filter((item) => item.producto.startsWith(buscar.value))
    .reduce((acc, item) => {
      return (acc += `<li> ${item.id}, ${item.producto}, ${item.categoria}, ${
        item.precio
      },${item.cantidad}, ${item.envioGratis}, ${item.colores.join("-")}</li>`);
    }, "");
  lista.innerHTML = div;
});

//Actividad numero 7

const colores = document.querySelector(".colores");

const recorrerProductos = () => {
  const arraycolores = [];
  productos.forEach((item) => {
    //si hacemos esto agrega cada elemento al arreglo
    arraycolores.push(...item.colores);
  });

  const agregarColores = arraycolores.reduce((acc, item) => {
    return acc += `<li style="background-color: ${item};"></li>`;
  }, "");

  colores.innerHTML = agregarColores;
};
recorrerProductos();
