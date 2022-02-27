//Comparación de JavaScript y operadores lógicos

/*Se usan operadores de comparación para evaluar la veracidad o falsedad de una expresión
Ver teoría: OperadoresComparacion 1 y 2
*/

//Operador condicional (ternario)
//Primero ver teoría: operadores lógicos

//El operador ternario es que dependiendo de si una condición se cumple se asigna un valor (Es un if pero más compacto)
//Sintaxis: variablename = (condition) ? value1:value2 
var voteable = (age < 18) ? "Too young":"Old enough";
//Si age es mayor que 18 se asigna edad suficiente, si no, muy joven

//Comparación entre diferentes tipos: ver teoría comparaciónTipos y Meme

//Al comparar dos cadenas, "2" será mayor que "12", porque (alfabéticamente) 1 es menor que 2.
//Para asegurar un resultado adecuado, las variables deben convertirse al tipo adecuado antes de la comparación:
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}

/*----------------------------------------------------------------------------------*/

//Condicionales
//Muy a menudo, cuando escribe código, desea realizar diferentes acciones para diferentes decisiones.

/*
En JavaScript tenemos las siguientes declaraciones condicionales:
Se usa if 
  para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera
else 
  para especificar un bloque de código que se ejecutará, si la misma condición es falsa
else-if 
  para especificar una nueva condición para probar, si la primera condición es falsa
Switch 
  para especificar muchos bloques alternativos de código que se ejecutarán
*/

//ifs
//Utilice if para especificar un bloque de código JavaScript que se ejecutará si una condición es verdadera.
if (hour < 18) {
  greeting = "Good day";
}

//else
//Utilice else para especificar un bloque de código que se ejecutará si la condición es falsa.
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//if..else
//Utilice la else ifdeclaración para especificar una nueva condición si la primera condición es falsa.
if (time < 10) {
  greeting = "Good morning";
} else if (time < 19) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

//Utilice switch para seleccionar uno de los muchos bloques de código que se ejecutarán.
switch (new Date().getDay()) { //En este caso usamos el número del día de la semana para calcular el nombre del día de la semana:
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "Jhonday hehe";
}

//Nota: Si omite la instrucción break, el siguiente caso se ejecutará incluso si la evaluación no coincide con el caso.
//La default especifica el código que se ejecutará si no hay coincidencia
//Los casos de cambio utilizan una comparación estricta (===). Esto quiere decir que el valor debe corresponder al caso
var x = "0";
switch (x) {
  //case 0: //error
  case "0": //correcto, asi que valdría para menus con "letras"
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}




