function enviarForm() {

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value;



    let parrafo = document.createElement("p");
    let texto = document.createTextNode(nombre + " " + apellido + " " + edad + " " + email);


    ocultar()
    parrafo.appendChild(texto);
    document.body.appendChild(parrafo);

    let botonVolver = document.createElement("button");
    botonVolver.textContent = "Volver al formulario";
    botonVolver.onclick = function mostrar() {
        document.getElementById("formularioEditable").style.display = "block";
    }

    document.body.appendChild(botonVolver);

}

function ocultar() {
    document.getElementById("formularioEditable").style.display = "none";
}


