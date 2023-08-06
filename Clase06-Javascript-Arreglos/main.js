//==========   E J E R C I C I O   01
const obtenerNumeroMenor = (lista) => {
  let numeroMenor = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] < numeroMenor) {
      numeroMenor = lista[i];
    }
  }
  //lista.sort((a, b) => a - b);
  return numeroMenor;
};
let numeros = [20, 3095, 43, 6545, 12, 54, 78];
console.log(obtenerNumeroMenor(numeros));

//==========   E J E R C I C I O   02

const sumarNumeros = (array) => {
  let suma = 0;
  for (item of array) {
    suma += item;
  }
  return suma;
};
console.log(sumarNumeros([5, 7, 10, 12, 24]));

//==========   E J E R C I C I O   03

const contiene = (numero, numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) return true;
  }
  return false;
};
/* si uso un else return false, se va a cortar
en el primer elemento que no cumpla y no va a recorrer el resto por ello esto va antes de cerrar la funcion*/
console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]));
console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]));

//==========   E J E R C I C I O   04
//  Este es un caso unico e interesante
const invertirCaso = (palabra) => {
  let string = "";
  for (let i = 0; i < palabra.length; i++) {
    let actual = palabra[i];

    if (actual === actual.toUpperCase()) {
      string += actual.toLowerCase();
    } else {
      string += actual.toUpperCase();
    }
  }
  return string;
};
console.log(invertirCaso("Ada Lovelace")); // 'aDA lOVELACE'
console.log(invertirCaso("feliz cumple")); // 'FELIZ CUMPLE'
console.log(invertirCaso("jAvAsCrIpT")); //'JaVaScRiPt'

//==========   E J E R C I C I O   05

const separar = (perrosYGatos) => {
  let string1 = "";
  let string2 = "";
  let actual = perrosYGatos[0];
  for (let i = 0; i < perrosYGatos.length; i++) {
    if (actual === perrosYGatos[i]) {
      string1 += perrosYGatos[i];
    } else string2 += perrosYGatos[i];
  }
  return string1.concat(string2);
};
console.log(separar(`🐶🐱🐶🐱🐱🐶🐶`));

const separar2 = (lista) => {
  let aux = 0;
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length - 1; j++) {
      if (lista[j] < lista[j + 1]) {
        aux = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = aux;
      }
    }
  }
  console.log(lista);
};
let variable = [8, 8, 8, 6, 5, 9, 9];
separar2(variable);

//==========   E J E R C I C I O   05

const multiplicar = (multiplicador, numeros) => {
  let auxArray = [];
  for (let i = 0; i < numeros.length; i++) {
    auxArray[i] = numeros[i] * multiplicador;
  }
  return auxArray;
};

console.log('================');
console.log(multiplicar(2, [5, 7, 15, 22, 40]) )
console.log(multiplicar(10, [2, 5, 77]) )
/*el caso de abajo no modifica a la variable porque, 
nos retorna un nuevo arreglo con un nuevo valor,
en ningun momento igualamos los arreglos*/
console.log('*****************')
const nuevo=[5, 7, 15, 22, 40,15];
console.log(multiplicar(2,nuevo));
console.log(nuevo);
