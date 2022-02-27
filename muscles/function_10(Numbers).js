/*Números
 Los números de JavaScript son siempre punto flotante de 64 bits
A diferencia de muchos otros lenguajes de programación, JavaScript no define diferentes tipos de números, como enteros, cortos, largos, de punto flotante, etc.
Los números de JavaScript siempre se almacenan como números de punto flotante de doble precisión

Este formato almacena números en 64 bits, donde el número (la fracción) se almacena en los bits 0 a 51, el exponente en los bits 52 a 62 y el signo en el bit 63, para un total de 64 bits:
*/
/*----------------------------------------------------------------------------------*/

/*Precisión
Los números enteros (números sin un período o notación exponente) tienen una precisión de hasta 15 dígitos.
*/
var x = 999999999999999;   // x will be 999999999999999 (digitos:15)
var y = 9999999999999999;  // y will be 10000000000000000 (digitos:16)

//El número máximo de decimales es 17, pero la aritmética de coma flotante no siempre es 100% precisa:
var x = 0.2 + 0.1;         // x will be 0.30000000000000004
//Para resolver el problema anterior, es útil multiplicar y dividir:
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3


//¿Por qué no siempre es precisa?
/*
Recuerda que las computadoras no calculan en decimal sino en binario, y convertir un numero como 0.1 (un numero racional)
o sea 0.1 es (1/10) y es un número racional
0.2 (2/10) es un número racional
0.3 también es racional
Y es fácil operar con ellos en un sistema decimal

Un número irracional, por otro lado, es el resultado de una fracción que no se puede representar con una serie finita de dígitos después del punto.
0.252525252, 0.33333
No podemos medir exactamente 1/3, ni 2/10, ni 1/10 en base 10 porque su resultado es indefinido (0.333333333 ....).
Es decir
Dado que para una computadora todos los cálculos que involucran números racionales como "0.1" y "0.2" son una aproximación del número original en decimal, no sumarán "0.3" sino un número que es extremadamente cercano a él.
entonces, nos vemos condenados a tener resultados inesperados:

0.1+0.2 == 0.3; //returns false
0.5+0.1 == 0.6 //return true
*/
/*----------------------------------------------------------------------------------*/

/*Adición
JavaScript usa el operador + tanto para la suma como para la concatenación.
*/
//Si suma dos números, el resultado será un número:
var x = 10;
var y = 20;
var z = x + y;           // z will be 30 (a number)
//Si agrega dos cadenas, el resultado será una concatenación de cadenas:
var x = "10";
var y = "20";
var z = x + y;           // z will be 1020 (a string)
//Si agrega un número y una cadena, el resultado será una concatenación de cadenas:
var x = 10;
var y = "20";
var z = x + y;           // z will be 1020 (a string)
//Si agrega una cadena y un número, el resultado será una concatenación de cadenas:
var x = "10";
var y = 20;
var z = x + y;           // z will be 1020 (a string)
//Así que cuidado... porque es un error común:
var x = 10;
var y = 20;
var z = "The result is: " + x + y;    //The result is: 1020
//Recuerda que JS evalúa de izqueirda a derecha
var x = 10;
var y = 20;
var z = "30";
var result = x + y + z;    //Reusltado es 3030 y es una string

/*
El intérprete de JavaScript funciona de izquierda a derecha.
Los primeros 10 + 20 se suman porque xey son ambos números.
Entonces 30 + "30" está concatenado porque z es una cadena.
*/
/*----------------------------------------------------------------------------------*/

/*Cadenas numéricas
 JavaScript intentará convertir cadenas en números en todas las operaciones numéricas:
*/
//Funciona con (/)
var x = "100";
var y = "10";
var z = x / y;       // z will be 10
//Funciona con (*)
var x = "100";
var y = "10";
var z = x * y;       // z will be 1000
//Funciona con (-)
var x = "100";
var y = "10";
var z = x - y;       // z will be 90
//Pero (+) no, recuerda que JS usa + para concatenar cadenas
var x = "100";
var y = "10";
var z = x + y;       // z will not be 110 (It will be 10010)
/*----------------------------------------------------------------------------------*/

/*NaN
NaN es una palabra reservada de JavaScript que indica que un número no es un número legal.
*/
var x = 100 / "Apple";  // x will be NaN (Not a Number)
//Sin embargo, si la cadena contiene un valor numérico, el resultado será un número:
var x = 100 / "10";     // x will be 10
//Puede utilizar la función JavaScript global isNaN()para averiguar si un valor es un número:
var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number
//Si lo usa NaNen una operación matemática, el resultado también será NaN:
var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN
//O también una concatenación si hablamos en numeros cadenas
var x = NaN;
var y = "5";
var z = x + y;         // z will be NaN5
/*----------------------------------------------------------------------------------*/


/*Infinito
Infinity(o -Infinity) es el valor que devolverá JavaScript si calcula un número fuera del mayor número posible.
*/
//Podemos tener infinito de operaciones tales como:
var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity
//Bucles
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}
//Infinity es un número: typeof Infinitydevuelve number.
typeof Infinity;     // returns "number" (Nadie sabe cuál)
/*----------------------------------------------------------------------------------*/


/*Hexadecimales
JavaScript interpreta las constantes numéricas como hexadecimales si van precedidas de 0x.
*/
var x = 0xFF;        // x will be 255

/*
Nunca escriba un número con un cero inicial (como 07).
Algunas versiones de JavaScript interpretan los números como octales si están escritos con un cero a la izquierda.

Se puede usar el toString()método para generar números desde en base 2 a base 36 .
Hexadecimal es base 16 . 
El decimal es base 10 . 
Octal es base 8 . 
El binario es base 2 .
*/

var myNumber = 32;
myNumber.toString(10);  // returns 32 (32 en base 10 es 32)
myNumber.toString(32);  // returns 10 (32 en base 32 es 10)
myNumber.toString(16);  // returns 20 (32 en base 16 es 20)
myNumber.toString(8);   // returns 40 (32 en base 8 es 40)
myNumber.toString(2);   // returns 100000 (32 en base 2 es 10000)
/*----------------------------------------------------------------------------------*/

/*Métodos con números
Los valores primitivos (como 3.14 o 2014), no pueden tener propiedades y métodos (porque no son objetos).

Pero con JavaScript, los métodos y propiedades también están disponibles para valores primitivos, 
porque JavaScript trata los valores primitivos como objetos cuando ejecuta métodos y propiedades.
*/

//toString: El método toString() devuelve un número como una cadena
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23

//toExponential() devuelve un número redondeado y escrito en notación exponencial.
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0
//El parámetro es opcional. Si no lo especifica, JavaScript no redondeará el número.
x.toExponential();      // retorna 9.656e+0


//toFixed() devuelve un numero con un número específico de decimales:
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66 (Perfecto para trabajar con dinero)
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

//toPrecision() devuelve un número escrito con una longitud especificada:
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

//valueOf() devuelve un número como un número.
var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23

/*----------------------------------------------------------------------------------*/


/*Conversión de números
Hay 3 métodos de JavaScript que se pueden utilizar para convertir variables en números:
  * El Number()método
  * El parseInt()método
  * El parseFloat()método
Estos métodos no son métodos numéricos , sino métodos JavaScript globales .
*/

//Number() se puede utilizar para convertir variables de JavaScript en números:
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

//Number() también puede convertir una fecha en un número:
Number(new Date("2017-09-30"));    // returns 1506729600000 Ese número es el número de milisegundos desde el 1.1.1970. hasta esa fecha

//parseInt()analiza una cadena y devuelve un número entero. Se permiten espacios. Solo se devuelve el primer número:
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

//parseFloat()analiza una cadena y devuelve un número. Se permiten espacios. Solo se devuelve el primer número:
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

//MAX_VALUE devuelve el mayor número posible en JavaScript.
var x = Number.MAX_VALUE;  //1.7976931348623157e+308
var x = Number.MIN_VALUE;   //5e-324
var x = Number.POSITIVE_INFINITY;  //infinity
var x = 1 / 0;     //infinity
var x = -1 / 0;     //-infinity
var x = Number.NEGATIVE_INFINITY;   //-Infinity














