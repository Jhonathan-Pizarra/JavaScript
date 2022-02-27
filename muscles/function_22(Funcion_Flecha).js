/*Funcione Flecha
Las funciones de flecha nos permiten escribir una función con una sintaxis más corta:
*/
//Antes
hello = function() {
  return "Hello World!";
}

//Con Función flecha:
hello = () => {
  return "Hello World!";
}

//Pero Jhonathan, está igual 3 lineas...No es así ¡Se vuelve más corto! 
//Si la función tiene solo una declaración(una sola linea de código) y la declaración devuelve un valor, puede eliminar los corchetes y la palabara return:
hello = () => "Hello World!";
//Nota: Esto solo funciona si la función tiene solo una declaración.


//Función de flecha con parámetros:
hello = (val) => "Hello " + val; 
hello = val => "Hello " + val;
//Son exactamente lo mismo, solo diferentes maneras de escribir

//Espera, ¿Y las funciones que tienen this?
/*
El manejo de this las funciones de flecha también es diferente en comparación con las funciones normales.
En resumen, con las funciones de flecha no hay vinculación de this.

* En las funciones normales, la palabra clave this representaba el objeto que llamaba a la función, que podía ser la ventana, el documento, un botón o lo que fuera.
* Con las funciones de flecha, this siempre representa el objeto que definió la función de flecha.

ver teoría: funcionFlecha_ref y funcionFlecha_ref2
¿Lo viste?
Con una función regular this representa el objeto que llama a la función:
Con una flecha la función this representa al propietario de la función:

Recuerda estas diferencias cuando trabajes con funciones. A veces, el comportamiento de las funciones regulares es lo que desea, si no, use las funciones de flecha.
*/

