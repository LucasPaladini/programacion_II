
let listaNombres = []

function ingresarUsuarios(){
    let nombre = prompt("Ingresar nombres de usuarios");
    listaNombres.push(nombre);

    if (nombre.length < 1) {
        alert("El nombre no puede estar vacío.");
    } else {
        localStorage.setItem("Nombres", listaNombres);
    };
};

function mostrarStorage(){
    let obtenerLocalStorage = localStorage.getItem("Nombres");
    let newArray = obtenerLocalStorage.split(",")

    let nombres = document.getElementById("contenedorNombres");
    nombres.innerHTML = "";
    for (let vuelta = 0;vuelta < newArray.length; vuelta++) {
        nombres.innerHTML += newArray[vuelta] + "<br>";
    }
};



setInterval(function () {
    mostrarStorage();
}, 10000);







