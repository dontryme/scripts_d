/*
21-06-2017

esta función bloquea el boton de submit 
si el valor del un combo está en ""Seleccione un valor"

la forma de llamarla es verificaIngreso(bloqueaIngreso)

*/

const verificaIngreso = function (bloquea) {
    let valor_combo_proceso = document.getElementById('proceso').value;
    let bloqueo = false;
    (valor_combo_proceso == 'Seleccione un valor') ? bloqueo = true : bloqueo = false;
    if (bloqueo) {
        bloquea(bloqueo);
    } else {
        bloquea(bloqueo);
    }
    
}

const bloqueaIngreso = function ( bolean_value ) {
    let btn = document.getElementById('lbl3');
    
    if (bolean_value) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

}