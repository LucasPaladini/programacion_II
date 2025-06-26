let listaNombres = []



function guardarNombre() {
    let nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", nombre)
}

function mostrarNombre() {
    let nombre = localStorage.getItem("nombre");
    alert(nombre)
}

function contadorVisitas() {
    let visitas = localStorage.getItem("contadorVisitas");

    if (visitas === null) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }

    localStorage.setItem("contadorVisitas", visitas);
    document.getElementById("contadorTexto").innerText = "Esta página se visitó " + visitas + " veces";
}
contadorVisitas()

function guardarColor() {
    let color = document.getElementById("color").value;
    localStorage.setItem("color", color);
    document.body.style.backgroundColor = color;
}

function insertarUltimoColor() {
    document.body.style.backgroundColor = localStorage.getItem("color");
}
insertarUltimoColor();


function agregarTarea() {
    let tareaNueva = document.getElementById("tareaNueva").value;
    if (tareaNueva === "") {
        alert("Ingresa una tarea señor");
        return
    }

    let nuevaLista = document.createElement("li");
    nuevaLista.innerText = tareaNueva;

    let lista = document.getElementById("listaTareas");
    lista.appendChild(nuevaLista);
}


function temporizador() {
    let TiempoActual = sessionStorage.getItem("tiempo") || 0;
    let TiempoParrafo = document.getElementById("tiempo");
    TiempoParrafo.innerText = TiempoActual;

    let tiempoTotal = setInterval(function() {
        TiempoActual++;
        sessionStorage.setItem("tiempo", TiempoActual);
        TiempoParrafo.innerText = TiempoActual;
        if (TiempoActual >= 15) {
            clearInterval(tiempoTotal);
            alert("Tiempo máximo de 15 segundos");
            TiempoParrafo.innerText = "Tiempo maximo de 15 segundos";
            document.getElementById("tiempo").style.color = "red";
        }
    }, 1000);
}
temporizador();


function guardarNotas() {
    nuevaNota = document.getElementById("nuevaNota").value;
    localStorage.setItem("nuevaNota", nuevaNota);

    let nuevaLista = document.createElement("li");
    nuevaLista.innerText = nuevaNota;
    let lista = document.getElementById("campoNotas");
    lista.appendChild(nuevaLista);
}






// function ingresarUsuarios(){
//     let nombre = prompt("Ingresar nombres de usuarios");
//     listaNombres.push(nombre);
//
//     if (nombre.length < 1) {
//         alert("El nombre no puede estar vacío.");
//     } else {
//         localStorage.setItem("Nombres", listaNombres);
//     };
// };

// function mostrarStorage(){
//     let obtenerLocalStorage = localStorage.getItem("Nombres");
//     let newArray = obtenerLocalStorage.split(",")
//
//     let nombres = document.getElementById("contenedorNombres");
//     nombres.innerHTML = "";
//     for (let vuelta = 0;vuelta < newArray.length; vuelta++) {
//         nombres.innerHTML += newArray[vuelta] + "<br>";
//     }
// };
//







