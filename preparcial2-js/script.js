let dolar = 1200;
let euro = 1400;

monedas = {
    dolar: 1200,
    euro: 1400
}



function botonCotizacion() {
    let inputArs = document.getElementById("campo_ingreso").value;
    let moneda = document.getElementById("seleccion").value;

    document.getElementById('campo_texto').textContent = "Valor total "+ " en " + moneda + ": " +  Number(inputArs) * Number(monedas[moneda]) ;
}

function agregarSeccion() {
    let moneda_valor = document.getElementById("moneda_valor").value;
    let moneda_nueva = document.getElementById("moneda_nueva").value;

    let select = document.getElementById("seleccion");
    select.options.add(new Option(moneda_nueva, moneda_nueva));
    monedas[moneda_nueva] = Number(moneda_valor);
}

