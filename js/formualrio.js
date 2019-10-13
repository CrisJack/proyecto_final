function capturar(){
    var dato = document.getElementById("nombre").value;
    var dato1 = document.getElementById("apellido").value;
    var dato2 = document.getElementById("email").value;
    var dato3 = document.getElementById("mensaje").value;
    document.getElementById("resultado").innerHTML = " Nombres: "+dato+"<br>"+"Apellidos: "+dato1+"<br>"+"Email: "+"<ins>"+dato2+"</ins>"+"<br>"+"Mensaje: "+dato3;
}

//capturar();

var darClic = document.getElementById("boton").addEventListener("click", capturar);
