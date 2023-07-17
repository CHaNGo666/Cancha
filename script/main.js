// FUNCION ALTA JUGADORES
//-------------------------------------------------------------------------------------------------------
// VERDE --> class="success"
// ROJO --> class="danger"
function altaJugador(a) {

    const idTr = 's' + a;
    const idSpanBtn = 'spanBtn' + a;
    //select
    const selectPosicionCancha = document.getElementById(idTr);
    // option del select
    let posicion = selectPosicionCancha.options[selectPosicionCancha.selectedIndex].value;
    // Apellido de la jugadora
    const apellido = document.getElementById(a).children[1].textContent;
    // array de posiciones habilitadas
    const posiciones = ["arq", "li", "ld", "dci", "dcd", "mi", "md", "mci", "mcd", "dc", "mp"];
    // valida posicion
    if (posiciones.includes(posicion)) {

        // Pone nombre a icono de cancha
        document.getElementById(posicion).children[1].textContent = apellido;
        // J/D
        document.getElementById(a).children[8].textContent = "J";
        // da color al TR
        document.getElementById(a).classList.add('success');
        document.getElementById(idSpanBtn).classList.remove('glyphicon-save');
        document.getElementById(idSpanBtn).classList.add('glyphicon-sort');
       
    }
    else {
        console.log("Error")
    }
}
//-------------------------------------------------------------------------------------------------------

//arma lista jugadores

window.addEventListener('load', function () {

    //  array de jugadores
    let equipo = [
        { apellido: "Perez", nombre: "Maria" }, { apellido: "Martinez", nombre: "Sandra" }, { apellido: "Lopez", nombre: "Ramona" }, { apellido: "Paz", nombre: "Sandra" },
        { apellido: "Aimar", nombre: "Luciana" }, { apellido: "Juarez", nombre: "Maria" }, { apellido: "Rodriguez", nombre: "Sandra" }, { apellido: "Barrera", nombre: "Ramona" },
        { apellido: "Sobral", nombre: "Ramona" }, { apellido: "Borgiani", nombre: "Luciana" }, { apellido: "Berger", nombre: "Maria" }, { apellido: "Insua", nombre: "Luciana" },
        { apellido: "Perez", nombre: "Susana" }, { apellido: "Garcia", nombre: "Sandra" }, { apellido: "Nieto", nombre: "Ramona" }, { apellido: "Lancissi", nombre: "Luciana" },
        { apellido: "Lucero", nombre: "Maria" }, { apellido: "Mamani", nombre: "Sandra" }, { apellido: "Airez", nombre: "Ramona" }, { apellido: "Calabria", nombre: "Luciana" }
    ]

    //  FOR --> embebe en html la lista de jugadores
    let x = "";
    for (let i = 0; i < equipo.length; i++) {

        x += "<tr id=\"" + i + "\"> <td>" + i + "</td> <td>" + equipo[i].apellido + "</td> <td>" + equipo[i].nombre + "</td>";
        x += "<td><select name=\"s" + i + "\" id=\"s" + i + "\"><option value=\"SD\">Elegir</option><option value=\"arq\">ARQ</option><option value=\"ld\">LD</option>";
        x += "<option value=\"li\">LI</option><option value=\"dcd\">DCD</option>";
        x += "<option value=\"dci\">DCI</option><option value=\"md\">MD</option><option value=\"mi\">MI</option><option value=\"mcd\">MCD</option><option value=\"mci\">MCI</option>";
        x += "<option value=\"mp\">MP</option><option value=\"dc\">DC</option></select></td>";
        x += "<td></td><td></td><td></td><td></td><td>D</td>";
        x += "<td><button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\"onclick=\"altaJugador('" + i + "')\">";
        x += "<span class=\"glyphicon glyphicon-save\" aria-hidden=\"true\" id=\"spanBtn"+i+"\" ></span></button></td></tr>";

    }
    // TABLA --> imprime en pantalla
    let armado = document.getElementById("listaJugadores").getElementsByTagName("tbody")[0];
    armado.innerHTML = x;


});