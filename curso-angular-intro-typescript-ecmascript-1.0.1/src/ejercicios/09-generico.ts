
function queTipoSoy<T>(argumento: T){//:string
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNombre = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8])

let n = queTipoSoy<number>(100);
