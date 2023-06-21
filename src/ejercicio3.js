
let Arreglo= [1,2,3,4,5]
function clonarArreglo() {
   let nuevoArreglo = Arreglo 
} 
 
 console.log(nuevoArreglo);

 
*// ejercicio 2

let objeto={
    carro:"red", 
}
 
function clonarObjeto(objeto) {
    return (clonar= {...objeto});
} 

*// ejercicio suma 3

function SumarTotal(valor1, valor2) {
    return (sumar= valor1 + valor2);
}
let sumaActual = [1, 2, 4].reduce(SumarTotal);
console.log(sumaActual); 

*// EJERCICIO 4

let saludar = (nombre = "desconocido") => {
    console.log("hola", nombre);
} 
arrowsaludar("Juana"); 

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };