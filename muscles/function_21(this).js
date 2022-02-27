/*¿Qué es "this"?
La palabra clave this de JavaScript se refiere "al objeto al que pertenece."
* Este color le pertenece a este auto
* Este casa le pertenece a esta pertona
Etc.
*/

/*This
Tiene diferentes valores según donde se utilice:

En un método, this se refiere al objeto propietario .
Solo, this se refiere al objeto global .
En una función, this se refiere al objeto global .
En una función, en modo estricto, this es undefined.
En un evento, this se refiere al elemento que recibió el evento.
Los métodos como call() y apply() this pueden referirse a cualquier objeto .

Vamos a verlos...!
*/


//This en Método
//En un método de objeto, this se refiere al " propietario " del método.
//Ejemplo:
// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName(); //El objeto person es el propietario del método fullName .
//Por tanto de este objeto acceder al método fullName hace lo que defina la función, en este caso devolver "este nombre" de este objeto, y "este" apellido de este mismo objeto
//En otras palabras: this.firstName significa la propiedad firstName de este objeto (persona).


//This solo
//Cuando se usa solo, el propietario es el objeto Global, por lo que se this se refiere al objeto Global.
//En una ventana del navegador, el objeto global es [object Window]:
//también podríamos usar el módo estricto:
/* "use strict";*/
var x = this;
document.getElementById("demo2").innerHTML = x;


/*This Function
En una función de JavaScript, el propietario de la función es el enlace predeterminado para this.
Entonces, en una función, this se refiere al objeto Global [object Window].
*/
document.getElementById("demo3").innerHTML = myFunction();
function myFunction() {
  return this;
}

/*This function (estricta)
El modo estricto de JavaScript no permite el enlace predeterminado.
Entonces, cuando se usa en una función, en modo estricto, this es undefined.
*/
"use strict";
document.getElementById("demo4").innerHTML = myFunction();
function myFunction() {
  return this;
}

/*
this en funciones se comporta de manera diferente en modo estricto.
this se refiere al objeto que llamó a la función.
Si no se especifica el objeto, las funciones en modo estricto regresarán undefined
*/

/* this en los controladores de eventos
En los controladores de eventos HTML, this se refiere al elemento HTML que recibió el evento:
*/
<button onclick="this.style.display='none'">Click to Remove Me!</button>


/*Enlace de método de objeto
En estos ejemplos, this es el objeto persona (El objeto persona es el "propietario" de la función):
*/
// Create an object:
var person = {
  firstName  : "John",
  lastName   : "Doe",
  id     : 5566,
  myFunction : function() {
    return this; //this hace referencia a este objeto a persona porque persona es el propietario de esta funcion
  }
};

// Display data from the object:
document.getElementById("demo5").innerHTML = person.myFunction(); //returns [object Object]


// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("demo6").innerHTML = person.fullName();
//En otras palabras: this.firstName significa la propiedad firstName de este objeto (persona).


/*Enlace de función explicita
Los métodos call() y apply() son métodos JavaScript predefinidos.
Ambos pueden usarse para llamar a un método de objeto con otro objeto como argumento.
*/
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
var x = person1.fullName.call(person2); 
document.getElementById("demo7").innerHTML = x; 
//Aqui usó la definición de la función de persona 1 pero usando los atributos de persona 2

