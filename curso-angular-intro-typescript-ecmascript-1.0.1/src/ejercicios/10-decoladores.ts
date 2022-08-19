//Decoladores para cambiar las cosas

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = 'new property'
      hello = 'owerride'
    };
  }
  
//los decoladores sirven para expandir
//o añadir funcionalidades
@classDecorator
class MiSuperClase{

    public mipropiedad:string = 'ABC123'

    imprimir(){
        console.log('Hola Mundo')
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase.mipropiedad);