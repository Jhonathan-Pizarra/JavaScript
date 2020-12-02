/*La programación en JS es igual que en C, Java, Python... una serie de declaraciones que construyen un programa
las declaraciones son ejecutadas una por una en el orden en que fueron escritas */

//Variables!
var a, b, c; //no olives el ";" al final de cada instrucción (por temas de buenas prácticas)
a = 12; //o a=12; es lo mismo JS ignora los espacios, pero mejor con espacios, de nuevo (por temas de buenas prácticas)
b = 1;
c = a + b;

var x = a + b; //Perfecta declaración y asinación

/*Algo como esto: 

document.getElementById("demo").innerHTML =
"Hello Dolly!";

Funcionará perfectamente, pero es más legible si todo eso estuviera en la misma línea, (que no debe tener más de 80 caracteres, buenas práctica)
*/

/*JS puede estar agrupado dentro de bloques de c+odigp:

function myFunction() {//inicio
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}//fin

la idea es que ese bloque se esjecute junto, estamos agrupando sentencias, como en los for, o los if*/

/*Tenemos algunas palabras reservadas:

break	        Terminates a switch or a loop
continue	    Jumps out of a loop and starts at the top
debugger	    Stops the execution of JavaScript, and calls (if available) the debugging function
do ... while	Executes a block of statements, and repeats the block, while a condition is true
for	            Marks a block of statements to be executed, as long as a condition is true
function	    Declares a function
if ... else	    Marks a block of statements to be executed, depending on a condition
return	        Exits a function
switch	        Marks a block of statements to be executed, depending on different cases
try ... catch	Implements error handling to a block of statements
var             Declare a variable

¿Te son familiares? ;)

*/

/*En JavaScript podemos tener solo 2 tipos de valores: fijos o variables, fijos si:
10 (Enteros)
10.22 (Flotantes)
'Jhonny Deep' (String)

variables si:
var z; //declaracion con asignacion de valor "undefined"
z = 2; //asignacion
z = 1; //reemplazará el valor anterior, y este será el nuevo
var nombre = 'Jack'; // declaracion y asignacion

Todo esto lo podemos imprimir mediante los Outputs, que vimos endenantes funcion_3

*/

/*Tenemos operadores aritméticos:
+, -, /, = ,* , == 

y operadores de agrupación:
(), [], {}
 */

 /*Operaciones:
 son combinaciones de valores, varuables, operadores aritméticos, y de agrupación que al final resultan en nuevos valores
 la concatenación de cadenas también existe aquí ^^
 */

 /*Identificadores:
 sirven para darle el nombre a tus variables, funciones, palabras reservadasm incluso etiquetas(veremos después)
 var nombre = 2;
 var (palabra reservada) nombre (identificador o nombre de la variable) = (operador de asinacion) 3(valor de la variable)

 pero el identificador también puede ser:
 $nombre
 _nombre
 nombre

cualquiera de los 3, es válido! 
 */

 var $nombre = "Jhonn";
 window.alert($nombre);

 /*JS es key Sensitive, es decir que no cree que mayúsculas y minúsculas son lo mismo */

 /*JS prefiere las variables "camello", pero también pudes usar variables asi: nombre_completo */

 /*Tipos de datos:
 Js puede manejar varios tipos de datos, pero al momento, solo conocemos 2: cadenas y números */

 /*Una declaración:
 var a,b,c;
 var a = 2, b = 3, c = 4;
 o lo que es lo mismo:
 var a = 2,
 b = 3,
 c = 4;

 var a; tendrá un valor "Undefined", tendrá un valor tarde o temprano, son usado en situaciones en las que se requiere que el usuario ingrese datos
 
 Si una variable ya tenía un valor previamente, al volverla a declara conservará el último valor que tuvo
var carName = "Volvo";
var carName;

puedo concantenas cadenas, números y cadenas, o sumar números mediante el operador "+"


El uso del signo de dólar no es muy común en JavaScript, pero entre los programadores profesionales a menudo lo usan como un alias para la función principal de una biblioteca de JavaScript.
En la biblioteca JavScript jQuery, por ejemplo, la función principal "$" se usa para seleccionar elementos HTML. En jQuery $("p");significa "seleccionar todos los elementos p".

El uso del guión bajo no es muy común en JavaScript, pero una convención entre los programadores profesionales es usarlo como un alias para las variables "privadas (ocultas)".
*/