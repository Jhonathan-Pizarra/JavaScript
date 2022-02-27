/*Las clase de JS
Las clases de JavaScript son plantillas para objetos de JavaScript.

Sintaxis:
class ClassName {
  constructor() { ... }
}

Ejemplo:
*/
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

/*
El ejemplo anterior crea una clase llamada "Coche".
La clase tiene dos propiedades iniciales: "nombre" y "año".
Una clase de JavaScript no es un objeto, es una plantilla para objetos JavaScript.
*/

//Cuando tienes una clase, la puedes usar para crear objetos
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
myCar.name + " " + myCar.year;
//El método constructor se llama automáticamente cuando se crea un nuevo objeto.

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
//El ejemplo anterior usa la clase Car para crear dos objetos Car .

/*El método constructor
El método constructor es un método especial:

Tiene que tener el nombre exacto "constructor"
Se ejecuta automáticamente cuando se crea un nuevo objeto.
Se utiliza para inicializar las propiedades del objeto.
Si no define un método constructor, JavaScript agregará un método constructor vacío.
*/


//Métodos de clase
/*
Los métodos de clase se crean con la misma sintaxis que los métodos de objeto.
Sintaxis:
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

Ejemplo:
Crear un método de clase llamado "edad", que devuelva la edad del automóvil:
*/
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";

//Puede tener parámetros un método de una clase? -> Si!
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) { //enviamos "x"
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo2").innerHTML=
"My car is " + myCar.age(year) + " 
