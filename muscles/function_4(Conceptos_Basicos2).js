/*La programación en JS es igual que en C, Java, Python... una serie de declaraciones que construyen un programa
las declaraciones son ejecutadas una por una en el orden en que fueron escritas 
*/

/*Punto y coma
El punto y coma separa las declaraciones de JavaScript. 
En la web, es posible que vea ejemplos sin punto y coma.
No es necesario terminar las declaraciones con punto y coma, pero es muy recomendable.
*/

/*Saltos de línea y longitud de lína JS
Algo como esto: 

document.getElementById("demo").innerHTML =
"Hello Dolly!";

Funcionará perfectamente, pero es más legible si todo eso estuviera en la misma línea, (que no debe tener más de 80 caracteres, buenas práctica)
Aún así, si una declaración de JavaScript no cabe en una línea, el mejor lugar para romperla es después de un operador: +, = , / etc
*/

/*Bloques de código
JS puede estar agrupado dentro de bloques de codigo, como es el caso de las funciones JS

function myFunction() {//inicio
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}//fin

la idea es que ese bloque se esjecute junto, estamos agrupando sentencias, como en los for, o los if
*/


/*Tenemos algunas palabras reservadas:

break	        Termina un interruptor o un bucle
continue	    Salta de un bucle y comienza en la parte superior.
debugger    	Detiene la ejecución de JavaScript y llama (si está disponible) a la función de depuración
do ... while	Ejecuta un bloque de declaraciones y repite el bloque, mientras que una condición es verdadera
for	          Marca un bloque de declaraciones que se ejecutarán, siempre que la condición sea verdadera
function    	Declara una función
if ... else	  Marca un bloque de declaraciones que se ejecutarán, según una condición.
return	      Sale de una función
switch	      Marca un bloque de sentencias para ejecutar, dependiendo de los diferentes casos.
try ... catch	Implementa el manejo de errores en un bloque de declaraciones
var	          Declara una variable

¿Te son familiares? ;)

*/

/*Valores en JS
En JavaScript podemos tener solo 2 tipos de valores: fijos o variables, 
fijos(o literales) si:
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
() para operaciones matematicas
[] para los elementos de arreglos/matrices
{} para los objetos
 */

/*Operaciones:
 son combinaciones de valores, varuables, operadores aritméticos, y de agrupación que al final resultan en nuevos valores
 estas operaciones obedecen a leyes y reglas matemáticas y alegbráicas: Jerarquía de operaciones, etc
 la concatenación de cadenas también existe aquí ^^
 Puedo concantenar cadenas, números y cadenas, o sumar números mediante el operador "+"
 */

/*Expresiones JS
4 * 5 es una expresión, o sea una combinación de valores
x * 10 es una exptresión con valores variables
el resultado de esas expresiones se llama "evaluación", así por ejemplo si 4*5 = 20, 20 es la evalcuación de esas expresión
*/

/*Comentarios
 * Multilinea como lo podemos apresciar 
  //Unilinea como estos
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

 /*Signo $ y (_) JS
El uso del signo de dólar no es muy común en JavaScript, pero entre los programadores profesionales a menudo lo usan como un alias para la función principal de una biblioteca de JavaScript.
En la biblioteca JavScript jQuery, por ejemplo, la función principal "$" se usa para seleccionar elementos HTML. En jQuery $("p");significa "seleccionar todos los elementos p".
El uso del guión bajo no es muy común en JavaScript, pero una convención entre los programadores profesionales es usarlo como un alias para las variables "privadas (ocultas)".
*/
var $nombre = "Jhonathan";
var _lastName = "Pizarra";
window.alert($nombre);

/*JS es key Sensitive, 
es decir que no cree que mayúsculas y minúsculas son lo mismo 
*/

/*JS prefiere las variables "camello"
pero también pudes usar variables asi: nombre_completo 
*/


/*Variables!
Son contenedores para almacenar valores de datos.
var a, b, c; //no olives el ";" al final de cada instrucción (por temas de buenas prácticas)
a = 12; //o a=12; es lo mismo JS ignora los espacios, pero mejor con espacios, de nuevo (por temas de buenas prácticas)
b = 1;
c = a + b;
var x = a + b; //Perfecta declaración y asinación
*/

/*Let & const
Antes de 2015, usar la varpalabra clave era la única forma de declarar una variable de JavaScript.
La versión 2015 de JavaScript (ES6) permite el uso de la "const" palabra clave para definir una variable que no se puede reasignar y "let" para definir una variable con alcance restringido.
Debido a que no son compatibles con los navegadores más antiguos, encontrarás que se usa con mayor frecuencia "var".
Al final del día, son otra forma de declarar variables, solo que tienen características particulares. (Sigue más abajo entramos en detalle)
*/


 /*Tipos de datos:
 Js puede manejar varios tipos de datos, pero al momento, solo conocemos 2: cadenas y números */

 /*Declaración de tipo "var":
 var a,b,c;
 var a = 2, b = 3, c = 4;
 viene a ser lo mismo que:
 var a = 2,
 b = 3,
 c = 4;

var a; tendrá un valor "Undefined", esto debido a que la variable ha sido declarada sin un valo, lo que se pretende es
que tome un valor tarde o temprano, son usados en situaciones en las que se requiere que el usuario ingrese datos
 
Si una variable ya tenía un valor previamente, al volverla a declara conservará el último valor que tuvo
var carName = "Volvo";
var carName; //tendrá Volvo como valor
*/

/*Alcance (Verlo en conjunto con teoría)
Tenemos alcance global y de función  (o local)
Las variables declaradas globalmente (fuera de cualquier función) tienen alcance global .
* Se puede acceder a las variables globales desde cualquier lugar de un programa JavaScript.
* Las variables declaradas localmente (dentro de una función) tienen un alcance de función
(Ver: alcance_var 1,2)
*/


/*Diferencia entre: Var vs Let
(Ver teoría var_vs_let 0,1,2,3,4,5,6 y 7)
*/

/*Diferencia entre: var vs const
(Ver teoría var_vs_const 1,2,3,4,5,6 y 8)
*/
