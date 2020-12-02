/*Js puede imprimir en 4 posibilidades:
innerHTML //En un elemento HTML
document.write() //en el HTML
window.alert() // en un cuadro de alerta
console.log() // en el navegador
 */

 /*
 Para acceder a un elemento html usamos: document.getElementById(id) 
 en ese caso el elemento debe tener un "id"
 el innerHTML la propiedad que define lo que tendrá el nuevo elemento html

 quedando más o menos así:
 */

document.getElementById("ejemplo_1").innerHTML = 5 + 6; //5+6 es el valor que tendrá, por el que se reemplazará en ese elemento html 
                                                        //También puede ser una variable "x" previamente declarada e inicializada con 5 + 6

/*Para hacer pruebas usamos el document.write
o si algo no está valiendo en el html
pero no para nada más, cuidado!
 */


 /*Para emitir un cuadro de alerta usamos:
 wndows.alert(), lo cual mostará los damos que mandemos como parámetors!
 Algo así:
 */
window.alert("Me encanta JavaScript! :D");

 /*Para fines de depuración, puede llamar al console.log()método en el navegador para mostrar datos.
 pruebas como de si se está ejecutando algo correctamente, entrando a un if, etc
 */

 console.log("Oye, aqui estoy!");
