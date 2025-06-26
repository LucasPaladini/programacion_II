function tomarDatos () {
    let mensaje = document.getElementById("mensaje").value;
    localStorage.setItem("mensaje", mensaje);
    let recolectar = localStorage.getItem("mensaje");
    document.getElementById("mensaje").innerText = recolectar;
    alert(mensaje);
}