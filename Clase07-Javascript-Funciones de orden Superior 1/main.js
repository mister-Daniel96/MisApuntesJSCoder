

const alumnos=['juan','daniel','jose','denis','alonso','kiara','pablo'];
const alumnosJalados=['jdad','dade','jose','denis','alonso','kiara','pablo'];

alumnos.push('cristian');
alumnos.unshift('primero');
const eliminado=alumnos.pop()
const eliminadop=alumnos.shift();
// alumnos.reverse();
//alumnos.sort();
alumnos.splice(3,0,'adrian');

console.log(alumnos);
console.log(eliminado);
console.log(eliminadop);

const pos=alumnos.indexOf('adrian');
console.log(pos);
const valor=alumnos.includes('kiaras');
console.log(valor);

const aux=alumnos.some(alumno=>alumno[alumno.length-1]=='u');
console.log(aux);
const aux2=alumnos.every(alumno=>alumno.length>=4);
console.log(aux2);

const copia=alumnos.find(alumno=>alumno.length==4);
console.log(copia);
const copia2=alumnos.findIndex(alumno=>alumno.length==4);
console.log(copia2);
console.log(alumnos);
const copiaNodo=alumnos.filter(alumno=>alumno.length>4);
console.log(copiaNodo);

const copiaUpper=alumnos.map(alumno=>alumno.toUpperCase());
console.log(copiaUpper);

console.log(alumnos.slice(1,3));

const alter=alumnos.concat(alumnosJalados);
console.log(alter);

const ultimoString=alumnos.join('*');
console.log(ultimoString);

