//No es bueno que algo este en any

let habilidades: String [] =['Bash', 'Counter', 'Healing'];

// let habilidades:(boolean | string | number) [] =['Bash', 'Counter', 'Healing', 100];

//habilidades.push('Hola')

//Para definir un objeto podemos definir interfaces
// como queremos que un objeto luzca

interface Personaje {
    nombre: String;
    hp: number;
    habilidades: String[];
    puebloNatal?: String;
}//? es para decir que es opciónal

const personaje: Personaje = {
    nombre: 'Strinder',
    hp: 100,
    habilidades:["Bash","Counter","Healing"]   
}

personaje.puebloNatal = 'Pueblo Paleta';
    
console.table(personaje);