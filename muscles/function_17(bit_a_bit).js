//ver primero teoría: bitAbit

//¿Qué ha pasado?
/*JavaScript almacena números como números de coma flotante de 64 bits, 
pero todas las operaciones bit a bit se realizan en números binarios de 32 bits.
Antes de realizar una operación bit a bit, JavaScript convierte números en enteros de 32 bits con signo.
Una vez realizada la operación bit a bit, el resultado se vuelve a convertir a números JavaScript de 64 bits.

Dado que JavaScript utiliza enteros de 32 bits con signo(+ -), devolverá -6.
O sea convertir 5 a binario debería ser: 101
pero ya conoces a JS usando 32 bits...: 00000000000000000000000000000101 

pero y si tuvieramos un signo delante del 5... ~5
En Js un entero con signo usa el bit más a la izquierda como signo menos.
O sea convertir ~5 a binario en Js viene a ser: 1010
Luego JS se encarga de completar los 32 bits:
11111111111111111111111111111010 (~ 5 = -6)

*/

//Tablas de verdad: relaciones lógicas
//ver teoría: bitwise ANDyOR, Xor

/*
AND &
Operation	Result
0 & 0	      0
0 & 1	      0
1 & 0	      0
1 & 1	      1


OR |
Operation	Result
0 | 0	      0
0 | 1	      1 
1 | 0	      1
1 | 1	      1


XOR ^
Operation	Result
0 ^ 0	      0
0 ^ 1	      1 
1 ^ 0	      1
1 ^ 1	      0 


Decimal	        Binary
5	          00000000000000000000000000000101 
1	          00000000000000000000000000000001 
5 & 1	      00000000000000000000000000000001 (1)
5 | 1	      00000000000000000000000000000101 (5)



5 = 101
1 = 001

1 & 0 = 0
0 & 0 = 0
1 & 1 = 1

001 = 1 por lo tanto:
*/
var x = 5 & 1;   //returns 1


//Del mismo modo podemos demostrar que:
var x = 5 | 1;   //5 | 1 : devuvlve 1
var x = 5 ^ 1;  // 5 ^ 1 : devuelve 4
var x = ~5;     //~5     : devuvle 6
var x = 5 << 1; // llenado de ceros, si 101 es 5, 1010 es 10 por tanto : devuvlve 10

//Más info en: https://www.w3schools.com/js/js_bitwise.asp

/*----------------------------------------------------------------------------------*/

 //Convertir: Decima a binario
document.getElementById("demo").innerHTML = dec2bin(-5);

function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

//Convertir: Binario a decimal
document.getElementById("demo").innerHTML = bin2dec(010);

function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}