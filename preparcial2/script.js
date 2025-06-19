let dolar = 1200;
let euro = 1400;

monedas = {dolar: 1200,
euro: 1400}

let inputArs = document.getElementById("campo_ingreso").value;
let moneda = document.getElementById("seleccion").value;

function botonCotizacion() {
    document.getElementById('campo_texto').textContent = "Valor total: " + Number(inputArs) * Number(monedas[moneda]);
}

function agregarSeccion() {
    let moneda_valor = document.getElementById("moneda_valor").value;
    let moneda_nueva = document.getElementById("moneda_nueva").value;

    moneda.options.add(new Option(moneda_nueva, moneda_nueva));
    monedas[moneda_nueva] = moneda_valor;
}












//
//
//
//
// var formulario = document.getElementById('Formulario');
//     var nombreInput = document.getElementById('nombre');
//
//     formulario.addEventListener('submit', function(event) {
//         if (nombreInput.value === '') {
//     alert('"Nombre" no puede estar vacío.');
// }
// });
//
//     function botonOcultar() {
//         let contenedor = document.getElementById('contenedor');
//         contenedor.style.display === 'none' ? contenedor.style.display = 'block' : contenedor.style.display = 'none';
//     }
//
//     function cambiarColor() {
//         var color=document.getElementById('color');
//         document.body.style.backgroundColor=color.value;
//     }
//
//
//     // Ejer 4
//
//     let clics = 0;
//
//     function contadorClics() {
//         clics = clics + 1;
//         document.getElementById('contador').textContent = 'Clics: ' + clics;
//     }
//
//     // Ejer 4
//
//     // Ejer 5
//
//     function mostrarFecha() {
//         let fecha = new Date();
//         let actual = fecha.toLocaleString()
//         document.getElementById('fecha').textContent = "Fecha actual: " + actual;
//     }
//
//
//     // Ejer 5
//
//     // Ejer 6
//
//     function mostrarMensaje() {
//         let mensaje = document.getElementById("ingresar_texto").value;
//         alert(mensaje);
//     }
//
//     // Ejer 6
//
//     // Ejer 7
//
//     function mostrarBienvenida() {
//         let nombre = document.getElementById('bienvenida').value;
//         alert("Bienvenido "+ nombre + "!!!");
//     }
//
//     // Ejer 7
//
//     // Ejer 9
//
//     function cambiarMedidaFuente() {
//         let medida = document.getElementById("medida").value;
//         let texto = document.getElementById("texto");
//         texto.style.fontSize = medida;
//     }
//
//
//     // Ejer 9