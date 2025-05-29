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