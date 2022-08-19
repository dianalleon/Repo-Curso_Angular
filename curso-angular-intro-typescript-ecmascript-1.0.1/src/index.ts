import { faker } from '@faker-js/faker';

let nombres: string [] = [];

function generarNombre(s:number):string[]{
    let result2:string = '';

    for (let i = 0; i < s; i++) {
        result2= faker.name.firstName();
        nombres.push(result2);
    }
    return nombres;
}

generarNombre(4);
console.log(nombres);

function nuevo(letra:string, reemplazo:string, nombres:string[]):string[]{

    // for (let i = 0; i < nombres.length; i++) {
    //      nombres[i]= nombres[i].replace(letra,reemplazo)
    // }
    nombres.forEach(function (value:string) {
         nombres[nombres.indexOf(value)] = value.replace(letra, reemplazo);
    });

    return nombres;
}

nuevo('a','x', nombres);
console.log(nombres)





