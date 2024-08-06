function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states, PasosRestantes) {
    if (PasosRestantes <= 0) {
        document.getElementById("log").innerHTML += `<br>Algoritmo realizado con éxito`;
        return;
    }

    var location = states[0];
    var state = location == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);

    document.getElementById("log").innerHTML += `<br>Ubicación: ${location} | Estado: ${state} | Acción: ${action_result}`;

    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    } else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";

    setTimeout(function() {
        test(states, PasosRestantes - 1);
    }, 1000);
}

var states = ["A", "DIRTY", "DIRTY"];
var MovimientosTotales = 16;
test(states, MovimientosTotales);
