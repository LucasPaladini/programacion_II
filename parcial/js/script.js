function ingresarRecomendacion() {
    var nombre = document.getElementById("name").value;
    var comentario = document.getElementById("mensaje").value;
    var fecha = new Date().toLocaleDateString();

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("comentario", comentario);
    localStorage.setItem("fecha", fecha)


}
mostrarRecomendacion()

function mostrarRecomendacion() {
    var nombre = localStorage.getItem("nombre");
    var comentario = localStorage.getItem("comentario");
    var fecha = localStorage.getItem("fecha");

    var divNombre = document.createElement("div");
    divNombre.className = "datos_detalle1";
    divNombre.innerHTML = nombre + "<br>" + fecha;

    var divComentario = document.createElement("div");
    divComentario.className = "datos_detalle2";
    divComentario.innerHTML = comentario;

    let contenedor = document.getElementById("contenedorRecomendaciones");
    contenedor.appendChild(divNombre);
    contenedor.appendChild(divComentario);

}


