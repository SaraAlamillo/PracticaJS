var listaPersonas = [];
var posicionActual;
var posicionFinal;
var tamanioAgenda = 100;

function Persona() {
    this.nombre = "";
    this.apellidos = "";
    this.nacimiento = fechaActual();
    this.telefono = "";
}

function fechaActual() {
    var fechaActual = new Date;
    var year = fechaActual.getFullYear();
    var mes = (fechaActual.getMonth() + 1);
    var dia = fechaActual.getDate();
    if (dia >= 1 && dia <= 9) {
        dia = "0" + dia;
    }

    return year + "-" + mes + "-" + dia;
}

function nuevo() {
    var nuevaPersona = new Persona();
    listaPersonas.push(nuevaPersona);
    actualizarPosiciones(eval(listaPersonas.length - 1));
}

function actualizarPosiciones(posActual) {
    posicionActual = posActual;
    document.getElementById("posicionActual").innerHTML = eval(posicionActual + 1);
    posicionFinal = eval(listaPersonas.length - 1);
    document.getElementById("posicionFinal").innerHTML = eval(posicionFinal + 1);
    actualizarEdiccion();
    actualizarRegistro();
    activarBotones();
    
}

function actualizarRegistro() {
    
    document.getElementById("bPrimero").disabled = false;
    document.getElementById("bAnterior").disabled = false;
    document.getElementById("bSiguiente").disabled = false;
    document.getElementById("bUltimo").disabled = false;
    if (posicionActual == "0") {
    document.getElementById("bPrimero").disabled = true;
    document.getElementById("bAnterior").disabled = true;
}
if (posicionFinal == posicionActual) {
    document.getElementById("bSiguiente").disabled = true;
    document.getElementById("bUltimo").disabled = true;
    }
}

function actualizarEdiccion() {
    document.getElementById("nombre").value = listaPersonas[posicionActual].nombre;
    document.getElementById("apellidos").value = listaPersonas[posicionActual].apellidos;
    document.getElementById("nacimiento").value = listaPersonas[posicionActual].nacimiento;
    document.getElementById("telefono").value = listaPersonas[posicionActual].telefono;
    actualizarResumen();
}

function actualizarResumen() {
    document.getElementById("resumen").innerHTML = "RESUMEN AGENDA\n";
    document.getElementById("resumen").innerHTML += "==============\n";
    document.getElementById("resumen").innerHTML += "\n";
    
    for (var aux = 0; aux <= posicionFinal; aux++) {
        var persona = listaPersonas[aux];
        document.getElementById("resumen").innerHTML += eval(aux + 1) + ". " + persona.nombre + " " + persona.apellidos + " -- " + persona.telefono + " -- " + persona.nacimiento.toString() + "\n";
    }
    
    document.getElementById("resumen").innerHTML += "\n";
    document.getElementById("resumen").innerHTML += "Total entradas almacendas: " + listaPersonas.length + "\n";
    document.getElementById("resumen").innerHTML += "Espacio libre: " + eval(tamanioAgenda - listaPersonas.length) + "\n";
}

function modificar() {
    listaPersonas[posicionActual].nombre = document.getElementById("nombre").value;
    listaPersonas[posicionActual].apellidos = document.getElementById("apellidos").value;
    listaPersonas[posicionActual].nacimiento = document.getElementById("nacimiento").value;
    listaPersonas[posicionActual].telefono = document.getElementById("telefono").value;
    actualizarResumen();
}

function irPrimero() {
    actualizarPosiciones("0");
}

function irAnterior() {
    actualizarPosiciones(posicionActual - 1);
}

function irSiguiente() {
    actualizarPosiciones(posicionActual + 1);
}

function irUltimo() {
    actualizarPosiciones(posicionFinal);
}

function ver() {
    var nuevaPosicion = document.getElementById("entradaBuscada").value;
    if (nuevaPosicion < 1 || nuevaPosicion > posicionFinal) {
        alert("El número de registro no existe");
    } else {
    nuevaPosicion--;
    actualizarPosiciones(nuevaPosicion);
    }
}

function borrar() {
    listaPersonas.splice(posicionActual, 1);
    var nuevaPosicion;
    if (posicionActual == posicionFinal) {
        nuevaPosicion = eval(posicionActual - 1);
    } else {
        nuevaPosicion = posicionActual;
    }
    actualizarPosiciones(nuevaPosicion);    
}

function buscar() {
    var buscador = window.open("buscador.html", "Buscador", 'width=500, height=500')
}

function activarBotones() {
    if (document.getElementById("posicionFinal").innerHTML >= 1) {
        document.getElementById("fRegistro").disabled = false;
        document.getElementById("bModificar").disabled = false;
        document.getElementById("bBorrar").disabled = false;
        document.getElementById("bBuscar").disabled = false;
        document.getElementById("bVer").disabled = false;
    } 
    if (document.getElementById("posicionFinal").innerHTML == "0") {
        document.getElementById("fRegistro").disabled = true;
        document.getElementById("bModificar").disabled = true;
        document.getElementById("bBorrar").disabled = true;
        document.getElementById("bBuscar").disabled = true;
        document.getElementById("bVer").disabled = true;
    }
}

function datosPrueba() {
    var p = new Persona();
    p.apellidos = "Arroyo García";
    p.nombre = "Concepción";
    p.telefono = "959047215";
    p.nacimiento = "1962-05-19";
    listaPersonas.push(p);
    var p = new Persona();
    p.apellidos = "Alamillo Marín";
    p.nombre = "Francisco Román";
    p.telefono = "65242185";
    p.nacimiento = "1962-05-20";
    listaPersonas.push(p);
    var p = new Persona();
    p.apellidos = "Alamillo Arroyo";
    p.nombre = "Celia";
    p.telefono = "619876032";
    p.nacimiento = "1987-01-25";
    listaPersonas.push(p);
    var p = new Persona();
    p.apellidos = "Alamillo Arroyo";
    p.nombre = "Sara";
    p.telefono = "695121935";
    p.nacimiento = "1993-05-23";
    listaPersonas.push(p);
    var p = new Persona();
    p.apellidos = "Carrasco Jiménez";
    p.nombre = "Fernando";
    p.telefono = "658795194";
    p.nacimiento = "1990-09-20";
    listaPersonas.push(p);
    
    actualizarPosiciones(listaPersonas.length - 1);
}