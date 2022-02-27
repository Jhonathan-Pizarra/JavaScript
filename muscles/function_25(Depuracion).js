/*Depuración de código
El código de programación puede contener errores de sintaxis o errores lógicos.
Muchos de estos errores son difíciles de diagnosticar.
A menudo, cuando el código contiene errores, no sucede nada. No hay mensajes de error y no obtendrá indicaciones sobre dónde buscar errores.

"La búsqueda (y reparación) de errores en el código de programación se denomina depuración de código.""

La depuración no es fácil. Pero, afortunadamente, todos los navegadores modernos tienen un depurador de JavaScript integrado.
Los depuradores integrados se pueden activar y desactivar, lo que obliga a informar al usuario de los errores.

*/

//El método console.log ()
//Si su navegador admite la depuración, puede usar console.log()para mostrar los valores de JavaScript en la ventana del depurador:
a = 5;
b = 6;
c = a + b;
console.log(c); //11, pero se verá si nos metemos a la consola del navegador


//Debugger
/*En cada punto de interrupción, JavaScript dejará de ejecutarse y le permitirá examinar los valores de JavaScript.
Después de examinar los valores, puede reanudar la ejecución del código (normalmente con un botón de reproducción).
debugger detiene la ejecución de JavaScript y llama (si está disponible) a la función de depuración.
Tiene la misma función que establecer un punto de interrupción en el depurador.
*/
var x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;
//Ver teoría: debugger





