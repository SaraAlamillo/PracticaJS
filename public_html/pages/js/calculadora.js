/*
 * Autor:               Sara Alamillo Arroyo
 * Fecha creación:      18/10/2014
 * Última modificación: 29/10/2014
 * Versión:             1.0
 */


function escribirNumero(numero) {
    document.getElementById("operando").value += numero;
    borrarCero();
}

function borrarCero() {
    var operando = document.getElementById("operando").value;
    var primerDigito = operando.substr(0, 1);
    var coma = operando.indexOf(".");
    var resto = operando.substr(1, operando.length - 1);

    if (primerDigito == 0 && coma == -1) {
        if (resto != "") {
            document.getElementById("operando").value = resto;
        } else {
            document.getElementById("operando").value = 0;
        }
    }
}

function escribirSigno(signo) {
    guardarOperador();
    document.getElementById("operacion").value += signo;
}

function guardarOperador() {
    document.getElementById("operacion").value += document.getElementById("operando").value;
    document.getElementById("operando").value = 0;
}

function borrarUltimo() {
    var operando = document.getElementById("operando").value;
    var resto = operando.substr(0, operando.length - 1);

    if (resto == "" || resto == "-") {
        document.getElementById("operando").value = 0;
    } else {
        document.getElementById("operando").value = resto;
    }
}

function borrarOperador() {
    document.getElementById("operando").value = 0;
}

function borrarTodo() {
    document.getElementById("operacion").value = "";
    borrarOperador();
}

function masMenos() {
    var actualOperador = eval(document.getElementById("operando").value);
    actualOperador *= -1;
    document.getElementById("operando").value = actualOperador;
}

function coma() {
    var coma = document.getElementById("operando").value.indexOf(".");

    if (coma == -1) {
        document.getElementById("operando").value += ".";
    }
}

function igual() {
    guardarOperador();

    var operacion = document.getElementById("operacion").value;
    operacion = operacion.replace("√", "Math.sqrt");

    var resultado = eval(operacion);

    borrarTodo();

    document.getElementById("operando").value = resultado;
}

function fraccion() {
    var valor = document.getElementById("operando").value;
    document.getElementById("operando").value = "(1/" + valor + ")";
}

function raizCuadrada() {
    var valor = document.getElementById("operando").value;
    document.getElementById("operando").value = "√(" + valor + ")";
}
function porcentaje() {
    guardarOperador();
    document.getElementById("operacion").value += "/100";
}