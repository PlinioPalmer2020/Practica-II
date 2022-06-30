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
const pi = 3.14159;
const AreaCirculo = (p,r) => p* Math.pow(r,2)
console.log(`El Area del Circulo es ${AreaCirculo(pi,5)}`)  

// 5 - Utilice de destructuring para crear dos variable que almacenen los primeros dos elementos del arreglo resultante del ejercicio 2. 
const destructuring = ([valor1, valor2]) =>
    console.log(`Los primeros dos elemento del arreglo son ${valor1} y ${valor2} del ejercicio 2`)
destructuring(impares);

// 6 - Cree una clase llamada persona con dos atributos : nombre y apellido. Luego cree otra clase llama empleado que herede de Persona y tenga un atributo adicional llamado salario.

class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, salario){
        super(nombre,apellido)
        this.salario = salario
    }
}

var persona1 = new Persona("Plinio","Palmer");
var empleado1 = new Empleado("Plinio","Palmer","50,000.00");

const info = Persona =>{
    const {nombre, apellido} = Persona;
    console.log(`La persona ${nombre} ${apellido}`);
}
info(persona1);

const info2 = Empleado =>{
    const {nombre, apellido, salario} = Empleado;
    console.log(`El empleado ${nombre} ${apellido} tiene un salario de RD$${salario}`);
}
info2(empleado1);