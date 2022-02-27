/*
Cadenas
Una cadena (o una cadena de texto) es una serie de caracteres como "John Doe".
Una cadena de JavaScript tiene cero o más caracteres escritos entre comillas.
Las cadenas se escriben con comillas simples o dobles.
*/
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes

//Puede usar comillas dentro de una cadena, siempre que no coincidan con las comillas que rodean la cadena:
var answer1 = "It's alright";             // Single quote inside double quotes
var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes

/*Métodos para trabajar con Strings */
var cadena = "texto! chidori";
var longitud = cadena.length;
var posicionChidori = cadena.indexOf("chidori"); 

var str = "Please locate where 'locate' occurs!";
var posicionFinalChidori = str.lastIndexOf("locate");

//Ambos métodos (indexOf y lastIndexOf) aceptan un segundo parámetro como posición para iniciar la búsqueda:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);

var cadena2 = "Soy un mapache!";
var encontrarMapache = cadena2.search("mapache");

/*Search vs indexof
El search()método no puede tomar un segundo argumento de posición inicial.
El indexOf()método no puede tomar valores de búsqueda potentes (expresiones regulares).
*/

console.log(longitud);
console.log(posicionChidori); //devuelve la posicion del primer caracter de la cadena "chidori" (recuerda que comenzamos a cotnar desde 0)
console.log(posicionFinalChidori);//devuelve la posicion del último caracter de la cadena "locale" (recuerda que comenzamos a cotnar desde 0)
console.log(encontrarMapache); //El search() método busca en una cadena un valor especificado y devuelve la posición de la coincidencia, no del mapache, ojo

//Métodos para extraer cadenas
/*slice() 
  * extrae una parte de una cadena y devuelve la parte extraída en una nueva cadena.
  * El método toma 2 parámetros: la posición inicial y la posición final (final no incluido).
  * Este ejemplo corta una porción de una cuerda desde la posición 7 a la posición 12 (13-1):
*/
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13)     //Banana
//Si un parámetro es negativo, la posición se cuenta desde el final de la cadena.
var res = str.slice(-12, -6);  //Banana
//Si omite el segundo parámetro, el método cortará el resto de la cadena:
var res = str.slice(7);       //Banana, Kiwwi
//o contando desde el final
var res = str.slice(7);       //Banan, Kiwi
  
/*substring()
La diferencia es que substring()no puede aceptar índices negativos.
Ejemplo:
 */
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

/* substr()
substr()es similar a slice().
La diferencia es que el segundo parámetro especifica la longitud de la parte extraída.
Ejemplo:
*/
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);   //Banana
//Si omite el segundo parámetro, substr()cortará el resto de la cadena.
var res = str.substr(7);     //Banana, Kiwi
//Si el primer parámetro es negativo, la posición cuenta desde el final de la cadena.
var res = str.substr(-4);   //Kiwi

/*Reemplazar cadenas
El replace()método reemplaza un valor especificado con otro valor en una cadena:
replace() no cambia la cadena en la que se llama. Devuelve una nueva cadena.
Ejemplo:
*/
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

//replace() No distingue entre mayúsculas y minúsculas. Escribir MICROSOFT (con mayúsculas) no funcionará:
//Para reemplazar las mayúsculas y minúsculas, use una expresión regular con una /i (marca insensible)
var n = str.replace(/MICROSOFT/i, "W3Schools"); //Las expresiones regulares se escriben sin comillas.

//Para reemplazar todas las coincidencias, use una expresión regular con una /g (coincidencia global):
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools"); //Please visit W3Schools and W3Schools

//Luego veremos más sobre expresiones regulares :) 

/*Convertir cadenas
Una cadena se convierte a mayúsculas con toUpperCase():
Ejemplo:
*/
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

//Una cadena se convierte a minúsculas con toLowerCase():
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

/*Método concat()
concat() une dos o más cadenas:
Ejemplo:
*/
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

//Recierda: las cadenas son inmutables: las cadenas no se pueden cambiar, solo reemplazar.

/*Trim() Quitar espacios en blanco
Ejemplo
*/
var str = "     Hello World!     ";
alert(str.trim());

/*Relleno de cadenas
 padStart y padEndpara admitir el relleno al principio y al final de una cadena.
Ejemplo:
*/
let str = "5";
str = str.padEnd(4,0);
// result is 5000

let str = "5";
str = str.padStart(4,0);
// result is 0005

/*Extraer caracteres de una cadena
El charAt() devuelve el carácter en un índice (posición) especificado en una cadena:
 */
var str = "HELLO WORLD";
str.charAt(0);          //H

//El charCodeAt() devuelve el Unicode del carácter en un índice especificado en una cadena:
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72 ya que ALT+72 = H

//Convertir una cadena a una matríz
//usamos el método split()
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
//Si se omite el separador, la matriz devuelta contendrá la cadena completa en el índice [0]. Es decir: abcd en el índice 0
//Si el separador es "", la matriz devuelta será una matriz de caracteres individuales:
/*
a
b
c
d
e
*/

/*Scapes*/
//var x = "We are the so-called "Vikings" from the north.";  eso te dará error!
//Solucion(es):
var x = "We are the so-called 'Vikings' from the north.";
var x = "We are the so-called \"Vikings\" from the north.";

//Otros scapes son: \' , \\ , \" ... Prueba viendo la teoría: "Scapes"

/*Romper líneas de código
Si una declaración de JavaScript no cabe en una línea, el mejor lugar para romperla es después de un operador:
document.getElementById("demo").innerHTML =
"Hello Dolly!";

Del mismo modo también puede dividir una línea de código dentro de una cadena de texto con:
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
*/

//Las cadenas pueden ser objetos:
var x = "John"; //Cadena (Valor primitivo)
var y = new String("John"); //Objeto

// typeof x will return string
// typeof y will return objec
//No crees cadenas como objetos. Disminuye la velocidad de ejecución.

//Más info en: https://www.w3schools.com/jsref/jsref_obj_string.asp
