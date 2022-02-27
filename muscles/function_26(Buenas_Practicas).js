/*En este capítulo describimos las buenas prácticas de programación de JS
¿Por qué esto es importante? 
Las convenciones de codificación garantizan la calidad :
  Mejora la legibilidad del código.
  Facilite el mantenimiento del código
  Las convenciones de codificación pueden ser reglas documentadas para que las sigan los equipos, o simplemente ser su práctica de codificación individual.
*/

/*Nombres de las variables
*camelCase para los nombres de los identificadores (variables y funciones).
*Todos los nombres comienzan con una letra .
*/
firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);

/*Espacios entre operadores
Siempre ponga espacios alrededor de los operadores (= + - * /) y después de las comas:
*/
var x = y + z;
var values = ["Volvo", "Saab", "Fiat"];

/*Sangría de código 
Utilice siempre 2 espacios para la sangría de los bloques de código:
*/
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
//No uses TABS porque puede haber conflicto algunos navegadores no lo interpretan bien


//Ver teoría: reglasDeclaracion1,2


//Ver teoría: reglasObjetos1

//Ver teoría: reglasTipeo1,2

//Ver teoría: reglasJSHTML

//Por último: reglasGenerales

//¿Qué no hacer en JS?: https://www.w3schools.com/js/js_best_practices.asp
//Errores típicos, cuidado: https://www.w3schools.com/js/js_mistakes.asp
//Optimizar código: https://www.w3schools.com/js/js_performance.asp
//Palanras reservadas: https://www.w3schools.com/js/js_reserved.asp




