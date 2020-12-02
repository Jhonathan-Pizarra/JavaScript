//Son usadas para realizar una tarea partícular, se ejecutan cuando algo las invoncan o las llaman

function miFuncion(parametro_1, parametro_2){//parámetros: son argumentos cuando reciben algún valor cuando la funcion es invocada, dentro de la función se comportan como variables locales

    return parametro_1 * parametro_2;  //Cuando JavaScript alcanza un return, la función dejará de ejecutarse.
}

//Si la función fue invocada desde una declaración, (un if por ejemplo) JavaScript "regresará" para ejecutar el código después de la declaración de invocación.
//es decir primero ejecutaría todo lo demás del if y luego si esa función

/*¿Cuándo una función es llamada?
Cuando ocurre un evento (cuando un usuario hace clic en un botón)
Cuando se invoca (llama) desde el código JavaScript*/

//Ejemplo 1: multiplciar el 2 y el 4
var x = myFunction(4, 3);   // Function is llamada, el valor de retorno se asignará a  x

function myFunction(a, b) { //los parámetros reciben los argumentos y comienzan a procesar la funcion
  return a * b;             // Function returns the product de a y b
}

document.getElementById("demo").innerHTML = x; // ahora, como x ya tiene un valor, lo uso para que ese se presente en el elemento de id "demo"
 
//Ejemplo 2: Concertir de farenheit a Celsius
 function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("demo2").innerHTML = toCelsius(77); //le vot el argumento ahí mismo ^^
  //El operador () invoca la función, ponerle solo toCelsius te dolverá: return (5/9) * .... osea la definicion de la función

//Ejemplo 3: usar una funcion como variable (Como el ejemplo 1)
var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";

//Ejemplo 4: No usar la funcion como variable (Como el ejemplo 2)
var text = "The temperature is " + toCelsius(77) + " Celsius";


//Variables locales:
//existen dentro de una funcion y se eliminan cuando estas terminan, entonces 
//yo puedo usar variables locales con el mismo identificador cuantas veces quiera y estén en funciones diferentes