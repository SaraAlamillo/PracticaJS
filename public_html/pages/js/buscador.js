var listado = window.opener.listaPersonas;

function buscar() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var nacimiento = document.getElementById("nacimiento").value;

    var resultados = [];

    for (var i = 0, max = listado.length; i < max; i++) {
        if (listado[i].nombre == nombre || listado[i].apellidos == apellidos || listado[i].telefono == telefono || listado[i].nacimiento == nacimiento) {
            resultados.push(listado[i]);
        }

    }

    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    document.getElementById("busqueda").innerHTML = "RESULTADOS DE LA BÚSQUEDA\n";
    document.getElementById("busqueda").innerHTML += "========================\n";
    document.getElementById("busqueda").innerHTML += "\n";

    if (resultados.length == 0) {
        document.getElementById("busqueda").innerHTML += "No existen datos en la agenda con esos criterios\n";
    } else {
        for (var aux = 0; aux <= resultados.length; aux++) {
            var persona = resultados[aux];
            document.getElementById("busqueda").innerHTML += eval(aux + 1) + ". " + persona.nombre + " " + persona.apellidos + " -- " + persona.telefono + " -- " + persona.nacimiento.toString() + "\n";
        }
    }
}