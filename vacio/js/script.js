function agregar() {
    let texto = document.getElementById('texto').value;
    let numero = document.getElementById('numero').value;
    localStorage.setItem("texto", texto);
    localStorage.setItem("numero", numero);

    let parrafo = document.createElement("p");
    parrafo.textContent = texto + numero;

    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(parrafo);
}
