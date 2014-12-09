/*
 * Autor:               Sara Alamillo Arroyo
 * Fecha creación:      18/10/2014
 * Última modificación: 18/10/2014
 * Versión:             1.0
 */

var ventana;

function abrirAgenda() {
    if (window.ventana) {
        ventana.close();
    }
    ventana = window.open('agenda.html', 'Agenda', "width=550px, height=510px,directories=no, location=no, status=no, left = 500 ,top= 90, menubar=no, scrollbars=no,status=no,toolbar=no, statusbar=no, tittlebar=no,resizable=no");
}
function abrirCalculadora() {
    if (window.ventana) {
        ventana.close();
    }
    ventana = window.open('calculadora.html', 'Calculadora', "width=250px, height=375px,directories=no, location=no, status=no, left = 500 ,top= 90, menubar=no, scrollbars=no,status=no,toolbar=no, statusbar=no, tittlebar=no,resizable=no");
}

