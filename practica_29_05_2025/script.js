    var formulario = document.getElementById('Formulario');
    var nombreInput = document.getElementById('nombre');

    formulario.addEventListener('submit', function(event) {
        if (nombreInput.value === '') {
    alert('"Nombre" no puede estar vacío.');
}
});

    function botonOcultar() {
        let contenedor = document.getElementById('contenedor');
        contenedor.style.display === 'none' ? contenedor.style.display = 'block' : contenedor.style.display = 'none';
    }

    function cambiarColor() {
        var color=document.getElementById('color');
        document.body.style.backgroundColor=color.value;
    }


    // Ejer 4

    let clics = 0;

    function contadorClics() {
        clics = clics + 1;
        document.getElementById('contador').textContent = 'Clics: ' + clics;
    }

    // Ejer 4

    // Ejer 5

    function mostrarFecha() {
        let fecha = new Date();
        let actual = fecha.toLocaleString()
        document.getElementById('fecha').textContent = "Fecha actual: " + actual;
    }


    // Ejer 5

    // Ejer 6

    function mostrarMensaje() {
        let mensaje = document.getElementById("ingresar_texto").value;
        alert(mensaje);
    }

    // Ejer 6