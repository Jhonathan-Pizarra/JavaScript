
/*Aritmética y Operadores, 
(Recomiendo ver teoría: Operadores (Todos: logicos, aritmeticos, de asignacion...))
Jerarquía de operaciones obedecen a la aritmética clásica, pero además podemos hacer uso de varios operadores y combinaciones de ellos, 
Más infor qui: https://www.w3schools.com/js/js_arithmetic.asp
(No es necesario que te lo aprendas, con que sepas que existe está bien)
*/

/*Los tipos de datos
Una vez que nos hayamos familiarizado con los operadores y la jerarquía de operaciones, 
podemos hablar de los tipos de datos. Las variables de JavaScript pueden contener muchos tipos de datos : números, cadenas, objetos y más
*/
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object
var cadena = "Hola";
var a = 12;

var experimento = "SodaStereo" + 22; //todo lo que se sume a una cadena , inmediatamente se casteará y convertirá en cadena!, cada elemento de esa suma!!

document.getElementById("ejemplo_1").innerHTML = experimento; //Exacto! todo se convierte a string!

var comprobar = typeof(experimento);

window.alert("Soda es: "+comprobar); 

//JavaScript evalúa expresiones de izquierda a derecha. Diferentes secuencias pueden producir diferentes resultados:
var x = 16 + 4 + "Volvo";   //20Volvo
var x = "Volvo" + 16 + 4;   //Volvo164

//los numeros puedn ser enteros
var a = 35;
var b = 35.3; //o decimales

//notacion exponencial:
var c = 123e5;      // 12300000 
var d = 123e-5;     // 0.00123

//booleanos: Los booleanos solo pueden tener dos valores: trueo false.
var e = 4;
var f = 5;

(e == f); //si lo imprimes te dará false

var verdadero = true;
console.log(verdadero);

//Puede usar la Boolean()función para averiguar si una expresión (o una variable) es verdadera:
Boolean(10 > 9)        // returns true
10 > 9                // also returns true
//El valor booleano (true o false) de una expresión es la base de todas las comparaciones y condiciones de JavaScript.
//Todo lo que tiene valor es verdadero:
100
3.14
-15
"Hello"
"false"
7 + 1 + 3.14

//Todo lo que no tiene un "valor" es falso
var x = 0;        
var x = -0;
var x = "";
var x;
var x = null;
var x = false;
var x = 10 / "H";  //NaN
Boolean(x);       // returns false

//JavaScript son tipos dinámicos. Esto significa que la misma variable se puede usar para contener diferentes tipos de datos:
var e;           // Now e is undefined
e = 5;           // Now e is a Number
e = "John";      // Now e is a String

//Arreglos
//En JS se los conoce como matrices, se escriben entre corchetes, y cada elemento del arreglo es separado por ",".
var cars = ["Saab", "Volvo", "BMW"]; //Comienza contando desde 0 
console.log(cars[0]);

//Objetos
//Los objetos de JavaScript se escriben con llaves {}.
//Las propiedades de los objetos se escriben como pares de nombre: valor, separados por comas.
var person = {
              firstName:"John", 
              lastName:"Doe", 
              age:50, 
              eyeColor:"blue"
            }; //{clave:valor, clave:valor....}

console.log(person.firstName + " " + person.lastName + ", tiene "+ person.age +" años, sus ojos son "+ person.eyeColor +"." ); //asi accedemos al objeto ^^
//El objeto (persona) del ejemplo anterior tiene 4 propiedades: nombre, apellido, edad y color de ojos.

//Typeof
//El typeofoperador devuelve el tipo de variable o expresión:
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

//Undefined, vacio y null
var door; //undefined
var beatles = ""; //vacio pero de tipo string
var pareja = null; //nada, "no existe"
var car = undefined //Cualquier variable puede vaciarse estableciendo el valor en undefined. El tipo también será undefined.


//undefined vs null
null === undefined //es preguntar: son iguales el tipo y valor?: no, diferencian en tipo
null == undefined //es preguntar: son iguales en valor?: si //tienen el mismo valor

console.log(typeof(undefined)); //tipo no definido
console.log(typeof(null)); //tipo objeto

//Setear un valor a nulo:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object

//Setear un valor y tipo de dato a no definido:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Now both value and type is undefined

//DATOS PRIMITIVOS
//numeros, cadenas, booleanos, undefined

//DATOS COMPLEJOS, son combinaciones de datos
//Objetos, funciones
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (no "array", en JavaScript las matrices son objetos.)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"



