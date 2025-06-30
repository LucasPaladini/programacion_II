let listaFrases = []

function ingresarFrase () {
    let frases = document.getElementById("frases").value;
    listaFrases.push(frases.split());
    localStorage.setItem("frases", listaFrases);
    frases.value = "";
}

function mostrarFrase () {
    let frases = localStorage.getItem("frases"[0]);
    let p = document.createElement("p");
    p.innerHtml = frases[0];
}

// borrarLocal()

function borrarLocal () {
    localStorage.clear()
}