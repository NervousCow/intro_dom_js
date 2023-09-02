"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)
Leer el título del "header" del post e imprimirlo en consola.   

2)
Cambiar título utilizando javascript por otro cualquiera.

*/

const titulo = document.querySelector("h2");

console.log(titulo);

console.log(titulo.textContent);

titulo.textContent = "Lista de botones";

console.log(titulo.textContent);