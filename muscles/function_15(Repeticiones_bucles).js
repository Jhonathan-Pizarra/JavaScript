/*Bucles JS
Los bucles son útiles si desea ejecutar el mismo código una y otra vez, cada vez con un valor diferente.

Tipos de bucles:
for - recorre un bloque de código varias veces
for/in - recorre las propiedades de un objeto
for/of - recorre los valores de un objeto iterable
while - recorre un bloque de código mientras una condición especificada es verdadera
do/while - también recorre un bloque de código mientras una condición especificada es verdadera

*/

//Bucle for
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
//La instrucción 1 (i=0) se ejecuta (una vez) antes de la ejecución del bloque de código.
//La declaración 2 (i<5) define la condición para ejecutar el bloque de código.
//La instrucción 3 (i++) se ejecuta (cada vez) después de que se haya ejecutado el bloque de código.
//Es curioso pero en JS se puede tener más declaraciones, quizás esto haga que tu código sea más legible:
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
//Si es importante que haya un orden, no puedes hacer i<len y luego len=car.length


//For In
//for/in propiode JavaScript, recorre las propiedades de un objeto:
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}

/*
El bucle for in itera sobre el objeto persona
Cada iteración devuelve una clave (x)
La clave se utiliza para acceder al valor de la clave.
El valor de la clave es persona [x]
*/

//forEach()
//llama una función con un bucle usado para arreglos
//El forEach() llama a una función (una función de devolución de llamada) una vez para cada elemento de la matriz.
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}


//For of
//este tipo de bucles permite recorrer estructuras de datos iterables como matrices, cadenas, mapas, listas de nodos y más:
//Para arreglos:
let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + "<br>";
}

//Para cadenas
let language = "JavaScript";
let text = "";

for (let x of language) {
text += x + "<br>";
}

//Este tipo de bucles manejan 2 cosas importantes, una variable y un iterable
//variable : para cada iteración, el valor de la siguiente propiedad se asigna a la variable. Variable puede declararse con const, leto o var. Preferible usa var
//iterable : un objeto que tiene propiedades iterables.


//Bucle While
//El whilebucle recorre un bloque de código siempre que una condición especificada sea verdadera.
var i = 0;
while (i < 10) {
  text += "The number is " + i;
  i++;
}

//Si olvida aumentar la variable utilizada en la condición, el ciclo nunca terminará. Esto bloqueará su navegador.



//Bucle Do-while
//Este bucle ejecutará el bloque de código una vez, antes de verificar si la condición es verdadera, luego repetirá el bucle siempre que la condición sea verdadera.
var i = 0;
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);


//Break & Continue
//break "salta" de un bucle. Es usado para saltar de un bucle o un switch (también un if pero no es común) .
//continue "salta" una iteración en el ciclo.
//Ejemplo de Break:
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}//Si i es el valor 3 entonces termina, "rompe" el bucle, y el último valor de "i" es 3
//La impresión sería: 1,2,3

//Ejemplo de Continue:
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}//Si i es el valro 3 entonces continúalo, "salta y pasa de él" hacia el siguiente, y el último valor de "i" es 9, o sea:
//La impresión sería: 1,2,4,5,6,7,8,9


//Labels
//Con una referencia de etiqueta, la declaración de ruptura se puede usar para saltar fuera de cualquier bloque de código :
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list; //aqui la equiteta para hacer o un breack y solo un break
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}


//Nota: Un bloque de código es un bloque de código entre { }.

