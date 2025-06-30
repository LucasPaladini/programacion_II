enviarDatos()

function tomarDatos() {
    let name = document.getElementById("name").value;
    let mensaje = document.getElementById("mensaje").value;
    let fecha = new Date().toLocaleString();

    localStorage.setItem("name", name);
    localStorage.setItem("mensaje", mensaje);
    localStorage.setItem("fecha", fecha);

    enviarDatos()
}

    function enviarDatos () {

    let name = localStorage.getItem("name");
    let mensaje = localStorage.getItem("mensaje");
    let fecha = localStorage.getItem("fecha");


    const divPadre = document.querySelector(".nav-datos");

    const nuevoDetalle1 = document.createElement("div");
    nuevoDetalle1.className = "datos detalle1";
    nuevoDetalle1.innerHTML = `
      <p>${name}</p>
      <p>${fecha}</p>
    `;

    const nuevoDetalle2 = document.createElement("div");
    nuevoDetalle2.className = "datos detalle2";
    nuevoDetalle2.innerHTML = `${mensaje}`;

    divPadre.appendChild(nuevoDetalle1);
    divPadre.appendChild(nuevoDetalle2);
}
