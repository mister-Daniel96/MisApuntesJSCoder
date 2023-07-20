//Tarea 01
for (let i = 0; i < 10; i++) {
  console.log("¡¡Oh no, entré en un bucleeee!!");
}
//Tarea02
let i = 20;
while (i <= 50) {
  console.log(i);
  i++;
}
//Tarea03
//estoy mostrando todas las letras
let string = "Estoy estudiando en CoderHouse";
for (let i = 0; i < string.length; i++) {
  console.log(string.charAt(i));
}

//Tarea04
let acumulador = 0;
for (let i = 10; i <= 100; i++) {
  acumulador += i;
}
console.log(acumulador);
//Tarea05
acumulador = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    acumulador += i;
  }
}
console.log(acumulador);
//Tarea06
string = "Juan";
acumulador = 0;
string=string.toLowerCase();
for (let i = 0; i < string.length; i++) {
  if (
    string.charAt(i) === "a" ||
    string.charAt(i) === "e" ||
    string.charAt(i) === "i" ||
    string.charAt(i) === "o" ||
    string.charAt(i) === "u"
  ) {
    acumulador++;
  }
}
console.log(string);
console.log(acumulador);
