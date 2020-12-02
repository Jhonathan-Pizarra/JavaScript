/*
Cadenas
puedne tener 0 o más caracteres

*/
/*Métodos para trabajar con Strings */
var cadena = "texto! chidori";
var longitud = cadena.length;
var posicionChidori = cadena.indexOf("chidori"); 

var str = "Please locate where 'locate' occurs!";
var posicionFinalChidori = str.lastIndexOf("locate");

var cadena2 = "Soy un mapache!";
var encontrarMapache = cadena2.search("mapache");

console.log(longitud);
console.log(posicionChidori); //devuelve la posicion del primer caracter de la cadena "chidori" (recuerda que comenzamos a cotnar desde 0)
console.log(posicionFinalChidori);//devuelve la posicion del último caracter de la cadena "locale" (recuerda que comenzamos a cotnar desde 0)
console.log(encontrarMapache); //El search() método busca en una cadena un valor especificado y devuelve la posición de la coincidencia, no del mapache, ojo

/*Scapes*/
//var x = "We are the so-called "Vikings" from the north.";  eso te dará error!
//Solucion(es):
var x = "We are the so-called 'Vikings' from the north.";
var x = "We are the so-called \"Vikings\" from the north.";

//Otros scapes son: \' , \\ , \" ... Prueba viendo la teoría: "Scapes"

//Las cadenas pueden ser objetos:
var x = "John"; //Cadena
var y = new String("John"); //Objeto

// typeof x will return string
// typeof y will return objec
//No crees cadenas como objetos. Disminuye la velocidad de ejecución.