//Clases, extender una clase

class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string = 'No hay direccion'
    ){}
}

class Heroe extends PersonaNormal{

    constructor(
        public alterEgo: string, 
        public edad:number, 
        public nombreReal?:string
        ){//el super llama al constructor de donde extendemos
            super(nombreReal);
        }
}

const ironman = new Heroe('ironman', 15, 'Tony');

console.log(ironman)