function mostrarIngreso() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    if (nombre === "" || apellido === "") {
        alert("El nombre y apellido mi rey");
        return
    }
    document.getElementById("ingresarNombre").innerHTML = nombre;
    document.getElementById("botonIngreso").disabled = true;
}


