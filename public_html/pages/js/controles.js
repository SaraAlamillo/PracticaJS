/*
 * Autor:               Sara Alamillo Arroyo
 * Fecha creación:      18/10/2014
 * Última modificación: 18/10/2014
 * Versión:             1.0
 */

var ventana;

function abrirVentana(enlace) {
    if (window.ventana) {
        ventana.close();
    }
	ventana = window.open(enlace, '' , "width=1034px, height=550px,directories=no, location=no, status=no, left = 300 ,top= 90, menubar=no, scrollbars=no,status=no,toolbar=no, statusbar=no, tittlebar=no,resizable=no");
}

