//Ejercicio 01
console.log(mockdata);
//Eejercicio 02
mockdata.forEach((item) => {
  /* Es la mejor forma que pude encontrar para no escribir muchos console.log */
  for (const key in item) {
    console.log(`${key}: ${item[key]}`);
  }

});
//Ejercicio n03
