//Funciones

import { createQualifiedName, createUnparsedSourceFile } from "typescript";

//Tambien puedo poner lo que retorna despues de los parametros
function sumar(a: number, b:number):number{
    return (a + b);
}

//función de flecha
const sumarFlecha = (a:number, b:number):number =>{
    return a + b;
}

// los que se envian, los opciones? y por defecto
function multiplicar(numero:number, otroNumero?:number, base:number = 2):number {
    return numero * base;
}

//Se crea una interface para asignar una nueva persona, para poder curar a un personja se llama la función curar,
//Se asigna una variable de un nuevo personaje con los atributos de la interface y se llama el metodo curar
//interface asegurar que tenga los datos
interface personajeLOR{
    nombre:String;
    pv:number;
    mostrarHp: () => void;
}

function curar(personaje: personajeLOR, curarX:number):void {
    personaje.pv += curarX;    
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida', this.pv)
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();


