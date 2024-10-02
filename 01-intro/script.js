// Tipo de dato numerico
let myVariable = 100;

// la funcion toString() cambia el tipo de dato por un string
myVariable = myVariable.toString();

typeof myVariable;


//Espacio en blanco
// JavaScript no es sensible a los espacios en blanco. Esto significa que el intérprete ignora la cantidad y el tipo (tabulaciones o espacios) de los espacios en blanco utilizado.

// Marcadores de posicion

console.log( "The result is " + ( 2 + 4 ) + "." );
// > The result is 6.

console.log( `The result is ${ 2 + 4 }.` );
// > The result is 6.

// null es un valor primitivo en JavaScript que representa la ausencia intencional de cualquier otro valor.
// Se utiliza para indicar que una variable no tiene un valor asignado en este momento o para borrar el valor actual de una variable.
// Es importante distinguir null de undefined, aunque ambos indican la ausencia de un valor, tienen diferentes implicaciones.