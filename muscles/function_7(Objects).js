/* 
Un carro
Una taza
Tú para tu ex

Todos elllos y muchos más son objetos en la vida real,
todos ellos tienen propiedades: color, forma, peso, etc.

sin embargo puedo decir que todos los carros, tiene las mismas propiedades, pero diferentes valores en los atributos que las componen
por ejemplo: todos los carros tienen 4 ruedas, pero no todos tienen el mismo color
             todos los carros están pueden circular, pero no todos están circulando. 

Objeto: carro
propiedad: nombre, color, peso, etc.
metodo: detenerse, avanzar, prenderse, etc.

Los objetos también son variables. Pero los objetos pueden contener muchos valores.
*/

//Hagámos un recorderis
var carro = "Camaro"; //esto es una variable
var objCarro = { //es un objeto, que al final viene siendo una variable pero con múchos valores
    Nombre: "XYZ-98IO",
    Modelo: "Camaro",
    Color: "Azul",
    Precio: 123.78
};

//Los objetos son contenedores de propiedades (Nombre, Modelo, Color) o métodos (Moverse, zumbar, etc.)

/*ACCEDER A LAS PROPIEDADES( puedo hacerlo de 2 formas)
Propiedades son los nombres de pila de los valores 
es decir, las propiedades del objCarro serínan: Nombre, Modelo, COlor
Y el valor de la propiedad del ObjCarro serían: "XYZ-98IO", "Camaro", "Azul"
*/
objCarro.Color; //document.getElementById("demo").innerHTML = objCarro.Nombre + " " + objCarro.Precio;
objCarro["Color"]; //document.getElementById("demo").innerHTML = objCarro["Nombre"] + " " + objCarro["Precio"];

//MÉTODOS
//Los objetos también pueden tener métodos .
//Los métodos son acciones que se pueden realizar en objetos
//Los métodos se almacenan en propiedades como definiciones de funciones .
//ASÍ:
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() { //holi, soy un músculo!
      return this.firstName + " " + this.lastName; //En una definición de función, this se refiere al "propietario" de la función.
      //this.firstName significa la firstName propiedad de este objeto. 
      //Es decir, this es quien hace referencia a la persona (que viene a ser un objeto) que posee este firstName
    }                                                                                                                                                              
  };

  //Entonces, se dice que: "Un método es una función alamacena como una propiedad en un objeto!"

  //ACCEDER A LOS MÉTODOS
  //Sintaxis: objeto.método()
  person.fullName(); //document.getElementById("demo").innerHTML = person.fullName();
  person.fullName; //acceder sin los paréntesis te devolverá la edfinicion de la funcion
  
  //NO HAGAS ESTO NUNCA
    /*
    var x = new String();        // Declares x as a String object
    var y = new Number();        // Declares y as a Number object
    var z = new Boolean();       // Declares z as a Boolean object
    */
//Cuando se declara una variable de JavaScript con la palabra clave " new", la variable se crea como un objeto. Evita String, Number y Boolean objects. Complican su código y ralentizan la velocidad de ejecución.

//Los objetos no se pueden comparar:
var x = new String("John");             
var y = new String("John");

//Normalmente, los números/bolleans/cadenas de JavaScript son valores primitivos creados a partir de literales:
var x = 123;
var x = false;

//Pero los números/bools/string también se pueden definir como objetos con la palabra clave new:
var y = new Number(123);
var y = new Boolean(false);

// (x == y) is false because x and y are objects
// (x === y) is true porque tienen el mismo valor

//Recuerda: la comparación de dos objetos JavaScript siempre devolverá false