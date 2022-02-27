/* Arreglos (O matrices de una dimensión o simplemente matrices)
Las matrices de JavaScript se utilizan para almacenar varios valores en una sola variable.

Una matriz es una variable especial, que puede contener más de un valor a la vez.
Si tiene una lista de elementos (una lista de nombres de automóviles, por ejemplo)
*/

//Almacenar los automóviles en variables individuales podría verse así:
var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";

// ¿Y si no tuvieras 3 coches, sino 300? ¡La solución es una matriz!
//Declarar una matriz
var cars = ["Saab", "Volvo", "BMW"];

//O también
var cars = new Array("Saab", "Volvo", "BMW");

//Por simplicidad, legibilidad y velocidad de ejecución, use el primero (el método literal de matriz).
var points = [];              // Bien
var points = new Array();     // Mal


/*----------------------------------------------------------------------------------*/

/* Acceder a los elementos de una matriz
Puede acceder a un elemento de la matriz consultando el número de índice .
s matrices usan números para acceder a sus "elementos". En este ejemplo, cars[0] devuelve Saab:
*/
var cars = ["Saab", "Volvo", "BMW"];
var name = cars[0];  //Acceder a Saab
//Nota: Los índices de matriz comienzan con 0.


//Cambiar un elemento de matriz
cars[0] = "Opel";   //Reemplaza Saab por Opel

//Acceda a la matriz completa
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

//Las matrices son un tipo especial de objetos. El typeofoperador en JavaScript devuelve "objeto" para matrices.
//Los objetos usan nombres para acceder a sus "miembros". En este ejemplo, person.firstName devuelve John:
var person = {
  firstName:"John", 
  lastName:"Doe", 
  age:46
};


//Los elementos de la matriz pueden ser objetos
//Puede tener objetos en una matriz. Puede tener funciones en una matriz. Puede tener matrices en una matriz:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
/*----------------------------------------------------------------------------------*/


/*Propiedades y métodos de matriz
La verdadera fuerza de las matrices de JavaScript son las propiedades y métodos de matriz incorporados:
*/
var cars = ["Saab", "Volvo", "BMW"];
var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method ordena arreglos

//Accediendo a los elementos de una matriz
//al primer elemento de la matriz
fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];

//Al último elemento de la matriz:
fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];

//Bucles en arreglo
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

/*Imprime:
  * Banana
  * Orange
  * Apple
  * Mango
*/

//Bucles for-each en arreglo
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
/*Imprime:
  * Banana
  * Orange
  * Apple
  * Mango
*/
/*----------------------------------------------------------------------------------*/

// Agregar elementos de matriz
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits

//Matrices asociativas (o hashes)
//Muchos lenguajes de programación como Ruby, admiten matrices con índices con nombre. Eso sería algo como esto:
var person = [];
person["firstName"] = "John";
var y = person[0];         // person[0] will return undefined
//Nunca uses matrices con nombres como indices, JavaScript redefinirá la matriz a un objeto estándar.


//JavaScript no admite matrices con índices con nombre.
//En JavaScript, las matrices siempre usan índices numerados .  
var person = [];
person[0] = "John";
var y = person[0];         // person[0] will return "John"
/*----------------------------------------------------------------------------------*/


/*La diferencia entre matrices y objetos
En JavaScript, las matrices usan índices numerados .  
En JavaScript, los objetos utilizan índices con nombre.

Cuándo utilizar matrices. Cuándo usar objetos?
* Debe utilizar objetos cuando desee que los nombres de los elementos sean cadenas (texto) .
* Debe usar matrices cuando desee que los nombres de los elementos sean números .
*/
/*----------------------------------------------------------------------------------*/

/*Reconocer una matriz
*/
//El problema es que el operador de JavaScript typeofdevuelve " object":
var fruits = ["Banana", "Orange", "Apple", "Mango"];
typeof fruits;    // returns object

//Solución 1:
Array.isArray(fruits);   // returns true

//Solución 2:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits instanceof Array;   // returns true
/*----------------------------------------------------------------------------------*/

/*Métodos para trabajar con Arrays
Convertir Arrays a Strings
*/

//El método JavaScript toString()convierte una matriz en una cadena de valores de matriz (separados por comas).
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = fruits.toString();  
//Resultado: Banana,Orange,Apple,Mango

//El join()método también une todos los elementos de la matriz en una cadena, pero además puedes especificar el separador:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
//Resultado: Banana * Orange * Apple * Mango


/*Hacer estallar y empujar
//en JS se refiere eliminar elementos y agregar elementos nuevos de una matriz
*/

//El pop() elimina el último elemento de una matriz:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits
//podemos guardar ese último valor en una variable:
var x = fruits.pop();      // the value of x is "Mango"


//El push() agrega un nuevo elemento a una matriz (al final):
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
//a diferencia de pop() push() no dará el último elemento si se guarda en una variable, sino el índice:
var x = fruits.push("Kiwi");   //  the value of x is 5


//El shift() elimina el primer elemento de la matriz y "desplaza" todos los demás elementos a un índice más bajo.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
//si lo guardamos en una variable se guardará el valor de que desplazó
var x = fruits.shift();    // the value of x is "Banana"


//El unshift() agrega un nuevo elemento a una matriz (al principio) y "deshace" los elementos más antiguos para volver a tener un nuevo arreglo con el nuevo ya incluido:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits, asi que nuevo arreglo sería: Lemon,Banana,Orange,Apple,Mango
//Si lo guardamos en una variable se guardará el nuevo número de elementos de la matriz
var x = fruits.unshift("Lemon");  //Returns 5


//El splice() se puede utilizar para agregar o quitar elementos a una matriz:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
//El primer parámetro (2) define la posición donde se deben agregar (empalmar) nuevos elementos (En Apple)
//El segundo parámetro (0) define cuántos elementos deben eliminarse .
//El resto de parámetros ("Limón", "Kiwi") son elementos a añadir .

//splice() Con una configuración de parámetros inteligente, puede utilizar splice()para eliminar elementos sin dejar "agujeros" en la matriz:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits
//El primer parámetro (0) define la posición donde se deben agregar (empalmar) nuevos elementos .
//El segundo parámetro (1) define cuántos elementos deben eliminarse .


/* Fusión (concatenación) de matrices
El método concat() crea una nueva matriz fusionando (concatenando) matrices existentes:
*/
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys: Cecilie,Lone,Emil,Tobias,Linus
//El concat()método no cambia las matrices existentes. Siempre devuelve una nueva matriz.

//Fusionar 2 o más matrices
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3 (Puede tomar n argumentos)

/*Defusinar matrices
El slice()método divide una parte de una matriz en una nueva matriz.
*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
//Matríz original: Banana,Orange,Lemon,Apple,Mango
//Matriz defusioanda: Apple,Mango

//El slice()método crea una nueva matriz. No elimina ningún elemento de la matriz de origen.
//El slice()método puede tomar dos argumentos como slice(1, 3). Cuando se usa de este modo defusiona desde este punto hasta este punto
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); //Organe, Lemon es la nueva matriz
/*----------------------------------------------------------------------------------*/

/* Ordenar una matriz
El sort() ordena una matriz alfabéticamente:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements: Apple, Bannana, Mango, Orange

//Inversión de una matriz
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements

//Sort() es usado para ordenar cuando hay cadenas, o sea que ordenar una matriz como ["20", "100", "10"] lo ordenará así: 10, 100,20 porque "2" es mayor que "1"
//Entonces si quieremos ordenar matrices con números:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); //Orden ascendente
points.sort(function(a, b){return b - a}); //Orden descendente

/*
La función de comparación compara todos los valores de la matriz, dos valores a la vez (a, b).
Al comparar 40 y 100, el sort()método llama a la función de comparación (40, 100).
La función calcula 40 - 100 (a - b), y dado que el resultado es negativo (-60), la función de clasificación clasificará 40 como un valor inferior a 100.
*/

//El valor más alto de una mtriz
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo3").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

//El valor más bajo de una matriz
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo4").innerHTML = myArrayMin(points);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
/*----------------------------------------------------------------------------------*/

//Orden aleatorio
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});

//Ordenar matrices de objetos
//Declarar un arreglo de objetos
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

//Ordenar según el año
cars.sort(function(a, b){return a.year - b.year});


//Ordenar según la cadena
cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
/*----------------------------------------------------------------------------------*/

//Iterrar sobre un arreglo
//Array.forEach ()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}


//Array.map ()
/*
El map() crea una nueva matriz realizando una función en cada elemento de la matriz.
El map() no ejecuta la función para elementos de matriz sin valores.
El map() no cambia la matriz original.
Este ejemplo multiplica cada valor de matriz por 2:
*/
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}

//Array.filter ()
//El filter() crea una nueva matriz con elementos de matriz que pasa una prueba.
//el siguiente ejemplo crea un nuevo arreglo con los filtros de los mayores de 18
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}

//Array.reduce ()
/*
El reduce() ejecuta una función en cada elemento de la matriz para producir (reducirlo a) un solo valor.
El reduce() funciona de izquierda a derecha en la matriz. Si quieres lo contrario usa: reduceRight().
*/
//La suma de todos los elementos de un arreglo:
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);
var sum = numbers1.reduceRight(myFunction); //En este caso funcionaría de derecha a izquierda (Y la suma es lo mismo)

function myFunction(total, value) {
  return total + value;
}

//El reduce()método puede aceptar un valor inicial:
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

//Array.every ()
//El every()método comprueba si todos los valores de la matriz pasan una prueba.
//Este ejemplo comprueba si todos los valores de la matriz son mayores que 18:
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}

//Array.indexOf ()
//El indexOf()método busca en una matriz el valor de un elemento y devuelve su posición.
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");  //Apple se encunetra en la posiicón 0
//También puede tener una posición inicial: array.indexOf(item, start)


//Array.lastIndexOf ()
//es lo mismo que Array.indexOf(), pero devuelve la posición de la última aparición del elemento especificado.
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple"); //Apple se encuentra ne la posición 2


//Array.find ()
//Por ejemplo, para encontrar el primer elemento que al pasar por el filtro aprueba: El resutlado sería 25
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


//Array.findIndex ()
//Este ejemplo encuentra el índice del primer elemento que es mayor que 18: El resultado sería 3
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
