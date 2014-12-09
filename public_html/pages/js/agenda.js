/* 
 Autor:               Sara Alamillo Arroyo
 Fecha creación:      02/12/2014
 Última modificación: 09/12/2014
 Versión:             1.0
 */

/**
 * Contiene el listado de personas actualmente en la agenda
 * @type Array
 */
var listaPersonas = [];

/**
 * Contiene la posición actual en la que está la agenda
 * @type Number
 */
var posicionActual;

/**
 * Contiene la última posición de la agenda
 * @type Number
 */
var posicionFinal;

/**
 * Contiene el tamaño máximo de la agenda
 * @type Number
 */
var tamanioAgenda = 100;

/**
 * Declaración del objeto Persona
 */
function Persona() {
    this.nombre = "";
    this.apellidos = "";
    this.nacimiento = fechaActual();
    this.telefono = "";
}

/**
 * Devuelve la fecha actual del sistema
 * @returns String Fecha actual
 */
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

/**
 * Añade un nuevo registro a la agenda
 */
function nuevo() {
    if (listaPersonas.length >= tamanioAgenda) {
        alert("Se ha llegado al límite de la agenda");
    } else {
        var nuevaPersona = new Persona();
        listaPersonas.push(nuevaPersona);
        actualizarPosiciones(eval(listaPersonas.length - 1));
    }
}

/**
 * Cambia la posición actual por la dada
 * @param Number posActual Nueva posición de la agenda
 */
function actualizarPosiciones(posActual) {
    posicionActual = posActual;
    document.getElementById("posicionActual").innerHTML = eval(posicionActual + 1);
    posicionFinal = eval(listaPersonas.length - 1);
    document.getElementById("posicionFinal").innerHTML = eval(posicionFinal + 1);
    actualizarEdiccion();
    actualizarRegistro();
    activarBotones();

}
/**
 * Establece los controles del registro según la posición actual
 */
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

/**
 * Establece los campos de edicción en función de la posición actual
 */
function actualizarEdiccion() {
    if (posicionActual == "-1") {
        document.getElementById("nombre").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("nacimiento").value = "";
        document.getElementById("telefono").value = "";
    } else {
        document.getElementById("nombre").value = listaPersonas[posicionActual].nombre;
        document.getElementById("apellidos").value = listaPersonas[posicionActual].apellidos;
        document.getElementById("nacimiento").value = listaPersonas[posicionActual].nacimiento;
        document.getElementById("telefono").value = listaPersonas[posicionActual].telefono;
    }
    actualizarResumen();
}

/**
 * Muestra todos los datos de todas las personas en un área de texto
 */
function actualizarResumen() {
    document.getElementById("resumen").innerHTML = "RESUMEN AGENDA\n";
    document.getElementById("resumen").innerHTML += "==============\n";
    document.getElementById("resumen").innerHTML += "\n";

    if (posicionFinal != "-1") {
        for (var aux = 0; aux <= posicionFinal; aux++) {
            var persona = listaPersonas[aux];
            document.getElementById("resumen").innerHTML += eval(aux + 1) + ". " + persona.nombre + " " + persona.apellidos + " -- " + persona.telefono + " -- " + persona.nacimiento.toString() + "\n";
        }

        document.getElementById("resumen").innerHTML += "\n";
        document.getElementById("resumen").innerHTML += "Total entradas almacendas: " + listaPersonas.length + "\n";
        document.getElementById("resumen").innerHTML += "Espacio libre: " + eval(tamanioAgenda - listaPersonas.length) + "\n";
    } else {
        document.getElementById("resumen").innerHTML += "No existen datos en la agenda\n";
    }
}

/**
 * Modifica los campos del registro actual
 */
function modificar() {
    listaPersonas[posicionActual].nombre = document.getElementById("nombre").value;
    listaPersonas[posicionActual].apellidos = document.getElementById("apellidos").value;
    listaPersonas[posicionActual].nacimiento = document.getElementById("nacimiento").value;
    listaPersonas[posicionActual].telefono = document.getElementById("telefono").value;
    actualizarResumen();
}

/**
 * Cambia la posición de la agenda a la primera
 */
function irPrimero() {
    actualizarPosiciones("0");
}

/**
 * Retrocede una posición en la agenda respecto a la actual
 */
function irAnterior() {
    actualizarPosiciones(posicionActual - 1);
}

/**
 * Avanza ua posción en la agenda respecto a la actual
 */
function irSiguiente() {
    actualizarPosiciones(posicionActual + 1);
}

/**
 * Cambia la posición actual de la agenda a la última
 */
function irUltimo() {
    actualizarPosiciones(posicionFinal);
}

/**
 * Cambia la posición de la agenda a un registro dado
 */
function ver() {
    var nuevaPosicion = document.getElementById("entradaBuscada").value;
    if (nuevaPosicion < 1 || nuevaPosicion > posicionFinal) {
        alert("El número de registro no existe");
    } else {
        nuevaPosicion--;
        actualizarPosiciones(nuevaPosicion);
    }
}

/**
 * Elimina el registro actual de la agenda
 */
function borrar() {
    if (posicionActual != "-1") {
        listaPersonas.splice(posicionActual, 1);
        var nuevaPosicion;
        if (posicionActual == posicionFinal) {
            nuevaPosicion = eval(posicionActual - 1);
        } else {
            nuevaPosicion = posicionActual;
        }
        actualizarPosiciones(nuevaPosicion);
    }
}

/**
 * Abre la ventana del buscador
 */
function buscar() {
    var buscador = window.open("buscador.html", "Buscador", 'width=550px, height=510px, left = 500 ,top= 90');
    buscador.focus();
}

/**
 * Activa o desactiva botones en función de la posición actual
 */
function activarBotones() {
    if (document.getElementById("posicionFinal").innerHTML >= 1) {
        document.getElementById("fRegistro").disabled = false;
        document.getElementById("bModificar").disabled = false;
        document.getElementById("bBorrar").disabled = false;
        document.getElementById("bBuscar").disabled = false;
        document.getElementById("bVer").disabled = false;
    }
    if (document.getElementById("posicionActual").innerHTML == "0") {
        document.getElementById("fRegistro").disabled = true;
        document.getElementById("bModificar").disabled = true;
        document.getElementById("bBorrar").disabled = true;
        document.getElementById("bBuscar").disabled = true;
        document.getElementById("bVer").disabled = true;
    }
}

/**
 * Añade cinco registros a la agenda
 */
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