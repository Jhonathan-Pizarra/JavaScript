/*
Click en un botón
Una página se cargó
Se cargó un archivo, o no se cargó correctamente
etc, etc 

Todos esos son eventos.
*/

/*
JavaScript re permite ejecutar código cuando se detectan, o desembocan eventos.
en un elemento html (<p> <button> <h1> etc) podemos agregar atributos (style, id, class, row) del tipo que controlan eventos (onClick, onClick, Etc...)

sintaxis: <elemento atributo(de evento) = valor(JavaScript) ></elemento>
es lo mismo para Css: <elemento atributo(de estilo) = valor(Css)></elemento> | ejemplo:
 <button style='background-color':red>Clickea me!</button>
 <button onclick="document.getElementById('demo').innerHTML = Date()">Clickea me!</button>
 <button onclick="this.innerHTML=Date()">The time is?</button>
 <button onclick="displayDate()">The time is?</button>


Diferencia entre los 3 últimos:
    el uno hará que el elememto con id "demo" cambie en su contendio y se le reemplaze por la hora actual
    el otro hará que el mismo elemento (o sea el botón) cambié su contendio y se le reemplaze por la hora actual
    y el último hará que al presionarse el botón, se llame una función (Qué deberá existir en un Js vinculado) 
        
Cabe señalar que la función en este último ejemplo debe estar definida como en el 1 er caso:  <button onclick="document.getElementById('demo').innerHTML = Date()">Clickea me!</button> si quieres que se reemplaze por un evento con ese id
no puedo hacer esto: this.document.innerHTML = Date(); ya que ese this hace refencia al js vinculado, y no al elemento html (que sería como para el caso 2, que se cambie ahí mismo el botón)

pero si quires que el boton al presionarse cambie y se reemplaze bastaría con darle un id a ese botón para que se le aplique lo que dispone la función
*/


function displayDate(){
    document.getElementById("demo3").innerHTML = Date();
}

/*Mira en teoría la imagen "otrosEventos" para que te enteres de qué otros hay! :D */