//Desestructuación de Objetos

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Hola',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const {volumen, segundo, cancion, detalles:{autor,anio}} = reproductor;
//const {autor,anio} = detalles

// se puede cambiar el nombre asi
// const {volumen: vol, segundo, cancion, detalles:{autor,anio}} = reproductor;

// console.log('El volumen actual es de', volumen)//vol
// console.log('El segundo actual es de', segundo)
// console.log('La canción actual es de', volumen)
// console.log('El autor es:', autor)

//DESESTRUCTURACIÓN DE ARREGLOS

const dbz: string [] = ['Goku', 'Vegata', 'Trunks'];

//[]arreglo, {}objeto para desestructurar
const [ , , p3] = dbz;



// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);


