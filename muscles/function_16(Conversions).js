//Ver primero: tiposDatos
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"


/*
El tipo de datos de NaN es número
El tipo de datos de una matriz es objeto
El tipo de datos de una fecha es objeto.
El tipo de datos de nulo es objeto
El tipo de datos de una variable indefinida es indefinido *
El tipo de datos de una variable a la que no se le ha asignado un valor tampoco está definido *
No se puede utilizar typeofpara determinar si un objeto JavaScript es una matriz (o una fecha).
Pero el typeofoperador siempre devuelve una cadena (que contiene el tipo de operando).
*/

/*La propiedad del constructor
La propiedad constructor devuelve la función constructora para todas las variables de JavaScript.

Ejemplo
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}
*/


//Verificacion
//Si un objeto es un arreglo
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = isArray(fruits);

function isArray(myArray) {
  return myArray.constructor === Array;
}

//Si un objeto es una fecha
var myDate = new Date();
document.getElementById("demo").innerHTML = isDate(myDate);

function isDate(myDate) {
  return myDate.constructor === Date;
}

//Números a strings
var x=100;
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression
x.toString()
(123).toString()
(100 + 23).toString()


//Booleans a strings
String(false)      // returns "false"
String(true)       // returns "true"
false.toString()   // returns "false"
true.toString()    // returns "true"

//fechas a strings
String(Date())  // returna: "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
//puedes ver: fechasCadenas

//Strings a numeros
Number("3.14")    // returns 3.14
Number("3,14")    // returns NaN
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN
//puedes ver: metodosMath


//Operador unario
//Se puede utilizar para convertir una variable en un número:
var y = "5";      // y is a string
var x = + y;      // x is a number, porque usamos "+"
//Si la variable no se puede convertir, seguirá siendo un número, pero con el valor NaN (no un número):
var y = "John";   // y is a string
var x = + y;      // x is a number (NaN)


//Bools a números
Number(false)     // returns 0
Number(true)      // returns 1

//Fechas a números
d = new Date();
Number(d)          // returns 1404568027739
d.getTime()        // returns 1404568027739

//Conversión automática de tipos
//Cuando JavaScript intenta operar con un tipo de datos "incorrecto", intentará convertir el valor en un tipo "correcto".

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2


//Para entender cómo es que JS convierte automaticamente algunas cosas (entender el meme de patricio y mantaralla): mira la tabla de convesión JS:
// https://www.w3schools.com/js/js_type_conversion.asp

