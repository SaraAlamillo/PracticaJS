/*
 * Autor:               Sara Alamillo Arroyo
 * Fecha creación:      18/10/2014
 * Última modificación: 09/12/2014
 * Versión:             1.0
 */

/**
 * Contiene la última ventana creada
 * @type Object
 */
var ventana;

/**
 * Abre la ventana para la agenda
 */
function abrirAgenda() {
    if (window.ventana) {
        ventana.close();
    }
    ventana = window.open('agenda.html', 'Agenda', "width=550px, height=510px, left = 500 ,top= 90");
}

/**
 * Abre la ventana para la calculadora
 */
function abrirCalculadora() {
    if (window.ventana) {
        ventana.close();
    }
    ventana = window.open('calculadora.html', 'Calculadora', "width=250px, height=375px, left = 500,top= 90");
}

