// Inserte el código aquí

import { calculadora } from "./calculadora.js";

function calcular(operacion, numero1, numero2) {
if (operacion=="suma") {
    console.log(calculadora.suma(numero1,numero2))
} else{
    if (operacion=="resta") {
        console.log(calculadora.resta(numero1,numero2))
    }
} 
if (operacion=="multiplicacion") {
    console.log(calculadora.multiplicacion(numero1,numero2))
} else{
    if (operacion=="division") {
        console.log(calculadora.division(numero1,numero2))
    }
}
 
}



calcular("suma", 5,7);


