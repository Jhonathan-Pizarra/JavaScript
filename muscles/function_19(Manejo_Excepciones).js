/*Errores de JavaScript 
¡Se producirán errores!
Al ejecutar código JavaScript, pueden ocurrir diferentes errores.
Los errores pueden ser errores de codificación cometidos por el programador, errores debidos a una entrada incorrecta y otras cosas imprevisibles.

*/

//JavaScript intenta atrapar esos errores
/*
 try le permite probar un bloque de código en busca de errores.
 catch le permite manejar el error. Se ejecutará en caso de que hay aencontrado un error en try
*/
//Cometamos un error, en ves de alert, ponemos adlert
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}

//Se ejecutará el mensaje de errorhr
/*
Cuando ocurre un error, JavaScript normalmente se detiene y genera un mensaje de error.
El término técnico para esto es: JavaScript lanzará una excepción (lanzará un error) .
pero lo que realmente sucede es que JavaScript creará un objeto Error con dos propiedades: nombre y mensaje .

Pero... y si quisieramos crear un mensaje personalizado?: throw
Si usa throwjunto con try y catch, puede controlar el flujo del programa y generar mensajes de error personalizados.
*/

//La throw le permite crear errores personalizados.
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
//Si por ejemplo escribes un numoer mayor que 10 te dirá "too hight"



//La finally
//esta declaración le permite ejecutar código, después de try y catch, se ejecutará independientemente del resultado.
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10)   throw "is too high";
    if(x < 5)  throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
  finally {
    document.getElementById("texto").value = "holaMudno!";
  }
}


/*
Cuando ocurre un error, JavaScript normalmente se detiene y genera un mensaje de error.
El término técnico para esto es: JavaScript lanzará una excepción (lanzará un error) .
pero lo que realmente sucede es que JavaScript creará un objeto Error con dos propiedades: nombre y mensaje .
*/
//En este punto ver: teoería: valoreserrores

//An EvalError indica un error en la función eval (). Las versiones más nuevas de JavaScript no arrojan EvalError. Utilizan SyntaxError en su lugar.
// Se lanza RangeError si usa un número que está fuera del rango de valores legales. (Esto por ejemplo lo vemos en las matrices, cuando con un bucle intentamos acceder a un elemento que no existe)
//Se lanza ReferenceError si se referencia a una variable que no ha sido declarada
//Se lanza TypeError(error de escritura) A si usa un valor que está fuera del rango de tipos esperados: por ejemplo introducinr una letra cuando te piden número, etc

//Más sobre errores en: https://www.w3schools.com/jsref/jsref_obj_error.asp






