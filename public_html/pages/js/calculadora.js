/*
 * Autor:               Sara Alamillo Arroyo
 * Fecha creación:      18/10/2014
 * Última modificación: 09/12/2014
 * Versión:             1.0
 */

/**
 * Añade un número a la pantalla de la calculadora
 * @param String numero Número para añadir
 */
function escribirNumero(numero) {
    document.getElementById("operando").value += numero;
    borrarCero();
}

/**
 * En caso de que la cifra este precedida por un 0, borra dicho 0.
 */
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

/**
 * Añade a la pantalla un signo y guarda el operador que le precede
 * @param String signo Símbolo a escribir
 */
function escribirSigno(signo) {
    guardarOperador();
    document.getElementById("operacion").value += signo;
}

/**
 * Almacena el operador actual y pone la pantalla a 0
 */
function guardarOperador() {
    document.getElementById("operacion").value += document.getElementById("operando").value;
    document.getElementById("operando").value = 0;
}

/**
 * Elimina la última cifra del operador actual
 */
function borrarUltimo() {
    var operando = document.getElementById("operando").value;
    var resto = operando.substr(0, operando.length - 1);

    if (resto == "" || resto == "-") {
        document.getElementById("operando").value = 0;
    } else {
        document.getElementById("operando").value = resto;
    }
}

/**
 * Elimina el actual operando completo
 */
function borrarOperador() {
    document.getElementById("operando").value = 0;
}

/**
 * Elimina todas las operaciones actuales de la calculadora
 */
function borrarTodo() {
    document.getElementById("operacion").value = "";
    borrarOperador();
}

/**
 * Cambia el signo del operador actual
 */
function masMenos() {
    var actualOperador = eval(document.getElementById("operando").value);
    actualOperador *= -1;
    document.getElementById("operando").value = actualOperador;
}

/**
 * Añade decimales al operador actual
 */
function coma() {
    var coma = document.getElementById("operando").value.indexOf(".");

    if (coma == -1) {
        document.getElementById("operando").value += ".";
    }
}

/**
 * Finaliza la operación y devuelve el resultado
 */
function igual() {
    guardarOperador();

    var operacion = document.getElementById("operacion").value;
    operacion = operacion.replace("√", "Math.sqrt");

    var resultado = eval(operacion);

    borrarTodo();

    document.getElementById("operando").value = resultado;
}

/**
 * Divide 1 entre el operando actual
 */
function fraccion() {
    var valor = document.getElementById("operando").value;
    document.getElementById("operando").value = "(1/" + valor + ")";
}

/**
 * Realiza una raíz cuadrada del operador actual
 */
function raizCuadrada() {
    var valor = document.getElementById("operando").value;
    document.getElementById("operando").value = "√(" + valor + ")";
}

/**
 * Divide entre 100
 */
function porcentaje() {
    guardarOperador();
    document.getElementById("operacion").value += "/100";
}