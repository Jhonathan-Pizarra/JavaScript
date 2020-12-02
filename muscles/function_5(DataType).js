//Los tipos de datos, por ahora conocemos numeros y cadenas, mira lo siguiente:

var cadena = "Hola";
var a = 12;

var experimento = "SodaStereo" + 22; //todo lo que se sume a una cadena, inmediatamente se casteará y convertirá en cadena!, cada elemento de esa suma!!

document.getElementById("ejemplo_1").innerHTML = experimento; //Exacto! todo se convierte a string!

var comprobar = typeof(experimento);

window.alert("Soda es: "+comprobar); 

//los numeros puedn ser enteros
var a = 35;
var b = 35.3; //o decimales

//notacion exponencial:
var c = 123e5;      // 12300000 
var d = 123e-5;     // 0.00123

//booleanos
var e = 4;
var f = 5;

(e == f); //si lo imprimes te dará false

var verdadero = true;
console.log(verdadero);

//Arreglos
var cars = ["Saab", "Volvo", "BMW"]; //Comienza contando desde 0 
console.log(cars[0]);

//Objetos
var person = {
              firstName:"John", 
              lastName:"Doe", 
              age:50, 
              eyeColor:"blue"
            }; //{clave:valor, clave:valor....}

console.log(person.firstName + " " + person.lastName + ", tiene "+ person.age +" años, sus ojos son "+ person.eyeColor +"." ); //asi accedemos al objeto ^^


//Undefined, vacio y null
var door; //undefined
var beatles = ""; //vacio pero de tipo string
var pareja = null; //nada, "no existe"

//undefined vs null
null === undefined //es preguntar: son iguales el tipo y valor?: no, diferencian en tipo
null == undefined //es preguntar: son iguales en valor?: si //tienen el mismo valor

console.log(typeof(undefined)); //tipo no definido
console.log(typeof(null)); //tipo objeto

//DATOS PRIMITIVOS
//numeros, cadenas, booleanos, undefined

//DATOS COMPLEJOS, son combinaciones de datos
//Objetos, funciones
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (no "array", en JavaScript las matrices son objetos.)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"



