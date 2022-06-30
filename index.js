// REPASO DE JAVASCRIP:
// Dado el arreglo [1,2,3,4,5,6]  

const arregloDado = [1,2,3,4,5,6];


// 1 - Genere un nuevo arreglo cuyos elementos se obtengan multiplicando por cinco los elementos del arreglo anterior.
let arregloMul = arregloDado.map(x => x * 5);
console.log(arregloMul);

// 2 - Tomando el arreglo resultante del ejercicio 1, genere un nuevo arreglo que contenga sólo los elementos que sean números impares.
let impares = arregloMul.filter(x => x%2 != 0);
console.log(impares);

// 3 - Escriba una función flecha del tipo campo público de clase que tome por argumento un nombre y retorne el mensaje "Hola nombre". Usar template string.
const saludo = nombre => `Hola ${nombre}`;
console.log(saludo("plinio"));
// 4 - Haga una función flecha que calcule el área de un círculo. El valor de pi debe ser constante.


// 5 - Utilice de destructuring para crear dos variable que almacenen los primeros dos elementos del arreglo resultante del ejercicio 2. 


// 6 - Cree una clase llamada persona con dos atributos : nombre y apellido. Luego cree otra clase llama empleado que herede de Persona y tenga un atributo adicional llamado salario.