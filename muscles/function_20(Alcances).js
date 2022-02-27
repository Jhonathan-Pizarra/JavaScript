/* Alcance en JS

Ya habíamos visto en la diferencia de las variables let, var, y const el alcance, pero ahora veremos más a profundidad:

El alcance determina la accesibilidad (visibilidad) de las variables.
En JavaScript hay dos tipos de alcance:

Alcance local(O de función)
Alcance global

JavaScript tiene un alcance de función: cada función crea un nuevo alcance.
Las variables definidas dentro de una función no son accesibles (visibles) desde fuera de la función.

*/

/*Variables JavaScript locales
Las variables locales tienen ámbito de función : solo se puede acceder a ellas desde dentro de la función.
Dado que las variables locales solo se reconocen dentro de sus funciones, las variables con el mismo nombre se pueden usar en diferentes funciones.

Las variables locales se crean cuando se inicia una función y se eliminan cuando se completa la función.
Ejemplo: 
*/

// code here can NOT use carName
function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
}



/*Variables globales de JavaScript
Una variable declarada fuera de una función se convierte en GLOBAL .
Una variable global tiene alcance global : todos los scripts y funciones de una página web pueden acceder a ella. 
Ejemplo
*/
var carName = "Volvo";
// code here can use carName
function myFunction() {
  // code here can also use carName
}


/*Automáticamente global:
Si asigna un valor a una variable que no ha sido declarada, automáticamente se convertirá en una variable GLOBAL .
Este ejemplo de código declarará una variable global carName, incluso si el valor se asigna dentro de una función.
(No se recomienda hacer esto, sino más bien tener control del alcance, es decir declarar variables de modo estrico)
En "Modo estricto", las variables no declaradas no son automáticamente globales. NO cree variables globales a menos que tenga la intención de hacerlo.

Ejemplo
*/
myFunction();
// code here can use carName
function myFunction() {
  carName = "Volvo";
}


/*Ciclo de vida de una variable:
La vida útil de las variables de JavaScript
La vida útil de una variable de JavaScript comienza cuando se declara.

Las variables locales se eliminan cuando se completa la función.

En un navegador web, las variables globales se eliminan cuando cierra la ventana (o pestaña) del navegador.
*/



/*Declaraciones Izadas
Las declaraciones de JavaScript están izadas(elevadas)
esto queiere decir que puedes usar una variable y luego declararla, rompiendo la tradicional forma de declarar y asignar
sin embargo no es una buena práctica hacerlo. No lo hagas, si embargo es bueno que sepas de qué va , nunca se sabe quien puede codificar distinto
*/
//Recomiendo ver de nuevo: function_4(ConceptosBásicos).js


//Una forma de delimitar este problema ed las izadas, es hacer uso del "modo estricto"
/*
"use strict"; Define que el código JavaScript debe ejecutarse en "modo estricto".
No es una declaración, sino una expresión literal, ignorada por versiones anteriores de JavaScript.
El propósito de "use strict"es indicar que el código debe ejecutarse en "modo estricto".
Con el modo estricto, no puedes, por ejemplo, utilizar variables no declaradas.

Ejemplo:
*/
"use strict";
x = 3.14;  // This will cause an error (x is not defined).

//También
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

//Declarado dentro de una función, tiene alcance local (solo el código dentro de la función está en modo estricto):
x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

/*Originalmente este "use strict" fue creado para versiones antiguas de javascript
Compilar un literal numérico (4 + 5;) o un literal de cadena ("John Doe";) en un programa JavaScript no tiene efectos secundarios. Simplemente se compila en una variable no existente y muere.
Así que "use strict";solo les importa a los nuevos compiladores que "comprendan" su significado.

¿Es útil?
En JavaScript normal, escribir mal un nombre de variable crea una nueva variable global. En modo estricto, esto arrojará un error, haciendo imposible crear accidentalmente una variable global.
En JavaScript normal, un desarrollador no recibirá ningún comentario de error al asignar valores a propiedades que no se pueden escribir.
*/
//No se permite usar una variable u objeto sin declararlo
"use strict";
x = 3.14;                // This will cause an error
//No se permite eliminar una variable u bojeto
"use strict";
var x = 3.14;
delete x;                // This will cause an error
//No se permite eliminar una función
"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 
//No se permite duplicar el nombre de un parámetro:
"use strict";
function x(p1, p1) {};   // This will cause an error

//etc: https://www.w3schools.com/js/js_strict.asp
