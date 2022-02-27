//Objeto matemático JavaScript
//El objeto JavaScript Math le permite realizar tareas matemáticas con números.
Math.PI;            // returns 3.141592653589793

//Math.round ()
//Math.round(x) devuelve el valor de x redondeado a su número entero más cercano:
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4

//Math.pow ()
//Math.pow(x, y) devuelve el valor de x elevado a y:
Math.pow(8, 2);      // returns 64

//Math.sqrt ()
//Math.sqrt(x) devuelve la raíz cuadrada de x:
Math.sqrt(64);      // returns 8

//Math.abs ()
//Math.abs(x) devuelve el valor absoluto (positivo) de x:
Math.abs(-4.7);     // returns 4.7

//Math.ceil ()
//Math.ceil(x) devuelve el valor de x redondeado hasta a su número entero más próximo:
Math.ceil(4.4);     // returns 5

//Math.floor ()
//Math.floor(x) devuelve el valor de x redondeado hacia abajo a su número entero más próximo:
Math.floor(4.7);    // returns 4

//Math.sin ()
//Math.sin(x) devuelve el seno (un valor entre -1 y 1) del ángulo x (expresado en radianes).
Math.sin(90);   ///en rads = 0.8939966636005579

//Si desea usar grados en lugar de radianes, debe convertir grados a radianes:
//Ángulo en radianes = Ángulo en grados * PI / 180.
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)


//Math.cos ()
//Math.cos(x) devuelve el coseno (un valor entre -1 y 1) del ángulo x (expresado en radianes).
Math.cos(90);  //0.4480736161291702 porque está en radianes

//Si desea usar grados en lugar de radianes, debe convertir grados a radianes:
//Ángulo en radianes = Ángulo en grados x PI / 180.
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)


//Math.min () y Math.max ()
//Math.min()y Math.max()se puede usar para encontrar el valor más bajo o más alto en una lista de argumentos:
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150

//Math.random ()
//Math.random() devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusivo):
Math.random();     // returns a random number, por ejemplo 0.8108268094006241

//Math.random() siempre devuelve un número menor que 1.

//Si quiero un numero entero:
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99

//Recuerda que el conteo se da desde cero, así que si quieres que vaya desde 0 a 100 sería *(100+1)

//Número aleatorio entre a y b
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Ver teoría: constantesMath


/*Constructor matemático
A diferencia de otros objetos globales, el objeto Math no tiene constructor. Los métodos y propiedades son estáticos.
Todos los métodos y propiedades (constantes) se pueden utilizar sin crear primero un objeto Math

Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)

Más completo: https://www.w3schools.com/jsref/jsref_obj_math.asp
*/