/*JSON
JSON es un formato para almacenar y transportar datos.
JSON se usa a menudo cuando los datos se envían desde un servidor a una página web.

JSON son las siglas de J ava S cript O bject N otation
JSON es un formato de intercambio de datos ligero
JSON es independiente del idioma, osea la sintaxis JSON se deriva de la sintaxis de notación de objetos de JavaScript, pero el formato JSON es solo texto. El código para leer y generar datos JSON se puede escribir en cualquier lenguaje de programación.
JSON es "autodescriptivo" y fácil de entender.

Ejemplo:
Esta sintaxis JSON define un objeto de empleados: una matriz de 3 registros de empleados (objetos):
*/

{
  "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]
}

/*
El formato JSON es sintácticamente idéntico al código para crear objetos JavaScript.
Debido a esta similitud, un programa JavaScript puede convertir fácilmente datos JSON en objetos JavaScript nativos.
*/


/*
Reglas de sintaxis JSON:

- Los datos están en pares de nombre / valor
- Los datos están separados por comas
- Las llaves contienen objetos
- Los corchetes contienen matrices(arreglos)
*/

/*Datos JSON: un nombre y un valor
Los datos JSON se escriben como pares de nombre / valor, al igual que las propiedades de los objetos de JavaScript.
"firstName":"John"
*/
//OJO: Los nombres JSON requieren comillas dobles. Los nombres de JavaScript no (Ver: function_7(Objetos).js).

/*Matrices JSON
Las matrices JSON se escriben entre corchetes.

Al igual que en JavaScript, una matriz puede contener objetos:

"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]

 el objeto "empleados" es una matriz. Contiene tres objetos.
Cada objeto es un registro de una persona (con un nombre y un apellido).
*/


//Conversión de un texto JSON en un objeto JavaScript
/*
Un uso común de JSON es leer datos de un servidor web y mostrar los datos en una página web.
¿Cómo lo hacemos?, convirtiendo texto a JSON

*/
//Primero, creeamos una cadena de JavaScript que contenga la sintaxis JSON:
var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

//Luego, use la función incorporada de JavaScript JSON.parse()para convertir la cadena en un objeto JavaScript:
obj = JSON.parse(text);

//Finalmente, use el nuevo objeto JavaScript en su página:
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName; //retursn Anna Smith