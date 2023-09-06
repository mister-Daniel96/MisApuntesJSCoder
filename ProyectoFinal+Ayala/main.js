/**Variables para reaccion del HTML */

const openNav = document.querySelector(".button-open");
const closeNav=document.querySelector('.button-close');
const navbar = document.querySelector(".navbar");

const enlaces=document.querySelectorAll(".enlace")
openNav.addEventListener("click", () => {
  navbar.classList.add("active");
});
closeNav.addEventListener("click", () => {
  navbar.classList.remove("active");
});

enlaces.forEach(item=>{
  item.addEventListener("click",()=>{
    enlaces.forEach(item=>item.classList.remove("actual"))
    item.classList.add("actual");
    //es porque por cada seleccion que hagamos se cierra
    navbar.classList.remove("active");
  })
})
/*const body = document.body;
function cargarImagenes(array) {
  array.forEach((item) => {
    const image = new Image();
    image.src = `${item.image}`;
    image.onload=function () {
      body.appendChild(image);
    };
  });
}

async function showData() {
  const json = await getData();
  cargarImagenes(json);
  console.log(json);
}
function getData() {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json);

  /*   return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => res); 
}
//showData();

*/
