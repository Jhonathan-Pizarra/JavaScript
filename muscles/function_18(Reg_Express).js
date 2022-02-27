//Expresiones Regulares
/*
Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda.

Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda .
Cuando busca datos en un texto, puede utilizar este patrón de búsqueda para describir lo que está buscando.
Una expresión regular puede ser un solo carácter o un patrón más complicado.
Las expresiones regulares se pueden utilizar para realizar todo tipo de operaciones de búsqueda y reemplazo de texto .

*/
var patt = /w3schools/i;

/* Análisis:
/ w3schools / i   es una expresión regular.
w3schools   es un patrón (para usar en una búsqueda).
i   es un modificador (modifica la búsqueda para que no distinga entre mayúsculas y minúsculas).

Las expresiones regulares pueden hacer que su búsqueda sea mucho más poderosa
*/

//En JavaScript, las expresiones regulares se utilizan a menudo con los dos métodos de cadena : search()y replace().

//El search() usa una expresión para buscar una coincidencia y devuelve la posición de la coincidencia.
//búsqueda de cadenas () con una cadena:
var str = "Visit W3Schools!";
var n = str.search("W3Schools");

//búsqueda de cadenas () con una expresión regular
var str = "Visit W3Schools";
var n = str.search(/w3schools/i);
//La diferencia es que una búsqueda  con expresiones regulares no distinge entre mayúsculas y minúsculas de "w3schools" 


//El replace() devuelve una cadena modificada en la que se reemplaza por una nueva palabra
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");


//replace () con una expresión regular
var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools");
//Lo que hace es buscar la palabra microsoft que gracias a las expresiones regulares no importa si es min o mayús, y luego la reemplaza por W3Scoohls


//Modificadores en expresiones regulares:
/*

i   para que pueda busca algo si importar si está en maysu o mins
g   para buscar toooodas las palabras similares 
m   Realizar emparejamiento multilínea
*/

//Patrones de expresión regular
/*
Los corchetes se utilizan para encontrar un rango de caracteres:
[abc]	 Encuentra cualquiera de los caracteres entre paréntesis
[0-9]	 Encuentra cualquiera de los dígitos entre corchetes
(x|y)	 Busque cualquiera de las alternativas separadas por |	
*/

//Metacaracteres
/*
Los metacaracteres son personajes con un significado especial:

\d  Encuentra un dígito
\s  Encuentra un carácter de espacio en blanco
\b	Busque una coincidencia al principio de una palabra como esta: \ bWORD, o al final de una palabra como esta: WORD\b
\uxxxx	Busque el carácter Unicode especificado por el número hexadecimal xxxx
*/

//Cuantificacodres
/*
Los cuantificadores definen cantidades:

n+	Coincide con cualquier cadena que contenga al menos una n
n*	Coincide con cualquier cadena que contenga cero o más apariciones de n
n?	Coincide con cualquier cadena que contenga cero o una apariciones de n

*/


//Objeto RegExp
//En JavaScript, el objeto RegExp es un objeto de expresión regular con propiedades y métodos predefinidos.


//El test() es un método de expresión RegExp que busca un patrón en una cadena y devuelve verdadero o falso
var patt = /e/;
patt.test("The best things in life are free!"); //Dado que hay una "e" en la cadena, la salida del código anterior será: true
// O también podemos escribir en una sola líena: /e/.test("The best things in life are free!"); //returns true

//El exec() es un método de expresión RegExp que busca una cadena para un patrón específico y devuelve el texto encontrado como un objeto, en caso de no encontrarlo devuelve un objeto nulo
var obj = /e/.exec("The best things in life are free!");





