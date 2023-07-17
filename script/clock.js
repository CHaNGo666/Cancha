
let timerVar, totalSeconds, timeVarTotal, totalSecondsTotal;
const coltpj = 4, coltpd = 5, colJd = 8;

// tiempo parcial
function countTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (seconds < 10)
        seconds = "0" + seconds;
    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;

}
// tiempo total
function countTimerTotal() {
    ++totalSecondsTotal;
    var hour = Math.floor(totalSecondsTotal / 3600);
    var minute = Math.floor((totalSecondsTotal - hour * 3600) / 60);
    var seconds = totalSecondsTotal - (hour * 3600 + minute * 60);
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (seconds < 10)
        seconds = "0" + seconds;
    document.getElementById("timerTotal").innerHTML = hour + ":" + minute + ":" + seconds;
}



// COMIENZO
start_timer.addEventListener('click', e => {

    console.log("start")

    timerVar = setInterval(countTimer, 1000);
    totalSeconds = 0;

    timerVarTotal = setInterval(countTimerTotal, 1000);
    totalSecondsTotal = localStorage.getItem("tiempoTotal");
    console.log(totalSecondsTotal)

});


// PAUSA
pause_timer.addEventListener('click', e => {

    localStorage.setItem("tiempoTotal", totalSecondsTotal);
    localStorage.setItem("tiempoParcial", totalSeconds);
    datosParciales()
    clearInterval(timerVar)
    clearInterval(timerVarTotal)

});

// DETENCION
stop_timer.addEventListener('click', e => {

    localStorage.clear("tiempoTotal");
    clearInterval(timerVar)
    clearInterval(timerVarTotal)

});

// IMPRIME TIEMPOS EN PANTALLA
function datosParciales() {

    //nodo de tabla
    const parcial = localStorage.getItem("tiempoParcial");
    //nodo tr
    const tr = document.getElementById("listaJugadores").querySelectorAll("#listaJugadores tbody tr");


    console.log(tr)
    // recorre tr
    for (let i = 0; i < tr.length; i++) {

        console.log("tr --> ", tr[i].children[8].textContent)
        // asigna parciales
        if (tr[i].children[colJd].textContent === "J") {
            tr[i].children[coltpj].textContent = parcial;
        }
        else {
            tr[i].children[coltpd].textContent = parcial;
        }
    }
    // J/D
    //document.getElementById(a).children[8].textContent = "J";

}

